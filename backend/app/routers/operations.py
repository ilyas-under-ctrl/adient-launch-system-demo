import json
from datetime import datetime, timedelta, timezone
from pathlib import Path
from uuid import uuid4

from fastapi import APIRouter, Depends, File, Form, Header, HTTPException, UploadFile
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Project, ProjectAssignment, ReferenceEntry, User
from app.models.operations import LaunchInstruction, MaterialStock, PurchaseOrder

router = APIRouter(prefix="/api", tags=["prototype operations"])
UPLOAD_DIR = Path("backend/uploads")


def require_demo_role(
    x_demo_role: str = Header(default="engineer"),
) -> str:
    if x_demo_role not in {"engineer", "wh_lead", "admin"}:
        raise HTTPException(status_code=403, detail="Role not enabled for the integrated prototype")
    return x_demo_role


def launch_dict(item: LaunchInstruction) -> dict:
    return {
        "id": item.id,
        "code": item.code,
        "project": item.project_name,
        "po": item.po_id,
        "status": item.status,
        "created_by": item.created_by,
        "created_at": item.created_at,
        "expires_at": item.expires_at,
        "used_at": item.used_at,
        "receiver": item.receiver,
        "meeting_minutes_name": item.meeting_minutes_name,
        "warehouse_document_name": item.warehouse_document_name,
        "signed_document_name": item.signed_document_name,
        "fgpn_quantities": item.launch_lines,
        "materials": item.material_lines,
    }


@router.get("/bootstrap")
def bootstrap(_: str = Depends(require_demo_role), db: Session = Depends(get_db)):
    return {
        "projects": [{"id": str(row.id), "name": row.name, "status": row.status.value} for row in db.query(Project).all()],
        "purchase_orders": [
            {
                "id": row.id,
                "project": row.project_name,
                "customer": row.customer,
                "status": row.status,
                "delivery": row.delivery_date,
                "stock_code": row.stock_code,
                "fgpn_lines": row.fgpn_lines,
            }
            for row in db.query(PurchaseOrder).all()
        ],
        "materials": [
            {
                "code": row.code,
                "desc": row.description,
                "type": row.material_type,
                "supplier": row.supplier,
                "unit": row.unit,
                "warehouse": row.warehouse,
                "wip": row.wip,
                "transit": row.transit,
            }
            for row in db.query(MaterialStock).all()
        ],
        "launches": [launch_dict(row) for row in db.query(LaunchInstruction).order_by(LaunchInstruction.created_at.desc()).all()],
    }


@router.get("/admin-snapshot")
def admin_snapshot(role: str = Depends(require_demo_role), db: Session = Depends(get_db)):
    if role != "admin":
        raise HTTPException(status_code=403, detail="System administrator role required")
    return {
        "backend": "FastAPI + SQLite",
        "users": db.query(User).count(),
        "projects": db.query(Project).count(),
        "assignments": db.query(ProjectAssignment).count(),
        "references": db.query(ReferenceEntry).count(),
        "purchase_orders": db.query(PurchaseOrder).count(),
        "launches": db.query(LaunchInstruction).count(),
    }


@router.post("/launches", status_code=201)
async def create_launch(
    project: str = Form(...),
    po: str = Form(...),
    created_by: str = Form("Launch Engineer"),
    launch_lines: str = Form(...),
    material_lines: str = Form(...),
    meeting_minutes: UploadFile = File(...),
    role: str = Depends(require_demo_role),
    db: Session = Depends(get_db),
):
    if role != "engineer":
        raise HTTPException(status_code=403, detail="Launch Engineer role required")
    if not meeting_minutes.filename or not meeting_minutes.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=422, detail="Meeting minutes must be a PDF")
    purchase_order = db.get(PurchaseOrder, po)
    if not purchase_order:
        raise HTTPException(status_code=404, detail="Purchase order not found")
    if purchase_order.project_name != project:
        raise HTTPException(status_code=409, detail="Purchase order does not belong to the selected project")
    try:
        parsed_launch_lines = json.loads(launch_lines)
        parsed_material_lines = json.loads(material_lines)
    except json.JSONDecodeError as error:
        raise HTTPException(status_code=422, detail="Launch and material lines must be valid JSON") from error
    if not parsed_launch_lines or any(float(line.get("qty", 0)) <= 0 for line in parsed_launch_lines):
        raise HTTPException(status_code=422, detail="At least one positive launch quantity is required")
    shortages = []
    for line in parsed_material_lines:
        material = db.get(MaterialStock, line.get("code"))
        required = float(line.get("qty") or line.get("required") or 0)
        available = float((material.warehouse + material.wip) if material else 0)
        if required <= 0 or required > available:
            shortages.append({"code": line.get("code"), "required": required, "available": available})
    if shortages:
        raise HTTPException(status_code=409, detail={"message": "Material stock is insufficient", "shortages": shortages})
    now = datetime.now(timezone.utc)
    launch_id = f"MD-{now.strftime('%y%m%d')}-{uuid4().hex[:4].upper()}"
    code = f"DEL-{now.strftime('%Y%m%d')}-{uuid4().hex[:6].upper()}"
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    stored_name = f"{launch_id}-meeting.pdf"
    (UPLOAD_DIR / stored_name).write_bytes(await meeting_minutes.read())
    item = LaunchInstruction(
        id=launch_id,
        code=code,
        project_name=project,
        po_id=po,
        status="Code Generated",
        created_by=created_by,
        expires_at=now + timedelta(hours=48),
        meeting_minutes_name=meeting_minutes.filename,
        launch_lines=parsed_launch_lines,
        material_lines=parsed_material_lines,
    )
    db.add(item)
    db.commit()
    db.refresh(item)
    return launch_dict(item)


class CodeRequest(BaseModel):
    code: str


@router.post("/warehouse/verify")
def verify_code(payload: CodeRequest, role: str = Depends(require_demo_role), db: Session = Depends(get_db)):
    if role != "wh_lead":
        raise HTTPException(status_code=403, detail="Warehouse Team Leader role required")
    item = db.query(LaunchInstruction).filter(LaunchInstruction.code == payload.code.strip()).first()
    if not item:
        raise HTTPException(status_code=404, detail="Invalid delivery code")
    now = datetime.now(timezone.utc)
    expires_at = item.expires_at
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if item.used_at:
        raise HTTPException(status_code=409, detail="Delivery code has already been used")
    if expires_at < now:
        raise HTTPException(status_code=410, detail="Delivery code has expired")
    item.used_at = now
    item.status = "Code Used"
    db.commit()
    db.refresh(item)
    return launch_dict(item)


class ReceiverRequest(BaseModel):
    receiver: str


@router.patch("/warehouse/launches/{launch_id}/receiver")
def set_receiver(
    launch_id: str,
    payload: ReceiverRequest,
    role: str = Depends(require_demo_role),
    db: Session = Depends(get_db),
):
    if role != "wh_lead":
        raise HTTPException(status_code=403, detail="Warehouse Team Leader role required")
    item = db.get(LaunchInstruction, launch_id)
    if not item:
        raise HTTPException(status_code=404, detail="Launch not found")
    if not item.used_at:
        raise HTTPException(status_code=409, detail="Validate the delivery code first")
    if not payload.receiver.strip():
        raise HTTPException(status_code=422, detail="Manufacturing receiver is required")
    item.receiver = payload.receiver
    db.commit()
    return launch_dict(item)


@router.post("/warehouse/launches/{launch_id}/document")
def generate_document(launch_id: str, role: str = Depends(require_demo_role), db: Session = Depends(get_db)):
    if role != "wh_lead":
        raise HTTPException(status_code=403, detail="Warehouse Team Leader role required")
    item = db.get(LaunchInstruction, launch_id)
    if not item or not item.receiver:
        raise HTTPException(status_code=409, detail="Select a manufacturing receiver first")
    if not item.used_at:
        raise HTTPException(status_code=409, detail="Validate the delivery code first")
    item.warehouse_document_name = f"warehouse-to-manufacturing_{item.code}.pdf"
    item.status = "Waiting for Signed PDF"
    db.commit()
    return launch_dict(item)


@router.post("/warehouse/launches/{launch_id}/signed-reception")
async def upload_signed_reception(
    launch_id: str,
    signed_pdf: UploadFile = File(...),
    role: str = Depends(require_demo_role),
    db: Session = Depends(get_db),
):
    if role != "wh_lead":
        raise HTTPException(status_code=403, detail="Warehouse Team Leader role required")
    item = db.get(LaunchInstruction, launch_id)
    if not item:
        raise HTTPException(status_code=404, detail="Launch not found")
    if not signed_pdf.filename or not signed_pdf.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=422, detail="Signed reception must be a PDF")
    if item.status == "Delivered":
        raise HTTPException(status_code=409, detail="Reception already validated")
    if not item.warehouse_document_name:
        raise HTTPException(status_code=409, detail="Generate the warehouse transfer document first")
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    (UPLOAD_DIR / f"{launch_id}-signed.pdf").write_bytes(await signed_pdf.read())
    item.signed_document_name = signed_pdf.filename
    item.status = "Signed Document Uploaded"
    db.commit()
    return launch_dict(item)


@router.post("/launches/{launch_id}/confirm-reception")
def confirm_signed_reception(
    launch_id: str,
    role: str = Depends(require_demo_role),
    db: Session = Depends(get_db),
):
    if role != "engineer":
        raise HTTPException(status_code=403, detail="Launch Engineer role required")
    item = db.get(LaunchInstruction, launch_id)
    if not item or not item.signed_document_name:
        raise HTTPException(status_code=409, detail="Signed reception PDF is required")
    if item.status == "Delivered":
        return launch_dict(item)
    for line in item.material_lines:
        material = db.get(MaterialStock, line.get("code"))
        if material:
            quantity = float(line.get("qty") or line.get("required") or 0)
            from_warehouse = min(material.warehouse, quantity)
            material.warehouse -= from_warehouse
            material.wip = max(0, material.wip - (quantity - from_warehouse))
    item.status = "Delivered"
    db.commit()
    return launch_dict(item)

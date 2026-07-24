import json
from datetime import datetime, timedelta, timezone
from pathlib import Path
from uuid import uuid4

from fastapi import APIRouter, Depends, File, Form, Header, HTTPException, UploadFile
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Project, ProjectAssignment, ReferenceEntry, User
from app.models.admin import ProjectStatus, ReferenceListType
from app.models.operations import BomComponent, LaunchInstruction, MaterialStock, PurchaseOrder
from app.models.user import RecordStatus
from app.services.operations.constraints import (
    derive_material_lines,
    read_pdf_upload,
    validate_launch_lines,
)

router = APIRouter(prefix="/api", tags=["prototype operations"])
UPLOAD_DIR = Path("backend/uploads")
DEMO_ROLE_USERS = {"engineer": "engineer", "manager": "manager"}


def require_demo_role(
    x_demo_role: str = Header(default="engineer"),
) -> str:
    if x_demo_role not in {"engineer", "manager", "wh_lead", "admin"}:
        raise HTTPException(status_code=403, detail="Role not enabled for the integrated prototype")
    return x_demo_role


def assigned_project_names(role: str, db: Session) -> set[str]:
    username = DEMO_ROLE_USERS.get(role)
    if not username:
        return set()
    return {
        project.name
        for project in (
            db.query(Project)
            .join(ProjectAssignment, ProjectAssignment.project_id == Project.id)
            .join(User, User.id == ProjectAssignment.user_id)
            .filter(User.username == username)
            .all()
        )
    }


def require_assigned_project(role: str, project_name: str, db: Session) -> None:
    if role not in DEMO_ROLE_USERS:
        raise HTTPException(status_code=403, detail="Launch Engineer or Launch Manager role required")
    if project_name not in assigned_project_names(role, db):
        raise HTTPException(
            status_code=403,
            detail="This project is available in read-only portfolio mode and is not assigned to the current user",
        )


def demo_actor(role: str, db: Session) -> User:
    username = DEMO_ROLE_USERS.get(role)
    user = db.query(User).filter(User.username == username).first() if username else None
    if not user or user.status != RecordStatus.ACTIVE or user.locked_at:
        raise HTTPException(status_code=403, detail="No active demo account is configured for this role")
    return user


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
def bootstrap(role: str = Depends(require_demo_role), db: Session = Depends(get_db)):
    project_query = db.query(Project)
    po_query = db.query(PurchaseOrder)
    launch_query = db.query(LaunchInstruction)
    if role == "engineer":
        project_names = assigned_project_names(role, db)
        project_query = project_query.filter(Project.name.in_(project_names))
        po_query = po_query.filter(PurchaseOrder.project_name.in_(project_names))
        launch_query = launch_query.filter(LaunchInstruction.project_name.in_(project_names))
    bom_components = []
    for fgpn, in db.query(BomComponent.fgpn).distinct().all():
        latest_version = db.query(BomComponent.version).filter(
            BomComponent.fgpn == fgpn
        ).order_by(BomComponent.version.desc()).first()
        if latest_version:
            bom_components.extend([
                {
                    "fgpn": row.fgpn,
                    "material_code": row.material_code,
                    "usage_qty": row.usage_qty,
                    "version": row.version,
                }
                for row in db.query(BomComponent).filter_by(
                    fgpn=fgpn,
                    version=latest_version[0],
                ).all()
            ])
    return {
        "editable_projects": sorted(assigned_project_names(role, db)),
        "projects": [{"id": str(row.id), "name": row.name, "status": row.status.value} for row in project_query.all()],
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
            for row in po_query.all()
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
        "bom_components": bom_components,
        "receivers": [
            row.label
            for row in db.query(ReferenceEntry).filter(
                ReferenceEntry.list_type == ReferenceListType.MFG_RECEIVER,
                ReferenceEntry.status == ProjectStatus.ACTIVE,
            ).order_by(ReferenceEntry.label).all()
        ],
        "launches": [launch_dict(row) for row in launch_query.order_by(LaunchInstruction.created_at.desc()).all()],
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
    launch_lines: str = Form(...),
    material_lines: str = Form(...),
    meeting_minutes: UploadFile = File(...),
    role: str = Depends(require_demo_role),
    db: Session = Depends(get_db),
):
    if role not in {"engineer", "manager"}:
        raise HTTPException(status_code=403, detail="Launch Engineer or Launch Manager role required")
    meeting_content = await read_pdf_upload(meeting_minutes, "Meeting minutes")
    purchase_order = db.get(PurchaseOrder, po)
    if not purchase_order:
        raise HTTPException(status_code=404, detail="Purchase order not found")
    if purchase_order.project_name != project:
        raise HTTPException(status_code=409, detail="Purchase order does not belong to the selected project")
    if purchase_order.status not in {"Unplanned", "In Progress"}:
        raise HTTPException(status_code=409, detail="Only Unplanned or In Progress purchase orders can be launched")
    project_record = db.query(Project).filter(Project.name == project).first()
    if not project_record or project_record.status != ProjectStatus.ACTIVE:
        raise HTTPException(status_code=409, detail="Launches require an active project")
    require_assigned_project(role, project, db)
    actor = demo_actor(role, db)
    try:
        parsed_launch_lines = json.loads(launch_lines)
        parsed_material_lines = json.loads(material_lines)
    except json.JSONDecodeError as error:
        raise HTTPException(status_code=422, detail="Launch and material lines must be valid JSON") from error
    parsed_launch_lines = validate_launch_lines(db, purchase_order, parsed_launch_lines)
    parsed_material_lines = derive_material_lines(db, parsed_launch_lines, parsed_material_lines)
    now = datetime.now(timezone.utc)
    launch_id = f"MD-{now.strftime('%y%m%d')}-{uuid4().hex[:4].upper()}"
    code = f"DEL-{now.strftime('%Y%m%d')}-{uuid4().hex[:6].upper()}"
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    stored_name = f"{launch_id}-meeting.pdf"
    (UPLOAD_DIR / stored_name).write_bytes(meeting_content)
    item = LaunchInstruction(
        id=launch_id,
        code=code,
        project_name=project,
        po_id=po,
        status="Code Generated",
        created_by=actor.full_name,
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
    if item.status != "Code Generated":
        raise HTTPException(status_code=409, detail=f"Delivery code cannot be used while launch status is {item.status}")
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
    if item.status != "Code Used":
        raise HTTPException(status_code=409, detail="Receiver can only be selected immediately after code validation")
    if not payload.receiver.strip():
        raise HTTPException(status_code=422, detail="Manufacturing receiver is required")
    receiver = db.query(ReferenceEntry).filter(
        ReferenceEntry.list_type == ReferenceListType.MFG_RECEIVER,
        ReferenceEntry.label == payload.receiver.strip(),
        ReferenceEntry.status == ProjectStatus.ACTIVE,
    ).first()
    if not receiver:
        raise HTTPException(status_code=422, detail="Select an active manufacturing receiver")
    item.receiver = receiver.label
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
    if item.status != "Code Used":
        raise HTTPException(status_code=409, detail="The transfer document can only be generated after code validation")
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
    if item.status == "Delivered":
        raise HTTPException(status_code=409, detail="Reception already validated")
    if not item.warehouse_document_name or item.status != "Waiting for Signed PDF":
        raise HTTPException(status_code=409, detail="Generate the warehouse transfer document first")
    signed_content = await read_pdf_upload(signed_pdf, "Signed reception")
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    (UPLOAD_DIR / f"{launch_id}-signed.pdf").write_bytes(signed_content)
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
    if role not in {"engineer", "manager"}:
        raise HTTPException(status_code=403, detail="Launch Engineer or Launch Manager role required")
    item = db.get(LaunchInstruction, launch_id)
    if not item or not item.signed_document_name:
        raise HTTPException(status_code=409, detail="Signed reception PDF is required")
    require_assigned_project(role, item.project_name, db)
    if item.status == "Delivered":
        return launch_dict(item)
    if item.status != "Signed Document Uploaded":
        raise HTTPException(status_code=409, detail="Signed reception must be uploaded before validation")
    shortages = []
    for line in item.material_lines:
        material = db.get(MaterialStock, line.get("code"))
        quantity = float(line.get("qty") or line.get("required") or 0)
        available = float((material.warehouse + material.wip) if material else 0)
        if not material or quantity > available:
            shortages.append({"code": line.get("code"), "required": quantity, "available": available})
    if shortages:
        raise HTTPException(status_code=409, detail={"message": "Stock changed after launch creation", "shortages": shortages})
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

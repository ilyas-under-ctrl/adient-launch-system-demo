from datetime import datetime

from fastapi import HTTPException, UploadFile
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.operations import BomComponent, LaunchInstruction, MaterialStock, PurchaseOrder

MAX_PDF_BYTES = 10 * 1024 * 1024
OPEN_RESERVATION_STATUSES = {
    "Code Generated",
    "Code Used",
    "Document Generated",
    "Waiting for Signed PDF",
    "Signed Document Uploaded",
}


async def read_pdf_upload(upload: UploadFile, label: str) -> bytes:
    if not upload.filename or not upload.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=422, detail=f"{label} must be a PDF")
    if upload.content_type not in {"application/pdf", "application/x-pdf"}:
        raise HTTPException(status_code=422, detail=f"{label} must use the application/pdf content type")
    content = await upload.read(MAX_PDF_BYTES + 1)
    if not content:
        raise HTTPException(status_code=422, detail=f"{label} cannot be empty")
    if len(content) > MAX_PDF_BYTES:
        raise HTTPException(status_code=413, detail=f"{label} cannot exceed 10 MB")
    if not content.startswith(b"%PDF-"):
        raise HTTPException(status_code=422, detail=f"{label} does not contain a valid PDF header")
    return content


def validate_launch_lines(
    db: Session,
    purchase_order: PurchaseOrder,
    lines: list,
) -> list[dict]:
    if not isinstance(lines, list) or not lines:
        raise HTTPException(status_code=422, detail="At least one launch line is required")

    po_lines = {
        str(line.get("fgpn")): line
        for line in (purchase_order.fgpn_lines or [])
        if line.get("fgpn")
    }
    existing_totals: dict[str, float] = {}
    launches = db.query(LaunchInstruction).filter(LaunchInstruction.po_id == purchase_order.id)
    for launch in launches:
        if launch.status in {"Cancelled", "Expired"}:
            continue
        for line in launch.launch_lines or []:
            fgpn = str(line.get("fgpn", ""))
            existing_totals[fgpn] = existing_totals.get(fgpn, 0) + float(line.get("qty") or 0)

    normalized = []
    seen = set()
    for line in lines:
        if not isinstance(line, dict):
            raise HTTPException(status_code=422, detail="Every launch line must be an object")
        fgpn = str(line.get("fgpn", "")).strip()
        if not fgpn or fgpn not in po_lines:
            raise HTTPException(
                status_code=422,
                detail=f"{fgpn or 'Unknown FGPN'} does not belong to purchase order {purchase_order.id}",
            )
        if fgpn in seen:
            raise HTTPException(status_code=422, detail=f"Duplicate launch line for {fgpn}")
        seen.add(fgpn)
        try:
            quantity = float(line.get("qty"))
        except (TypeError, ValueError) as error:
            raise HTTPException(status_code=422, detail=f"Launch quantity for {fgpn} must be numeric") from error
        if quantity <= 0:
            raise HTTPException(status_code=422, detail=f"Launch quantity for {fgpn} must be greater than zero")

        ordered = float(po_lines[fgpn].get("ordered") or 0)
        remaining = max(0, ordered - existing_totals.get(fgpn, 0))
        if quantity > remaining:
            raise HTTPException(
                status_code=409,
                detail=f"Launch quantity for {fgpn} exceeds the remaining PO quantity ({remaining:g})",
            )
        normalized.append({**line, "fgpn": fgpn, "qty": quantity, "ordered": ordered})
    return normalized


def _reserved_materials(db: Session) -> dict[str, float]:
    totals: dict[str, float] = {}
    launches = db.query(LaunchInstruction).filter(
        LaunchInstruction.status.in_(OPEN_RESERVATION_STATUSES)
    )
    for launch in launches:
        for line in launch.material_lines or []:
            code = str(line.get("code", ""))
            totals[code] = totals.get(code, 0) + float(line.get("qty") or line.get("required") or 0)
    return totals


def derive_material_lines(
    db: Session,
    launch_lines: list[dict],
    submitted_lines: list,
) -> list[dict]:
    if not isinstance(submitted_lines, list):
        raise HTTPException(status_code=422, detail="Material metadata must be a JSON list")
    submitted_by_code = {
        str(line.get("code")): line
        for line in submitted_lines
        if isinstance(line, dict) and line.get("code")
    }

    requirements: dict[str, dict] = {}
    missing_boms = []
    for launch_line in launch_lines:
        fgpn = launch_line["fgpn"]
        latest_version = (
            db.query(func.max(BomComponent.version))
            .filter(BomComponent.fgpn == fgpn)
            .scalar()
        )
        if latest_version is None:
            missing_boms.append(fgpn)
            continue
        components = db.query(BomComponent).filter_by(
            fgpn=fgpn,
            version=latest_version,
        )
        for component in components:
            material = db.get(MaterialStock, component.material_code)
            if not material:
                raise HTTPException(
                    status_code=409,
                    detail=f"Latest BOM for {fgpn} references unknown material {component.material_code}",
                )
            required = float(component.usage_qty) * float(launch_line["qty"])
            row = requirements.setdefault(component.material_code, {
                "code": material.code,
                "desc": material.description,
                "type": material.material_type,
                "supplier": material.supplier,
                "unit": material.unit,
                "qty": 0.0,
                "required": 0.0,
                "fgpns": [],
                "fgpnRequirements": {},
                "bomVersions": {},
            })
            row["qty"] += required
            row["required"] += required
            row["fgpnRequirements"][fgpn] = row["fgpnRequirements"].get(fgpn, 0) + required
            row["bomVersions"][fgpn] = latest_version
            if fgpn not in row["fgpns"]:
                row["fgpns"].append(fgpn)

    if missing_boms:
        raise HTTPException(
            status_code=409,
            detail={
                "message": "A current BOM is required before launch",
                "finished_good_part_numbers": missing_boms,
            },
        )

    reserved = _reserved_materials(db)
    shortages = []
    missing_times = []
    normalized = []
    for code, row in requirements.items():
        material = db.get(MaterialStock, code)
        available = max(0, float(material.warehouse + material.wip) - reserved.get(code, 0))
        required = float(row["required"])
        if required > available:
            shortages.append({"code": code, "required": required, "available": available})
        metadata = submitted_by_code.get(code, {})
        row["available_at_creation"] = available
        required_time = str(metadata.get("requiredTime", "")).strip()
        if not required_time:
            missing_times.append(code)
        else:
            try:
                datetime.fromisoformat(required_time)
            except ValueError as error:
                raise HTTPException(
                    status_code=422,
                    detail=f"Required delivery time for {code} must use ISO date-time format",
                ) from error
        row["requiredTime"] = required_time
        normalized.append(row)

    if not normalized:
        raise HTTPException(status_code=409, detail="The latest BOM contains no launch materials")
    if missing_times:
        raise HTTPException(
            status_code=422,
            detail={
                "message": "Every material requires a delivery time",
                "materials": missing_times,
            },
        )
    if shortages:
        raise HTTPException(
            status_code=409,
            detail={
                "message": "Material stock is insufficient after open reservations",
                "shortages": shortages,
            },
        )
    return normalized

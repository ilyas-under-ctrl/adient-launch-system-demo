from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.admin import Project, ProjectStatus, ReferenceEntry, ReferenceListType
from app.models.operations import LaunchInstruction, MaterialStock, PurchaseOrder
from app.schemas.admin import ReferenceEntryCreate, ReferenceEntryUpdate


def validate_reference(db: Session, list_type: ReferenceListType, label: str, project_id, except_id=None):
    label = label.strip()
    if not label:
        raise HTTPException(status_code=422, detail="Reference label is required")
    if list_type == ReferenceListType.FGPN and not project_id:
        raise HTTPException(status_code=422, detail="FGPN entries require a project")
    if project_id and not db.get(Project, project_id): raise HTTPException(status_code=404, detail="Project not found")
    query = db.query(ReferenceEntry).filter(
        ReferenceEntry.list_type == list_type,
        ReferenceEntry.label.ilike(label),
    )
    query = query.filter(ReferenceEntry.project_id == project_id) if list_type == ReferenceListType.FGPN else query
    if except_id: query = query.filter(ReferenceEntry.id != except_id)
    if query.first(): raise HTTPException(status_code=409, detail="An entry with this label already exists")


def linked_records_count(db: Session, entry: ReferenceEntry) -> int:
    if entry.list_type == ReferenceListType.JIT_CUSTOMER:
        return db.query(PurchaseOrder).filter(PurchaseOrder.customer.ilike(entry.label)).count()
    if entry.list_type == ReferenceListType.MFG_RECEIVER:
        return db.query(LaunchInstruction).filter(LaunchInstruction.receiver.ilike(entry.label)).count()
    if entry.list_type == ReferenceListType.MATERIAL_TYPE:
        return db.query(MaterialStock).filter(MaterialStock.material_type.ilike(entry.label)).count()
    if entry.list_type == ReferenceListType.FGPN:
        project_name = db.get(Project, entry.project_id).name if entry.project_id else None
        orders = db.query(PurchaseOrder)
        if project_name:
            orders = orders.filter(PurchaseOrder.project_name == project_name)
        return sum(
            1
            for order in orders.all()
            for line in (order.fgpn_lines or [])
            if str(line.get("fgpn", "")).casefold() == entry.label.casefold()
        )
    return 0


def get_reference_or_404(db: Session, list_type: ReferenceListType, entry_id) -> ReferenceEntry:
    entry = db.get(ReferenceEntry, entry_id)
    if not entry or entry.list_type != list_type:
        raise HTTPException(status_code=404, detail="Reference entry not found")
    return entry


def list_references(db: Session, list_type: ReferenceListType) -> list[dict]:
    rows = (
        db.query(ReferenceEntry, Project.name)
        .outerjoin(Project, Project.id == ReferenceEntry.project_id)
        .filter(ReferenceEntry.list_type == list_type)
        .order_by(ReferenceEntry.label)
        .all()
    )
    return [
        {
            "id": entry.id,
            "list_type": entry.list_type,
            "label": entry.label,
            "project_id": entry.project_id,
            "project_name": project_name,
            "status": entry.status,
            "linked_records_count": linked_records_count(db, entry),
        }
        for entry, project_name in rows
    ]


def create_reference(db: Session, list_type: ReferenceListType, payload: ReferenceEntryCreate) -> ReferenceEntry:
    validate_reference(db, list_type, payload.label, payload.project_id)
    values = payload.model_dump()
    values["label"] = values["label"].strip()
    entry = ReferenceEntry(list_type=list_type, **values)
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


def update_reference(db: Session, entry: ReferenceEntry, payload: ReferenceEntryUpdate) -> ReferenceEntry:
    validate_reference(db, entry.list_type, payload.label, payload.project_id, entry.id)
    entry.label = payload.label.strip()
    entry.project_id = payload.project_id
    db.commit()
    db.refresh(entry)
    return entry


def toggle_reference_status(db: Session, entry: ReferenceEntry) -> ReferenceEntry:
    entry.status = ProjectStatus.INACTIVE if entry.status == ProjectStatus.ACTIVE else ProjectStatus.ACTIVE
    db.commit()
    db.refresh(entry)
    return entry


def delete_reference(db: Session, entry: ReferenceEntry) -> None:
    if linked_records_count(db, entry):
        raise HTTPException(status_code=409, detail="This entry is linked to other records; deactivate it instead")
    db.delete(entry)
    db.commit()

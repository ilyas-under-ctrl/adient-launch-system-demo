from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.admin import Project, ProjectStatus, ReferenceEntry, ReferenceListType
from app.schemas.admin import ReferenceEntryCreate, ReferenceEntryUpdate


def validate_reference(db: Session, list_type: ReferenceListType, label: str, project_id, except_id=None):
    if list_type == ReferenceListType.FGPN and not project_id:
        raise HTTPException(status_code=422, detail="FGPN entries require a project")
    if project_id and not db.get(Project, project_id): raise HTTPException(status_code=404, detail="Project not found")
    query = db.query(ReferenceEntry).filter(ReferenceEntry.list_type == list_type, ReferenceEntry.label == label)
    query = query.filter(ReferenceEntry.project_id == project_id) if list_type == ReferenceListType.FGPN else query
    if except_id: query = query.filter(ReferenceEntry.id != except_id)
    if query.first(): raise HTTPException(status_code=409, detail="An entry with this label already exists")


def linked_records_count(_: ReferenceEntry) -> int:
    """Extension point for downstream modules to report foreign-key usage."""
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
            "linked_records_count": linked_records_count(entry),
        }
        for entry, project_name in rows
    ]


def create_reference(db: Session, list_type: ReferenceListType, payload: ReferenceEntryCreate) -> ReferenceEntry:
    validate_reference(db, list_type, payload.label, payload.project_id)
    entry = ReferenceEntry(list_type=list_type, **payload.model_dump())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


def update_reference(db: Session, entry: ReferenceEntry, payload: ReferenceEntryUpdate) -> ReferenceEntry:
    validate_reference(db, entry.list_type, payload.label, payload.project_id, entry.id)
    entry.label = payload.label
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
    if linked_records_count(entry):
        raise HTTPException(status_code=409, detail="This entry is linked to other records; deactivate it instead")
    db.delete(entry)
    db.commit()

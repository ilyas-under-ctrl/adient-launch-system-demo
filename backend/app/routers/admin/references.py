import uuid

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.admin import ReferenceListType
from app.schemas.admin import ReferenceEntryCreate, ReferenceEntryUpdate
from app.services.admin.references import create_reference, delete_reference, get_reference_or_404, list_references, toggle_reference_status, update_reference

router = APIRouter()


@router.get("/reference-data/{list_type}")
def list_reference_entries(list_type: ReferenceListType, db: Session = Depends(get_db)):
    return list_references(db, list_type)


@router.post("/reference-data/{list_type}", status_code=201)
def create_reference_entry(list_type: ReferenceListType, payload: ReferenceEntryCreate, db: Session = Depends(get_db)):
    return create_reference(db, list_type, payload)


@router.patch("/reference-data/{list_type}/{entry_id}")
def update_reference_entry(list_type: ReferenceListType, entry_id: uuid.UUID, payload: ReferenceEntryUpdate, db: Session = Depends(get_db)):
    return update_reference(db, get_reference_or_404(db, list_type, entry_id), payload)


@router.patch("/reference-data/{list_type}/{entry_id}/toggle-status")
def toggle_reference_entry(list_type: ReferenceListType, entry_id: uuid.UUID, db: Session = Depends(get_db)):
    return toggle_reference_status(db, get_reference_or_404(db, list_type, entry_id))


@router.delete("/reference-data/{list_type}/{entry_id}", status_code=204)
def remove_reference_entry(list_type: ReferenceListType, entry_id: uuid.UUID, db: Session = Depends(get_db)):
    delete_reference(db, get_reference_or_404(db, list_type, entry_id))

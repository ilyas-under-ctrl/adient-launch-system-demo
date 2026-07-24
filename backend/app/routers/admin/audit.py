from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.admin import LoginResult
from app.schemas.admin import LoginEventOut
from app.services.admin.login_audit import list_login_events

router = APIRouter()


@router.get("/login-events", response_model=list[LoginEventOut])
def login_events(search: str | None = None, result: LoginResult | None = None, db: Session = Depends(get_db)):
    return list_login_events(db, search=search, result=result)

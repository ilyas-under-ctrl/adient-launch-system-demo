import uuid
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.security import require_system_admin
from app.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserOut
from app.services.admin.users import create_user, get_user_or_404

router = APIRouter(prefix="/users", tags=["users"], dependencies=[Depends(require_system_admin)])

@router.get("", response_model=list[UserOut])
def list_users(db: Session = Depends(get_db)):
    return db.query(User).order_by(User.full_name).all()

@router.post("", response_model=UserOut, status_code=201)
def create(payload: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, payload)

@router.get("/{user_id}", response_model=UserOut)
def get_user(user_id: uuid.UUID, db: Session = Depends(get_db)):
    return get_user_or_404(db, user_id)

import uuid

from fastapi import APIRouter, Depends
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.admin import Project, ProjectAssignment
from app.models.user import RecordStatus, RoleCode, User
from app.schemas.user import PasswordReset, UserCreate, UserOut, UserUpdate
from app.services.admin.users import create_user, get_user_or_404, reset_password, set_active, unlock, update_user

router = APIRouter()


@router.get("/users", response_model=list[UserOut])
def list_users(
    search: str | None = None,
    role: RoleCode | None = None,
    status: RecordStatus | None = None,
    locked: bool | None = None,
    db: Session = Depends(get_db),
):
    query = db.query(User)
    if search:
        pattern = f"%{search}%"
        query = query.filter(or_(User.full_name.ilike(pattern), User.username.ilike(pattern), User.email.ilike(pattern)))
    if role:
        query = query.filter(User.role == role)
    if status:
        query = query.filter(User.status == status)
    if locked is not None:
        query = query.filter(User.locked_at.isnot(None) if locked else User.locked_at.is_(None))
    return query.order_by(User.full_name).all()


@router.post("/users", response_model=UserOut, status_code=201)
def create_admin_user(payload: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, payload)


@router.get("/users/{user_id}")
def get_user_detail(user_id: uuid.UUID, db: Session = Depends(get_db)):
    user = get_user_or_404(db, user_id)
    assignments = (
        db.query(ProjectAssignment, Project)
        .join(Project, Project.id == ProjectAssignment.project_id)
        .filter(ProjectAssignment.user_id == user.id)
        .all()
    )
    return {
        "user": UserOut.model_validate(user),
        "assignments": [
            {"id": assignment.id, "project_id": project.id, "project_name": project.name, "assignment_role": assignment.assignment_role}
            for assignment, project in assignments
        ],
    }


@router.patch("/users/{user_id}", response_model=UserOut)
def update_admin_user(user_id: uuid.UUID, payload: UserUpdate, db: Session = Depends(get_db)):
    return update_user(db, get_user_or_404(db, user_id), payload)


@router.patch("/users/{user_id}/deactivate", response_model=UserOut)
def deactivate_user(user_id: uuid.UUID, db: Session = Depends(get_db)):
    return set_active(db, get_user_or_404(db, user_id), active=False)


@router.patch("/users/{user_id}/reactivate", response_model=UserOut)
def reactivate_user(user_id: uuid.UUID, db: Session = Depends(get_db)):
    return set_active(db, get_user_or_404(db, user_id), active=True)


@router.patch("/users/{user_id}/unlock", response_model=UserOut)
def unlock_user(user_id: uuid.UUID, db: Session = Depends(get_db)):
    return unlock(db, get_user_or_404(db, user_id))


@router.post("/users/{user_id}/reset-password", response_model=UserOut)
def reset_user_password(user_id: uuid.UUID, payload: PasswordReset, db: Session = Depends(get_db)):
    return reset_password(db, get_user_or_404(db, user_id), payload.password)

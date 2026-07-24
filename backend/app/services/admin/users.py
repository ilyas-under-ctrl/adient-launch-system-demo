from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.security import hash_password
from app.models import ProjectAssignment
from app.models.admin import AssignmentRole
from app.models.user import RecordStatus, RoleCode, User
from app.schemas.user import UserCreate, UserUpdate


def get_user_or_404(db: Session, user_id):
    user = db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def create_user(db: Session, payload: UserCreate) -> User:
    username = payload.username.strip().lower()
    if db.query(User).filter(User.username == username).first():
        raise HTTPException(status_code=409, detail="Username already taken")
    if payload.email and db.query(User).filter(User.email == payload.email.strip().lower()).first():
        raise HTTPException(status_code=409, detail="Email address already in use")
    values = payload.model_dump(exclude={"password"})
    values["full_name"] = values["full_name"].strip()
    values["username"] = username
    if values.get("email"):
        values["email"] = values["email"].strip().lower()
    user = User(**values, password_hash=hash_password(payload.password), status=RecordStatus.ACTIVE)
    db.add(user); db.commit(); db.refresh(user)
    return user


def update_user(db: Session, user: User, payload: UserUpdate) -> User:
    values = payload.model_dump(exclude_unset=True)
    if (
        user.username == settings.bootstrap_admin_username
        and values.get("role")
        and values["role"] != RoleCode.SYSTEM_ADMIN
    ):
        raise HTTPException(status_code=409, detail="The bootstrap administrator must keep the System Administrator role")
    if "username" in values:
        username = values["username"].strip().lower()
        if db.query(User).filter(User.username == username, User.id != user.id).first():
            raise HTTPException(status_code=409, detail="Username already taken")
        values["username"] = username
    if values.get("email"):
        email = values["email"].strip().lower()
        if db.query(User).filter(User.email == email, User.id != user.id).first():
            raise HTTPException(status_code=409, detail="Email address already in use")
        values["email"] = email
    if values.get("full_name"):
        values["full_name"] = values["full_name"].strip()
    if "role" in values and values["role"] != user.role:
        assignments = db.query(ProjectAssignment).filter(ProjectAssignment.user_id == user.id).all()
        if values["role"] not in (RoleCode.LAUNCH_ENGINEER, RoleCode.LAUNCH_MANAGER) and assignments:
            raise HTTPException(status_code=409, detail="Remove project assignments before changing this user to a non-launch role")
        if values["role"] == RoleCode.LAUNCH_ENGINEER:
            for assignment in assignments:
                assignment.assignment_role = AssignmentRole.RESPONSIBLE_ENGINEER
        elif values["role"] == RoleCode.LAUNCH_MANAGER:
            for assignment in assignments:
                assignment.assignment_role = AssignmentRole.RESPONSIBLE_MANAGER
    for key, value in values.items():
        setattr(user, key, value)
    db.commit(); db.refresh(user)
    return user


def ensure_not_bootstrap(user: User):
    if user.username == settings.bootstrap_admin_username:
        raise HTTPException(status_code=409, detail="The bootstrap administrator cannot be deactivated")


def set_active(db: Session, user: User, active: bool) -> User:
    if not active:
        ensure_not_bootstrap(user)
        if db.query(ProjectAssignment).filter(ProjectAssignment.user_id == user.id).first():
            raise HTTPException(status_code=409, detail="Remove project assignments before deactivating this user")
    user.status = RecordStatus.ACTIVE if active else RecordStatus.INACTIVE
    db.commit(); db.refresh(user)
    return user


def unlock(db: Session, user: User) -> User:
    user.locked_at = None; user.failed_login_count = 0
    db.commit(); db.refresh(user)
    return user


def reset_password(db: Session, user: User, password: str) -> User:
    user.password_hash = hash_password(password); user.password_reset_required = True
    user.locked_at = None; user.failed_login_count = 0
    db.commit(); db.refresh(user)
    return user

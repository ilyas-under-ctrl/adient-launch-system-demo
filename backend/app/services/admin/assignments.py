from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.models.admin import Project, ProjectAssignment, ProjectStatus
from app.models.user import RecordStatus, RoleCode, User


def create_assignment(db: Session, user_id, project_id, assignment_role):
    user = db.get(User, user_id); project = db.get(Project, project_id)
    if not user or not project: raise HTTPException(status_code=404, detail="User or project not found")
    if project.status != ProjectStatus.ACTIVE:
        raise HTTPException(status_code=422, detail="Assignments require an active project")
    if user.role not in (RoleCode.LAUNCH_ENGINEER, RoleCode.LAUNCH_MANAGER):
        raise HTTPException(status_code=422, detail="Only launch engineers and launch managers may be assigned")
    if user.status != RecordStatus.ACTIVE or user.locked_at:
        raise HTTPException(status_code=422, detail="Assigned user must be active and unlocked")
    expected_role = (
        "responsible_engineer"
        if user.role == RoleCode.LAUNCH_ENGINEER
        else "responsible_manager"
    )
    if assignment_role.value != expected_role:
        raise HTTPException(status_code=422, detail=f"Assignment role must be {expected_role} for this user")
    if db.query(ProjectAssignment).filter_by(user_id=user_id, project_id=project_id).first():
        raise HTTPException(status_code=409, detail="User is already assigned to this project")
    item = ProjectAssignment(user_id=user_id, project_id=project_id, assignment_role=assignment_role)
    db.add(item); db.commit(); db.refresh(item); return item

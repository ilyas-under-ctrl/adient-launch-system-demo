import uuid

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.admin import Project, ProjectAssignment
from app.models.user import RoleCode, User
from app.schemas.admin import AssignmentCreate, ProjectOut
from app.services.admin.assignments import create_assignment

router = APIRouter()

ROLE_DEFINITIONS = {
    role.value: {
        "name": role.value.replace("_", " ").title(),
        "permissions": ["Role-specific access is added with its business module."],
    }
    for role in RoleCode
}


@router.get("/roles")
def list_roles(db: Session = Depends(get_db)):
    counts = dict(db.query(User.role, func.count(User.id)).group_by(User.role).all())
    return [{"code": code, **definition, "user_count": counts.get(RoleCode(code), 0)} for code, definition in ROLE_DEFINITIONS.items()]


@router.get("/projects", response_model=list[ProjectOut])
def list_projects(db: Session = Depends(get_db)):
    return db.query(Project).order_by(Project.name).all()


@router.get("/project-assignments")
def list_assignments(db: Session = Depends(get_db)):
    rows = (
        db.query(ProjectAssignment, Project, User)
        .join(Project, Project.id == ProjectAssignment.project_id)
        .join(User, User.id == ProjectAssignment.user_id)
        .order_by(Project.name, User.full_name)
        .all()
    )
    return [
        {"id": assignment.id, "project_id": project.id, "project_name": project.name, "user_id": user.id, "user_name": user.full_name, "username": user.username, "assignment_role": assignment.assignment_role}
        for assignment, project, user in rows
    ]


@router.post("/project-assignments", status_code=201)
def assign_project(payload: AssignmentCreate, db: Session = Depends(get_db)):
    return create_assignment(db, **payload.model_dump())


@router.delete("/project-assignments/{assignment_id}", status_code=204)
def unassign_project(assignment_id: uuid.UUID, db: Session = Depends(get_db)):
    assignment = db.get(ProjectAssignment, assignment_id)
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    db.delete(assignment)
    db.commit()

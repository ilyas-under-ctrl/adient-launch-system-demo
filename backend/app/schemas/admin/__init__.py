"""Pydantic contracts for M00 administration APIs."""
from app.schemas.admin.assignment import AssignmentCreate
from app.schemas.admin.login_event import LoginEventOut
from app.schemas.admin.project import ProjectOut
from app.schemas.admin.reference import ReferenceEntryCreate, ReferenceEntryUpdate

__all__ = ["AssignmentCreate", "LoginEventOut", "ProjectOut", "ReferenceEntryCreate", "ReferenceEntryUpdate"]

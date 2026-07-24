import uuid

from pydantic import BaseModel

from app.models.admin import AssignmentRole


class AssignmentCreate(BaseModel):
    user_id: uuid.UUID
    project_id: uuid.UUID
    assignment_role: AssignmentRole

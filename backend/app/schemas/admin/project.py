import uuid

from pydantic import BaseModel, ConfigDict

from app.models.admin import ProjectStatus


class ProjectOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    name: str
    status: ProjectStatus

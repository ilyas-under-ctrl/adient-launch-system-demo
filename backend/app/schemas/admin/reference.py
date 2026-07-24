import uuid

from pydantic import BaseModel, Field


class ReferenceEntryCreate(BaseModel):
    label: str = Field(min_length=1, max_length=200)
    project_id: uuid.UUID | None = None


class ReferenceEntryUpdate(ReferenceEntryCreate):
    pass

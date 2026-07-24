import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict

from app.models.admin import LoginResult


class LoginEventOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    occurred_at: datetime
    username: str
    user_id: uuid.UUID | None
    result: LoginResult
    reason: str | None
    source_ip: str | None

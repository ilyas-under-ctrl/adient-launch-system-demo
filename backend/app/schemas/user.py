import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field

from app.models.user import RecordStatus, RoleCode


class UserCreate(BaseModel):
    full_name: str = Field(min_length=1, max_length=150)
    username: str = Field(min_length=1, max_length=80)
    password: str = Field(min_length=8, max_length=72)
    role: RoleCode
    email: str | None = Field(default=None, max_length=255)
    phone: str | None = Field(default=None, max_length=40)
    location: str | None = Field(default=None, max_length=150)


class UserUpdate(BaseModel):
    full_name: str | None = Field(default=None, min_length=1, max_length=150)
    role: RoleCode | None = None
    email: str | None = Field(default=None, max_length=255)
    phone: str | None = Field(default=None, max_length=40)
    location: str | None = Field(default=None, max_length=150)


class PasswordReset(BaseModel):
    password: str = Field(min_length=8, max_length=72)


class UserOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    full_name: str
    username: str
    role: RoleCode
    status: RecordStatus
    email: str | None = None
    phone: str | None = None
    location: str | None = None
    locked_at: datetime | None = None
    last_login_at: datetime | None = None
    password_reset_required: bool = False
    failed_login_count: int = 0


class LoginRequest(BaseModel):
    username: str
    password: str

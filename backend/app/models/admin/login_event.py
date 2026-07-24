import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum, ForeignKey, String, func
from sqlalchemy.orm import Mapped, mapped_column

from app.models.admin.enums import LoginResult, enum_values
from app.models.base import Base, UUIDPrimaryKeyMixin


class LoginEvent(UUIDPrimaryKeyMixin, Base):
    __tablename__ = "login_events"

    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now())
    username: Mapped[str] = mapped_column(String(80), nullable=False)
    user_id: Mapped[uuid.UUID | None] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    result: Mapped[LoginResult] = mapped_column(Enum(LoginResult, name="login_result", values_callable=enum_values), nullable=False)
    reason: Mapped[str | None] = mapped_column(String(255), nullable=True)
    source_ip: Mapped[str | None] = mapped_column(String(45), nullable=True)

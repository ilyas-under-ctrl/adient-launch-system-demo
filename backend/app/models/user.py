import enum

from datetime import datetime

from sqlalchemy import Boolean, DateTime, Enum, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class RoleCode(str, enum.Enum):
    PLANT_MANAGER = "PLANT_MANAGER"
    LAUNCH_MANAGER = "LAUNCH_MANAGER"
    LAUNCH_ENGINEER = "LAUNCH_ENGINEER"
    WAREHOUSE_TEAM_LEADER = "WAREHOUSE_TEAM_LEADER"
    WAREHOUSE_PERSONNEL = "WAREHOUSE_PERSONNEL"
    PRODUCTION_PACKING_COORDINATOR = "PRODUCTION_PACKING_COORDINATOR"
    SYSTEM_ADMIN = "SYSTEM_ADMIN"


class RecordStatus(str, enum.Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


class User(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "users"

    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    username: Mapped[str] = mapped_column(String(80), nullable=False, unique=True)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[RoleCode] = mapped_column(Enum(RoleCode, name="role_code"), nullable=False)
    status: Mapped[RecordStatus] = mapped_column(
        Enum(RecordStatus, name="record_status"), nullable=False, default=RecordStatus.ACTIVE
    )
    failed_login_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    phone: Mapped[str | None] = mapped_column(String(40), nullable=True)
    location: Mapped[str | None] = mapped_column(String(150), nullable=True)
    locked_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    last_login_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    password_reset_required: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    updated_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True, onupdate=lambda: datetime.now().astimezone())

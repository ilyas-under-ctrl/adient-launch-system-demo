import uuid
from datetime import datetime

from sqlalchemy import DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    """Shared declarative base for every model in the project."""
    pass


class UUIDPrimaryKeyMixin:
    """Every table in the SRS schema uses a uuid primary key — reuse this."""
    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )


class TimestampMixin:
    """Reuse on tables that need created_at (and optionally updated_at)."""
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())

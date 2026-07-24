import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.admin.enums import ProjectStatus, ReferenceListType, enum_values
from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class ReferenceEntry(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "reference_entries"

    list_type: Mapped[ReferenceListType] = mapped_column(
        Enum(ReferenceListType, name="reference_list_type", values_callable=enum_values), nullable=False
    )
    label: Mapped[str] = mapped_column(String(200), nullable=False)
    project_id: Mapped[uuid.UUID | None] = mapped_column(ForeignKey("projects.id", ondelete="CASCADE"), nullable=True)
    status: Mapped[ProjectStatus] = mapped_column(
        Enum(ProjectStatus, name="reference_entry_status", values_callable=enum_values), nullable=False, default=ProjectStatus.ACTIVE
    )
    updated_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True, onupdate=lambda: datetime.now().astimezone())

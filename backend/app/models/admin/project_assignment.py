import uuid

from sqlalchemy import Enum, ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.models.admin.enums import AssignmentRole, enum_values
from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class ProjectAssignment(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "project_assignments"
    __table_args__ = (UniqueConstraint("user_id", "project_id", name="uq_project_assignment_user_project"),)

    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    project_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    assignment_role: Mapped[AssignmentRole] = mapped_column(
        Enum(AssignmentRole, name="assignment_role", values_callable=enum_values), nullable=False
    )

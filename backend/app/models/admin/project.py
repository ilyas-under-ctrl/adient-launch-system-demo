from sqlalchemy import Enum, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.admin.enums import ProjectStatus, enum_values
from app.models.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class Project(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "projects"

    name: Mapped[str] = mapped_column(String(150), unique=True, nullable=False)
    status: Mapped[ProjectStatus] = mapped_column(
        Enum(ProjectStatus, name="project_status", values_callable=enum_values), nullable=False, default=ProjectStatus.ACTIVE
    )

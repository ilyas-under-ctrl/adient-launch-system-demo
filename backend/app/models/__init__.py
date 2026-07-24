from app.models.base import Base
from app.models.user import User
from app.models.admin import LoginEvent, Project, ProjectAssignment, ReferenceEntry
from app.models.operations import BomComponent, LaunchInstruction, MaterialStock, PurchaseOrder

# As you add new domains, import each model module here so Alembic's
# autogenerate can see every table (Alembic only detects models that have
# been imported somewhere before it inspects Base.metadata).
#
# Example, once you add app/models/project.py:
# from app.models.project import Project

__all__ = [
    "Base", "User", "LoginEvent", "Project", "ProjectAssignment", "ReferenceEntry",
    "PurchaseOrder", "MaterialStock", "BomComponent", "LaunchInstruction",
]

from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.security import hash_password
from app.models.admin import Project, ProjectStatus, ReferenceEntry, ReferenceListType
from app.models.user import RecordStatus, RoleCode, User

def seed_m00(db: Session) -> None:
    if not db.query(User).filter_by(username=settings.bootstrap_admin_username).first():
        db.add(User(full_name="System Administrator", username=settings.bootstrap_admin_username, password_hash=hash_password(settings.bootstrap_admin_password), role=RoleCode.SYSTEM_ADMIN, status=RecordStatus.ACTIVE))
    for name in ("BMW X5", "Renault Clio V", "Peugeot 208"):
        if not db.query(Project).filter_by(name=name).first(): db.add(Project(name=name, status=ProjectStatus.ACTIVE))
    db.flush()
    for typ, label in ((ReferenceListType.JIT_CUSTOMER, "BMW"), (ReferenceListType.JIT_CUSTOMER, "Renault"), (ReferenceListType.DELIVERY_METHOD, "JIT"), (ReferenceListType.MATERIAL_TYPE, "Packaging")):
        if not db.query(ReferenceEntry).filter_by(list_type=typ, label=label).first(): db.add(ReferenceEntry(list_type=typ, label=label))
    db.commit()

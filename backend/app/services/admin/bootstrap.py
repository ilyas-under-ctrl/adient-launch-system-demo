from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.security import hash_password
from app.models.admin import Project, ProjectStatus, ReferenceEntry, ReferenceListType
from app.models.user import RecordStatus, RoleCode, User

def seed_m00(db: Session) -> None:
    if not db.query(User).filter_by(username=settings.bootstrap_admin_username).first():
        db.add(User(full_name="System Administrator", username=settings.bootstrap_admin_username, password_hash=hash_password(settings.bootstrap_admin_password), role=RoleCode.SYSTEM_ADMIN, status=RecordStatus.ACTIVE))
    for name in ("BMW X5", "Renault Clio V", "Peugeot 208", "Dacia Sandero"):
        if not db.query(Project).filter_by(name=name).first(): db.add(Project(name=name, status=ProjectStatus.ACTIVE))
    db.flush()
    references = (
        (ReferenceListType.JIT_CUSTOMER, "BMW Group"),
        (ReferenceListType.JIT_CUSTOMER, "Renault"),
        (ReferenceListType.JIT_CUSTOMER, "Stellantis"),
        (ReferenceListType.DELIVERY_METHOD, "Truck"),
        (ReferenceListType.DELIVERY_METHOD, "DHL"),
        (ReferenceListType.DELIVERY_METHOD, "Van"),
        (ReferenceListType.MFG_RECEIVER, "Cell 1 — Cutting Line"),
        (ReferenceListType.MFG_RECEIVER, "Cell 2 — Terminal Crimping"),
        (ReferenceListType.MFG_RECEIVER, "Cell 3 — Harness Assembly"),
        (ReferenceListType.MFG_RECEIVER, "Cell 4 — Final Assembly"),
        (ReferenceListType.MATERIAL_TYPE, "Connector"),
        (ReferenceListType.MATERIAL_TYPE, "Tube"),
        (ReferenceListType.MATERIAL_TYPE, "Terminal"),
        (ReferenceListType.MATERIAL_TYPE, "Wire"),
    )
    for typ, label in references:
        if not db.query(ReferenceEntry).filter_by(list_type=typ, label=label).first(): db.add(ReferenceEntry(list_type=typ, label=label))
    db.commit()

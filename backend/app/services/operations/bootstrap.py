from datetime import datetime, timedelta, timezone

from app.core.security import hash_password
from app.models import Project, ProjectAssignment, User
from app.models.admin import AssignmentRole, ProjectStatus
from app.models.operations import LaunchInstruction, MaterialStock, PurchaseOrder
from app.models.user import RecordStatus, RoleCode


def seed_operations(db) -> None:
    projects = {}
    for name in ("BMW X5", "Renault Clio V"):
        project = db.query(Project).filter_by(name=name).first()
        if not project:
            project = Project(name=name, status=ProjectStatus.ACTIVE)
            db.add(project)
            db.flush()
        projects[name] = project

    seed_users = (
        ("A. Rahal", "engineer", RoleCode.LAUNCH_ENGINEER),
        ("M. El Idrissi", "warehouse", RoleCode.WAREHOUSE_TEAM_LEADER),
    )
    users = {}
    for full_name, username, role in seed_users:
        user = db.query(User).filter_by(username=username).first()
        if not user:
            user = User(
                full_name=full_name,
                username=username,
                password_hash=hash_password("Demo1234!"),
                role=role,
                status=RecordStatus.ACTIVE,
            )
            db.add(user)
            db.flush()
        users[username] = user

    if not db.query(ProjectAssignment).filter_by(user_id=users["engineer"].id, project_id=projects["BMW X5"].id).first():
        db.add(ProjectAssignment(
            user_id=users["engineer"].id,
            project_id=projects["BMW X5"].id,
            assignment_role=AssignmentRole.RESPONSIBLE_ENGINEER,
        ))

    purchase_orders = (
        PurchaseOrder(
            id="PO-00045", project_name="BMW X5", customer="BMW Group", status="Unplanned",
            delivery_date="2026-08-15", stock_code="STK-BX5-045",
            fgpn_lines=[
                {"fgpn": "FG-BX5-100", "description": "Front wiring harness", "ordered": 1200, "launched": 800},
                {"fgpn": "FG-BX5-102", "description": "Dashboard harness", "ordered": 980, "launched": 0},
            ],
        ),
        PurchaseOrder(
            id="PO-00046", project_name="BMW X5", customer="BMW Group", status="In Progress",
            delivery_date="2026-08-22", stock_code="STK-BX5-046",
            fgpn_lines=[{"fgpn": "FG-BX5-103", "description": "Rear wiring harness", "ordered": 640, "launched": 220}],
        ),
        PurchaseOrder(
            id="PO-RCV-021", project_name="Renault Clio V", customer="Renault", status="Unplanned",
            delivery_date="2026-09-02", stock_code="STK-RCV-021",
            fgpn_lines=[{"fgpn": "FG-RCV-330", "description": "Cabin harness", "ordered": 760, "launched": 0}],
        ),
    )
    for item in purchase_orders:
        if not db.get(PurchaseOrder, item.id):
            db.add(item)

    materials = (
        ("MAT-4471", "Wiring harness clip", "Connector", "Amphenol", "PCS", 5200, 800, 120),
        ("MAT-3390", "Cable sleeve 8mm", "Tube", "Sumitomo", "M", 4800, 600, 0),
        ("MAT-5512", "Connector housing 4-pin", "Connector", "TE Connectivity", "PCS", 4600, 700, 200),
        ("MAT-1207", "Terminal pin, gold", "Terminal", "Yazaki", "PCS", 6200, 500, 0),
        ("MAT-2208", "Primary wire 0.5mm red", "Wire", "Leoni", "M", 7800, 900, 300),
    )
    for code, description, material_type, supplier, unit, warehouse, wip, transit in materials:
        if not db.get(MaterialStock, code):
            db.add(MaterialStock(
                code=code, description=description, material_type=material_type, supplier=supplier,
                unit=unit, warehouse=warehouse, wip=wip, transit=transit,
            ))

    if not db.get(LaunchInstruction, "MD-DEMO-001"):
        now = datetime.now(timezone.utc)
        db.add(LaunchInstruction(
            id="MD-DEMO-001",
            code="DEL-DEMO-001",
            project_name="BMW X5",
            po_id="PO-00045",
            status="Code Generated",
            created_by="A. Rahal",
            created_at=now,
            expires_at=now + timedelta(hours=48),
            meeting_minutes_name="BMW_X5_launch_meeting.pdf",
            launch_lines=[{"fgpn": "FG-BX5-102", "qty": 10, "ordered": 980, "status": "Unplanned"}],
            material_lines=[
                {"code": "MAT-4471", "desc": "Wiring harness clip", "qty": 10, "unit": "PCS"},
                {"code": "MAT-5512", "desc": "Connector housing 4-pin", "qty": 10, "unit": "PCS"},
            ],
        ))
    db.commit()

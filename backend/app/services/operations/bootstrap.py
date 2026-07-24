from datetime import datetime, timedelta, timezone

from app.core.security import hash_password
from app.models import Project, ProjectAssignment, User
from app.models.admin import AssignmentRole, ProjectStatus
from app.models.operations import BomComponent, LaunchInstruction, MaterialStock, PurchaseOrder
from app.models.user import RecordStatus, RoleCode


def seed_operations(db) -> None:
    projects = {}
    for name in ("BMW X5", "Renault Clio V", "Peugeot 208", "Dacia Sandero"):
        project = db.query(Project).filter_by(name=name).first()
        if not project:
            project = Project(name=name, status=ProjectStatus.ACTIVE)
            db.add(project)
            db.flush()
        projects[name] = project

    seed_users = (
        ("A. Rahal", "engineer", RoleCode.LAUNCH_ENGINEER),
        ("S. Ait Oubou", "manager", RoleCode.LAUNCH_MANAGER),
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
    if not db.query(ProjectAssignment).filter_by(user_id=users["manager"].id, project_id=projects["Peugeot 208"].id).first():
        db.add(ProjectAssignment(
            user_id=users["manager"].id,
            project_id=projects["Peugeot 208"].id,
            assignment_role=AssignmentRole.RESPONSIBLE_MANAGER,
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
            id="PO-2025-013", project_name="Renault Clio V", customer="Renault", status="Unplanned",
            delivery_date="2026-08-02", stock_code="STK-RCV-013",
            fgpn_lines=[{"fgpn": "FG-RCV-330", "description": "Cabin harness", "ordered": 760, "launched": 0}],
        ),
        PurchaseOrder(
            id="PO-2025-012", project_name="Peugeot 208", customer="Stellantis", status="Unplanned",
            delivery_date="2026-07-28", stock_code="STK-P208-012",
            fgpn_lines=[{"fgpn": "FG-P208-050", "description": "Cockpit harness", "ordered": 600, "launched": 0}],
        ),
        PurchaseOrder(
            id="PO-2025-011", project_name="Dacia Sandero", customer="Renault", status="In Progress",
            delivery_date="2026-07-20", stock_code="STK-DS-011",
            fgpn_lines=[
                {"fgpn": "FG-DS-210", "description": "Main body harness", "ordered": 2400, "launched": 2000},
                {"fgpn": "FG-DS-211", "description": "Rear lamp harness", "ordered": 1800, "launched": 0},
            ],
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
        ("MAT-6630", "PVC tape black 19mm", "Tape", "3M", "ROLL", 2100, 100, 0),
    )
    for code, description, material_type, supplier, unit, warehouse, wip, transit in materials:
        if not db.get(MaterialStock, code):
            db.add(MaterialStock(
                code=code, description=description, material_type=material_type, supplier=supplier,
                unit=unit, warehouse=warehouse, wip=wip, transit=transit,
            ))

    bom_components = (
        ("FG-BX5-100", "MAT-4471", 1, 3),
        ("FG-BX5-100", "MAT-3390", 1, 3),
        ("FG-BX5-100", "MAT-2208", 2, 3),
        ("FG-BX5-100", "MAT-1207", 1, 3),
        ("FG-BX5-102", "MAT-4471", 1, 2),
        ("FG-BX5-102", "MAT-5512", 1, 2),
        ("FG-BX5-103", "MAT-4471", 1, 1),
        ("FG-BX5-103", "MAT-1207", 1, 1),
        ("FG-RCV-330", "MAT-5512", 1, 1),
        ("FG-RCV-330", "MAT-6630", 1, 1),
        ("FG-P208-050", "MAT-4471", 1, 2),
        ("FG-P208-050", "MAT-2208", 2, 2),
        ("FG-DS-210", "MAT-1207", 1, 2),
        ("FG-DS-211", "MAT-6630", 1, 1),
    )
    for fgpn, material_code, usage_qty, version in bom_components:
        exists = db.query(BomComponent).filter_by(
            fgpn=fgpn,
            material_code=material_code,
            version=version,
        ).first()
        if not exists:
            db.add(BomComponent(
                fgpn=fgpn,
                material_code=material_code,
                usage_qty=usage_qty,
                version=version,
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

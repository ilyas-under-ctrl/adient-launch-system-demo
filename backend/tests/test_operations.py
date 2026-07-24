import json
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

from app.database import SessionLocal
from app.main import app
from app.models.operations import LaunchInstruction, MaterialStock

MATERIAL_METADATA = [
    {"code": code, "qty": 999999, "requiredTime": "2026-08-01T09:00"}
    for code in ("MAT-4471", "MAT-3390", "MAT-5512", "MAT-1207", "MAT-2208", "MAT-6630")
]


class OperationsWorkflowTest(unittest.TestCase):
    def test_launch_manager_reads_all_and_writes_assigned_project_only(self):
        with TestClient(app) as client:
            engineer = {"X-Demo-Role": "engineer"}
            manager = {"X-Demo-Role": "manager"}
            engineer_data = client.get("/api/bootstrap", headers=engineer).json()
            manager_response = client.get("/api/bootstrap", headers=manager)
            self.assertEqual(manager_response.status_code, 200)
            manager_data = manager_response.json()

            self.assertGreater(len(manager_data["projects"]), len(engineer_data["projects"]))
            self.assertIn("Peugeot 208", {project["name"] for project in manager_data["projects"]})
            self.assertIn("BMW X5", {project["name"] for project in manager_data["projects"]})

            payload = {
                "created_by": "S. Ait Oubou",
                "launch_lines": json.dumps([{"fgpn": "FG-P208-050", "qty": 1}]),
                "material_lines": json.dumps(MATERIAL_METADATA),
            }
            assigned = client.post(
                "/api/launches",
                headers=manager,
                data={**payload, "project": "Peugeot 208", "po": "PO-2025-012"},
                files={"meeting_minutes": ("manager-meeting.pdf", b"%PDF-1.4 manager", "application/pdf")},
            )
            self.assertEqual(assigned.status_code, 201, assigned.text)
            launch = assigned.json()

            def clean_manager_record():
                db = SessionLocal()
                try:
                    db.query(LaunchInstruction).filter(LaunchInstruction.id == launch["id"]).delete()
                    db.commit()
                finally:
                    db.close()
                for path in Path("backend/uploads").glob(f"{launch['id']}-*.pdf"):
                    path.unlink(missing_ok=True)

            self.addCleanup(clean_manager_record)

            unassigned = client.post(
                "/api/launches",
                headers=manager,
                data={
                    **payload,
                    "project": "BMW X5",
                    "po": "PO-00045",
                    "launch_lines": json.dumps([{"fgpn": "FG-BX5-100", "qty": 1}]),
                },
                files={"meeting_minutes": ("manager-meeting.pdf", b"%PDF-1.4 manager", "application/pdf")},
            )
            self.assertEqual(unassigned.status_code, 403, unassigned.text)

    def test_launch_to_signed_reception_workflow(self):
        with TestClient(app) as client:
            engineer = {"X-Demo-Role": "engineer"}
            warehouse = {"X-Demo-Role": "wh_lead"}
            bootstrap = client.get("/api/bootstrap", headers=engineer)
            self.assertEqual(bootstrap.status_code, 200)
            data = bootstrap.json()
            purchase_order = data["purchase_orders"][0]

            launch_response = client.post(
                "/api/launches",
                headers=engineer,
                data={
                    "project": purchase_order["project"],
                    "po": purchase_order["id"],
                    "launch_lines": json.dumps([{"fgpn": purchase_order["fgpn_lines"][0]["fgpn"], "qty": 1}]),
                    "material_lines": json.dumps(MATERIAL_METADATA),
                },
                files={"meeting_minutes": ("launch-meeting.pdf", b"%PDF-1.4 demo", "application/pdf")},
            )
            self.assertEqual(launch_response.status_code, 201, launch_response.text)
            launch = launch_response.json()
            material_codes = [line["code"] for line in launch["materials"]]
            db = SessionLocal()
            try:
                initial_stock = {
                    code: (db.get(MaterialStock, code).warehouse, db.get(MaterialStock, code).wip)
                    for code in material_codes
                }
            finally:
                db.close()

            def clean_test_record():
                db = SessionLocal()
                try:
                    db.query(LaunchInstruction).filter(LaunchInstruction.id == launch["id"]).delete()
                    for code, (warehouse, wip) in initial_stock.items():
                        stored_material = db.get(MaterialStock, code)
                        if stored_material:
                            stored_material.warehouse = warehouse
                            stored_material.wip = wip
                    db.commit()
                finally:
                    db.close()
                for path in Path("backend/uploads").glob(f"{launch['id']}-*.pdf"):
                    path.unlink(missing_ok=True)

            self.addCleanup(clean_test_record)

            verify = client.post(
                "/api/warehouse/verify",
                headers=warehouse,
                json={"code": launch["code"]},
            )
            self.assertEqual(verify.status_code, 200, verify.text)
            self.assertEqual(
                client.post(
                    "/api/warehouse/verify",
                    headers=warehouse,
                    json={"code": launch["code"]},
                ).status_code,
                409,
            )

            receiver = client.patch(
                f"/api/warehouse/launches/{launch['id']}/receiver",
                headers=warehouse,
                json={"receiver": "Cell 1 — Cutting Line"},
            )
            self.assertEqual(receiver.status_code, 200, receiver.text)

            document = client.post(
                f"/api/warehouse/launches/{launch['id']}/document",
                headers=warehouse,
            )
            self.assertEqual(document.status_code, 200, document.text)

            signed = client.post(
                f"/api/warehouse/launches/{launch['id']}/signed-reception",
                headers=warehouse,
                files={"signed_pdf": ("signed-reception.pdf", b"%PDF-1.4 signed", "application/pdf")},
            )
            self.assertEqual(signed.status_code, 200, signed.text)
            self.assertEqual(signed.json()["status"], "Signed Document Uploaded")

            confirmed = client.post(
                f"/api/launches/{launch['id']}/confirm-reception",
                headers=engineer,
            )
            self.assertEqual(confirmed.status_code, 200, confirmed.text)
            self.assertEqual(confirmed.json()["status"], "Delivered")

    def test_backend_derives_latest_bom_and_rejects_invalid_launches(self):
        with TestClient(app) as client:
            engineer = {"X-Demo-Role": "engineer"}
            payload = {
                "project": "BMW X5",
                "po": "PO-00045",
                "created_by": "Spoofed User",
                "launch_lines": json.dumps([{"fgpn": "FG-BX5-102", "qty": 2}]),
                "material_lines": json.dumps([
                    {"code": "MAT-4471", "qty": 999999, "requiredTime": "2026-08-01T09:00"},
                    {"code": "MAT-5512", "qty": 999999, "requiredTime": "2026-08-01T09:00"},
                ]),
            }
            created = client.post(
                "/api/launches",
                headers=engineer,
                data=payload,
                files={"meeting_minutes": ("meeting.pdf", b"%PDF-1.4 valid", "application/pdf")},
            )
            self.assertEqual(created.status_code, 201, created.text)
            launch = created.json()

            def clean_record():
                db = SessionLocal()
                try:
                    db.query(LaunchInstruction).filter(LaunchInstruction.id == launch["id"]).delete()
                    db.commit()
                finally:
                    db.close()
                for path in Path("backend/uploads").glob(f"{launch['id']}-*.pdf"):
                    path.unlink(missing_ok=True)

            self.addCleanup(clean_record)
            self.assertEqual(launch["created_by"], "A. Rahal")
            self.assertEqual(
                {line["code"]: line["qty"] for line in launch["materials"]},
                {"MAT-4471": 2.0, "MAT-5512": 2.0},
            )
            self.assertEqual(
                {line["bomVersions"]["FG-BX5-102"] for line in launch["materials"]},
                {2},
            )

            document_before_code = client.post(
                f"/api/warehouse/launches/{launch['id']}/document",
                headers={"X-Demo-Role": "wh_lead"},
            )
            self.assertEqual(document_before_code.status_code, 409)

            over_launch = client.post(
                "/api/launches",
                headers=engineer,
                data={
                    **payload,
                    "launch_lines": json.dumps([{"fgpn": "FG-BX5-102", "qty": 5000}]),
                },
                files={"meeting_minutes": ("meeting.pdf", b"%PDF-1.4 valid", "application/pdf")},
            )
            self.assertEqual(over_launch.status_code, 409)

            invalid_pdf = client.post(
                "/api/launches",
                headers=engineer,
                data=payload,
                files={"meeting_minutes": ("meeting.pdf", b"not a pdf", "application/pdf")},
            )
            self.assertEqual(invalid_pdf.status_code, 422)


if __name__ == "__main__":
    unittest.main()

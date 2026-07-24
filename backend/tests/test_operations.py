import json
import unittest
from pathlib import Path

from fastapi.testclient import TestClient

from app.database import SessionLocal
from app.main import app
from app.models.operations import LaunchInstruction, MaterialStock


class OperationsWorkflowTest(unittest.TestCase):
    def test_launch_to_signed_reception_workflow(self):
        with TestClient(app) as client:
            engineer = {"X-Demo-Role": "engineer"}
            warehouse = {"X-Demo-Role": "wh_lead"}
            bootstrap = client.get("/api/bootstrap", headers=engineer)
            self.assertEqual(bootstrap.status_code, 200)
            data = bootstrap.json()
            purchase_order = data["purchase_orders"][0]
            material = data["materials"][0]

            launch_response = client.post(
                "/api/launches",
                headers=engineer,
                data={
                    "project": purchase_order["project"],
                    "po": purchase_order["id"],
                    "created_by": "A. Rahal",
                    "launch_lines": json.dumps([{"fgpn": purchase_order["fgpn_lines"][0]["fgpn"], "qty": 1}]),
                    "material_lines": json.dumps(
                        [{"code": material["code"], "desc": material["desc"], "qty": 1}]
                    ),
                },
                files={"meeting_minutes": ("launch-meeting.pdf", b"%PDF-1.4 demo", "application/pdf")},
            )
            self.assertEqual(launch_response.status_code, 201, launch_response.text)
            launch = launch_response.json()
            initial_warehouse = float(material["warehouse"])

            def clean_test_record():
                db = SessionLocal()
                try:
                    db.query(LaunchInstruction).filter(LaunchInstruction.id == launch["id"]).delete()
                    stored_material = db.get(MaterialStock, material["code"])
                    if stored_material:
                        stored_material.warehouse = initial_warehouse
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
                json={"receiver": "Assembly Line A"},
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


if __name__ == "__main__":
    unittest.main()

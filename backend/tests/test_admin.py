import unittest
from uuid import UUID, uuid4

from fastapi.testclient import TestClient

from app.database import SessionLocal
from app.main import app
from app.models import ProjectAssignment, User


class AdministrationConstraintsTest(unittest.TestCase):
    def test_admin_access_assignment_and_user_lifecycle_constraints(self):
        suffix = uuid4().hex[:8]
        username = f"engineer_{suffix}"
        created_user_id = None

        def cleanup():
            if not created_user_id:
                return
            user_id = UUID(created_user_id)
            db = SessionLocal()
            try:
                db.query(ProjectAssignment).filter(
                    ProjectAssignment.user_id == user_id
                ).delete()
                user = db.get(User, user_id)
                if user:
                    db.delete(user)
                db.commit()
            finally:
                db.close()

        self.addCleanup(cleanup)
        with TestClient(app) as client:
            engineer_login = client.post(
                "/auth/login",
                json={"username": "engineer", "password": "Demo1234!"},
            )
            self.assertEqual(engineer_login.status_code, 200, engineer_login.text)
            self.assertEqual(client.get("/admin/users").status_code, 403)
            client.post("/auth/logout")

            admin_login = client.post(
                "/auth/login",
                json={"username": "admin", "password": "ChangeMe123!"},
            )
            self.assertEqual(admin_login.status_code, 200, admin_login.text)
            projects = client.get("/admin/projects").json()
            project_id = next(row["id"] for row in projects if row["name"] == "BMW X5")

            created = client.post(
                "/admin/users",
                json={
                    "full_name": "Constraint Test Engineer",
                    "username": username,
                    "password": "Temporary123!",
                    "role": "LAUNCH_ENGINEER",
                    "email": f"{username}@example.test",
                },
            )
            self.assertEqual(created.status_code, 201, created.text)
            created_user_id = created.json()["id"]

            duplicate = client.post(
                "/admin/users",
                json={
                    "full_name": "Duplicate",
                    "username": username.upper(),
                    "password": "Temporary123!",
                    "role": "LAUNCH_ENGINEER",
                },
            )
            self.assertEqual(duplicate.status_code, 409)

            wrong_assignment = client.post(
                "/admin/project-assignments",
                json={
                    "user_id": created_user_id,
                    "project_id": project_id,
                    "assignment_role": "responsible_manager",
                },
            )
            self.assertEqual(wrong_assignment.status_code, 422)

            assignment = client.post(
                "/admin/project-assignments",
                json={
                    "user_id": created_user_id,
                    "project_id": project_id,
                    "assignment_role": "responsible_engineer",
                },
            )
            self.assertEqual(assignment.status_code, 201, assignment.text)

            blocked_deactivation = client.patch(
                f"/admin/users/{created_user_id}/deactivate"
            )
            self.assertEqual(blocked_deactivation.status_code, 409)

            removed = client.delete(
                f"/admin/project-assignments/{assignment.json()['id']}"
            )
            self.assertEqual(removed.status_code, 204)
            deactivated = client.patch(f"/admin/users/{created_user_id}/deactivate")
            self.assertEqual(deactivated.status_code, 200, deactivated.text)
            self.assertEqual(deactivated.json()["status"], "INACTIVE")

    def test_linked_reference_cannot_be_deleted(self):
        with TestClient(app) as client:
            login = client.post(
                "/auth/login",
                json={"username": "admin", "password": "ChangeMe123!"},
            )
            self.assertEqual(login.status_code, 200, login.text)
            customers = client.get("/admin/reference-data/jit_customer")
            self.assertEqual(customers.status_code, 200, customers.text)
            bmw = next(row for row in customers.json() if row["label"] == "BMW Group")
            self.assertGreater(bmw["linked_records_count"], 0)
            deleted = client.delete(
                f"/admin/reference-data/jit_customer/{bmw['id']}"
            )
            self.assertEqual(deleted.status_code, 409)


if __name__ == "__main__":
    unittest.main()

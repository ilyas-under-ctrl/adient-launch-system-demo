"""M00 administration router composition point.

Each concern owns its routes in a separate module. New admin capabilities
should be added as another router and included here rather than extending a
single catch-all controller.
"""
from fastapi import APIRouter, Depends

from app.core.security import require_system_admin
from app.routers.admin import access, audit, dashboard, references, users

router = APIRouter(
    prefix="/admin",
    tags=["administration"],
    dependencies=[Depends(require_system_admin)],
)
router.include_router(dashboard.router)
router.include_router(users.router)
router.include_router(access.router)
router.include_router(references.router)
router.include_router(audit.router)

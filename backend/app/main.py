from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

from app.core.config import settings
from app.routers import admin, auth, operations, users
from app.database import SessionLocal, engine
from app.models import Base
from app.services.admin.bootstrap import seed_m00
from app.services.operations.bootstrap import seed_operations

@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_m00(db)
        seed_operations(db)
    finally:
        db.close()
    yield

app = FastAPI(title="Launch System", lifespan=lifespan)

# Signed-cookie session (no server-side session store needed for the
# prototype). Swap for a DB-backed session table later if you need to be
# able to revoke/list active sessions (see SRS: 60-minute idle expiry).
app.add_middleware(
    SessionMiddleware,
    secret_key=settings.secret_key,
    max_age=settings.session_idle_minutes * 60,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173"],
    allow_origin_regex=r"^http://(127\.0\.0\.1|localhost)(:\d+)?$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register one router per resource. Add new ones here as you build them:
# app.include_router(projects.router)
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(admin.router)
app.include_router(operations.router)


@app.get("/health")
def health():
    return {"status": "ok"}



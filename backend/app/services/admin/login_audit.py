from fastapi import Request
from sqlalchemy.orm import Session
from app.models.admin import LoginEvent, LoginResult


def record_login(db: Session, request: Request, username: str, result: LoginResult, reason: str | None, user_id=None) -> None:
    forwarded = request.headers.get("x-forwarded-for", "").split(",")[0].strip()
    source_ip = forwarded or (request.client.host if request.client else None)
    db.add(LoginEvent(username=username, user_id=user_id, result=result, reason=reason, source_ip=source_ip))


def list_login_events(db: Session, search: str | None = None, result: LoginResult | None = None) -> list[LoginEvent]:
    query = db.query(LoginEvent)
    if search:
        query = query.filter(LoginEvent.username.ilike(f"%{search}%"))
    if result:
        query = query.filter(LoginEvent.result == result)
    return query.order_by(LoginEvent.occurred_at.desc()).limit(250).all()

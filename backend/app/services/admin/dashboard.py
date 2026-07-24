from datetime import datetime, timedelta, timezone

from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.models.admin import LoginEvent, LoginResult, ReferenceEntry
from app.models.user import RecordStatus, User


def get_dashboard(db: Session) -> dict:
    cutoff = datetime.now(timezone.utc) - timedelta(days=30)
    return {
        "active_users": db.query(User).filter(User.status == RecordStatus.ACTIVE).count(),
        "inactive_users": db.query(User).filter(User.status == RecordStatus.INACTIVE).count(),
        "locked_users": db.query(User).filter(User.locked_at.isnot(None)).count(),
        "failed_logins_30_days": db.query(LoginEvent).filter(LoginEvent.result == LoginResult.FAILED, LoginEvent.occurred_at >= cutoff).count(),
        "reference_entries": db.query(ReferenceEntry).count(),
        "attention_users": db.query(User).filter(or_(User.status == RecordStatus.INACTIVE, User.locked_at.isnot(None))).count(),
        "recent_login_events": db.query(LoginEvent).order_by(LoginEvent.occurred_at.desc()).limit(5).all(),
    }

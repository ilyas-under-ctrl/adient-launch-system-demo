from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session

from datetime import datetime, timezone
from app.core.security import get_current_user, verify_password
from app.database import get_db
from app.models.admin import LoginResult
from app.models.user import RecordStatus, User
from app.schemas.user import LoginRequest, UserOut
from app.services.admin.login_audit import record_login

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login", response_model=UserOut)
def login(payload: LoginRequest, request: Request, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == payload.username).first()

    if not user:
        record_login(db, request, payload.username, LoginResult.FAILED, "Invalid credentials")
        db.commit()
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    if user.status != RecordStatus.ACTIVE:
        record_login(db, request, payload.username, LoginResult.FAILED, "Account is inactive", user.id)
        db.commit()
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is inactive")
    if user.locked_at:
        record_login(db, request, payload.username, LoginResult.FAILED, "Account is locked", user.id)
        db.commit()
        raise HTTPException(status_code=status.HTTP_423_LOCKED, detail="Account is locked; contact a system administrator")
    if not verify_password(payload.password, user.password_hash):
        user.failed_login_count += 1
        reason = "Invalid password"
        if user.failed_login_count >= 5:
            user.locked_at = datetime.now(timezone.utc); reason = "Account locked after five failed attempts"
        record_login(db, request, payload.username, LoginResult.FAILED, reason, user.id)
        db.commit()
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=reason)

    user.failed_login_count = 0
    user.last_login_at = datetime.now(timezone.utc)
    record_login(db, request, payload.username, LoginResult.SUCCESS, "Login successful", user.id)
    db.commit()
    request.session["user_id"] = str(user.id)
    return user


@router.post("/logout")
def logout(request: Request):
    request.session.clear()
    return {"detail": "Logged out"}


@router.get("/me", response_model=UserOut)
def me(current_user: User = Depends(get_current_user)):
    return current_user

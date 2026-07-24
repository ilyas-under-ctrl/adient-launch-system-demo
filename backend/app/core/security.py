from fastapi import Depends, HTTPException, Request, status
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import RoleCode, User

# Use pbkdf2_sha256 to avoid dependency issues with the bcrypt C backend
# and bcrypt's 72-byte input limitation. pbkdf2_sha256 is supported by
# passlib without extra native dependencies.
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")


def hash_password(plain_password: str) -> str:
    return pwd_context.hash(plain_password)


def verify_password(plain_password: str, password_hash: str) -> bool:
    return pwd_context.verify(plain_password, password_hash)


def get_current_user(request: Request, db: Session = Depends(get_db)) -> User:
    """
    Reads the signed session cookie (set by SessionMiddleware in main.py) and
    loads the corresponding user. Every protected router should depend on
    this instead of re-implementing auth checks.

    Role-based access control: once more roles have real permissions, add a
    `require_role(*roles)` dependency here that wraps this one and checks
    `user.role` against the allowed list.
    """
    user_id = request.session.get("user_id")
    if not user_id:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")

    user = db.query(User).filter(User.id == user_id, User.status == "ACTIVE").first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Session invalid")

    return user


def require_system_admin(current_user: User = Depends(get_current_user)) -> User:
    if current_user.role != RoleCode.SYSTEM_ADMIN:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="System administrator access is required")
    return current_user

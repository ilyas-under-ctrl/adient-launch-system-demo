import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "backend"))

os.environ.setdefault("DATABASE_URL", "sqlite:////tmp/launch_system_demo.db")
os.environ.setdefault("LAUNCHOPS_UPLOAD_DIR", "/tmp/launchops_uploads")

from app.main import app

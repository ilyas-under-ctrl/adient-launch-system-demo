from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Central place for every configurable value. Add new settings here as the
    project grows instead of scattering os.environ calls through the code.
    """

    database_url: str = "sqlite:///./backend/launch_system_demo.db"
    secret_key: str = "change-this-in-every-environment"
    session_idle_minutes: int = 60
    bootstrap_admin_username: str = "admin"
    bootstrap_admin_password: str = "ChangeMe123!"

    model_config = SettingsConfigDict(env_file=("backend/.env", ".env"), extra="ignore")


settings = Settings()

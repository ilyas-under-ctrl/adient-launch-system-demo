from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, JSON, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class PurchaseOrder(TimestampMixin, Base):
    __tablename__ = "operational_purchase_orders"

    id: Mapped[str] = mapped_column(String(40), primary_key=True)
    project_name: Mapped[str] = mapped_column(String(150), index=True)
    customer: Mapped[str] = mapped_column(String(150))
    status: Mapped[str] = mapped_column(String(40), default="Unplanned")
    delivery_date: Mapped[str] = mapped_column(String(20))
    stock_code: Mapped[str] = mapped_column(String(60))
    fgpn_lines: Mapped[list] = mapped_column(JSON, default=list)


class MaterialStock(TimestampMixin, Base):
    __tablename__ = "operational_material_stock"

    code: Mapped[str] = mapped_column(String(60), primary_key=True)
    description: Mapped[str] = mapped_column(String(200))
    material_type: Mapped[str] = mapped_column(String(80))
    supplier: Mapped[str] = mapped_column(String(150))
    unit: Mapped[str] = mapped_column(String(20))
    warehouse: Mapped[float] = mapped_column(Float, default=0)
    wip: Mapped[float] = mapped_column(Float, default=0)
    transit: Mapped[float] = mapped_column(Float, default=0)


class BomComponent(TimestampMixin, Base):
    __tablename__ = "operational_bom_components"
    __table_args__ = (
        UniqueConstraint("fgpn", "material_code", "version", name="uq_operational_bom_component"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    fgpn: Mapped[str] = mapped_column(String(60), index=True)
    material_code: Mapped[str] = mapped_column(String(60), index=True)
    usage_qty: Mapped[float] = mapped_column(Float)
    version: Mapped[int] = mapped_column(Integer, default=1)


class LaunchInstruction(TimestampMixin, Base):
    __tablename__ = "operational_launch_instructions"

    id: Mapped[str] = mapped_column(String(40), primary_key=True)
    code: Mapped[str] = mapped_column(String(80), unique=True, index=True)
    project_name: Mapped[str] = mapped_column(String(150), index=True)
    po_id: Mapped[str] = mapped_column(String(40), index=True)
    status: Mapped[str] = mapped_column(String(50), default="Code Generated")
    created_by: Mapped[str] = mapped_column(String(150))
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    used_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    receiver: Mapped[str | None] = mapped_column(String(150), nullable=True)
    meeting_minutes_name: Mapped[str] = mapped_column(String(255))
    warehouse_document_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    signed_document_name: Mapped[str | None] = mapped_column(String(255), nullable=True)
    launch_lines: Mapped[list] = mapped_column(JSON, default=list)
    material_lines: Mapped[list] = mapped_column(JSON, default=list)

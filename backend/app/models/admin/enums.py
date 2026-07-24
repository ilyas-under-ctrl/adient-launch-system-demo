import enum


class LoginResult(str, enum.Enum):
    SUCCESS = "success"
    FAILED = "failed"


class ProjectStatus(str, enum.Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


class AssignmentRole(str, enum.Enum):
    RESPONSIBLE_MANAGER = "responsible_manager"
    RESPONSIBLE_ENGINEER = "responsible_engineer"


class ReferenceListType(str, enum.Enum):
    JIT_CUSTOMER = "jit_customer"
    CONTACT = "contact"
    FGPN = "fgpn"
    MFG_RECEIVER = "mfg_receiver"
    DELIVERY_METHOD = "delivery_method"
    MATERIAL_TYPE = "material_type"


def enum_values(enum_class: type[enum.Enum]) -> list[str]:
    """Persist enum values, not Python member names, in PostgreSQL."""
    return [member.value for member in enum_class]

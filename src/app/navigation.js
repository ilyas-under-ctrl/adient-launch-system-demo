const roleNames = {
  engineer: "Launch Engineer",
  manager: "Launch Manager",
  wh_lead: "Warehouse Team Leader",
  admin: "System Administrator",
};

const operationItems = [
  ["overview", "Overview", "/overview"],
  ["projects", "Projects", "/projects"],
  ["simulation", "Simulation", "/simulation"],
  ["plan", "Plan Launch", "/launches/new"],
  ["launches", "Launches", "/launches"],
  ["stock", "Stock", "/stock"],
];

const adminItems = [
  ["users", "User Accounts", "/admin/users"],
  ["assignments", "Project Assignments", "/admin/assignments"],
  ["references", "Reference Lists", "/admin/references"],
  ["audit", "Login Audit", "/admin/audit"],
];

export function navigationFor(role) {
  if (role === "admin") return adminItems;
  if (role === "wh_lead") {
    return [
      ["warehouse", "Code Access", "/warehouse"],
      ["launches", "Launches", "/launches"],
      ["stock", "Stock", "/stock"],
    ];
  }
  return operationItems;
}

export function roleName(role) {
  return roleNames[role] || role;
}

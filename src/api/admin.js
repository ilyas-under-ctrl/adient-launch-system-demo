import { request } from "./client.js";

const credentials = { username: "admin", password: "ChangeMe123!" };
const call = (path, options = {}) => request(path, { ...options, credentials: "include" });

export async function ensureAdminSession() {
  try {
    return await call("/auth/me");
  } catch (error) {
    if (error.status !== 401) throw error;
    return call("/auth/login", { method: "POST", body: JSON.stringify(credentials) });
  }
}

export const adminApi = {
  users: () => call("/admin/users"),
  projects: () => call("/admin/projects"),
  assignments: () => call("/admin/project-assignments"),
  events: () => call("/admin/login-events"),
  references: (type) => call(`/admin/reference-data/${type}`),
  createUser: (data) => call("/admin/users", { method: "POST", body: JSON.stringify(data) }),
  updateUser: (id, data) => call(`/admin/users/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  userAction: (id, action, body) => call(`/admin/users/${id}/${action}`, {
    method: action === "reset-password" ? "POST" : "PATCH",
    body: body ? JSON.stringify(body) : undefined,
  }),
  createAssignment: (data) => call("/admin/project-assignments", { method: "POST", body: JSON.stringify(data) }),
  deleteAssignment: (id) => call(`/admin/project-assignments/${id}`, { method: "DELETE" }),
  createReference: (type, data) => call(`/admin/reference-data/${type}`, { method: "POST", body: JSON.stringify(data) }),
  toggleReference: (type, id) => call(`/admin/reference-data/${type}/${id}/toggle-status`, { method: "PATCH" }),
  deleteReference: (type, id) => call(`/admin/reference-data/${type}/${id}`, { method: "DELETE" }),
};

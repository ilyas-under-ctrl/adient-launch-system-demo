import { request } from "./client.js";

function call(path, role, options = {}) {
  const headers = new Headers(options.headers || {});
  headers.set("X-Demo-Role", role);
  return request(`/api${path}`, { ...options, headers });
}

export const operationsApi = {
  bootstrap: (role) => call("/bootstrap", role),
  createLaunch: (role, body) => call("/launches", role, { method: "POST", body }),
  verifyCode: (code) => call("/warehouse/verify", "wh_lead", {
    method: "POST",
    body: JSON.stringify({ code }),
  }),
  setReceiver: (id, receiver) => call(`/warehouse/launches/${id}/receiver`, "wh_lead", {
    method: "PATCH",
    body: JSON.stringify({ receiver }),
  }),
  generateDocument: (id) => call(`/warehouse/launches/${id}/document`, "wh_lead", { method: "POST" }),
  uploadReception: (id, body) => call(`/warehouse/launches/${id}/signed-reception`, "wh_lead", {
    method: "POST",
    body,
  }),
  confirmReception: (role, id) => call(`/launches/${id}/confirm-reception`, role, { method: "POST" }),
};

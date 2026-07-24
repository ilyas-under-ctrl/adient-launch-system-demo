const localHost = ["127.0.0.1", "localhost"].includes(location.hostname);
const root = localHost ? "http://127.0.0.1:8000" : "";

export async function request(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (options.body && !(options.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const response = await fetch(`${root}${path}`, { ...options, headers });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    const detail = typeof payload.detail === "string" ? payload.detail : payload.detail?.message;
    const error = new Error(detail || `Request failed (${response.status})`);
    error.status = response.status;
    error.payload = payload;
    throw error;
  }
  return response.status === 204 ? null : response.json();
}

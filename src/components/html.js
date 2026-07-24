export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function formatNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(Number(value) || 0);
}

export function formatDate(value) {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

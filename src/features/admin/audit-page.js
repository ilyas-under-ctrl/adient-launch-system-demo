import { escapeHtml, formatDate } from "../../components/html.js";
import { badge, pageHeader } from "../../components/ui.js";

export function render({ store }) {
  const events = store.get().admin.events;
  return `${pageHeader("Login audit", "Immutable sign-in outcomes recorded by the authentication service.")}
    <section class="panel"><div class="table-wrap"><table><thead><tr><th>Date and time</th><th>Username</th><th>Result</th><th>Reason</th><th>Source IP</th></tr></thead><tbody>
      ${events.map((event) => `<tr><td>${formatDate(event.occurred_at)}</td><td>${escapeHtml(event.username)}</td><td>${badge(event.result)}</td><td>${escapeHtml(event.reason || "Authentication completed")}</td><td class="mono">${escapeHtml(event.source_ip || "Local")}</td></tr>`).join("")}
    </tbody></table></div></section>`;
}

export function mount() {}

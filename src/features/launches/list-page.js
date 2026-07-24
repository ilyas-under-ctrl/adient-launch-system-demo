import { escapeHtml, formatDate, formatNumber } from "../../components/html.js";
import { badge, bindAsync, emptyState, pageHeader, showNotice } from "../../components/ui.js";

function launchDetails(launch, canConfirm) {
  return `<details class="accordion launch-accordion">
    <summary><div><strong>${escapeHtml(launch.id)}</strong><span>${escapeHtml(launch.project)} · ${escapeHtml(launch.po)} · ${formatDate(launch.created_at)}</span></div>${badge(launch.status)}</summary>
    <div class="launch-detail-grid">
      <dl><div><dt>Warehouse code</dt><dd class="mono">${escapeHtml(launch.code)}</dd></div><div><dt>Created by</dt><dd>${escapeHtml(launch.created_by)}</dd></div><div><dt>Receiver</dt><dd>${escapeHtml(launch.receiver || "Not selected")}</dd></div><div><dt>Meeting PDF</dt><dd>${escapeHtml(launch.meeting_minutes_name)}</dd></div></dl>
      <div><h3>Finished goods</h3>${launch.fgpn_quantities.map((line) => `<p class="detail-line"><span class="mono">${escapeHtml(line.fgpn)}</span><strong>${formatNumber(line.qty)} units</strong></p>`).join("")}</div>
      <div><h3>Materials</h3>${launch.materials.map((line) => `<p class="detail-line"><span class="mono">${escapeHtml(line.code)}</span><strong>${formatNumber(line.qty)} ${escapeHtml(line.unit || "")}</strong></p>`).join("")}</div>
    </div>
    ${canConfirm && launch.status === "Signed Document Uploaded" ? `<div class="accordion-actions"><button class="button primary confirm-reception" data-id="${escapeHtml(launch.id)}">Confirm signed reception</button></div>` : ""}
  </details>`;
}

export function render({ store }) {
  const { operations, role } = store.get();
  const canConfirm = ["engineer", "manager"].includes(role);
  return `${pageHeader("Launches", "Every planned launch remains available until warehouse transfer and signed reception are complete.", canConfirm ? `<a class="button primary" href="#/launches/new">Plan launch</a>` : "")}
    <section class="panel"><div class="toolbar"><label class="search-field"><span class="sr-only">Search launches</span><input id="launch-search" type="search" placeholder="Search launch, code, project, or PO..."></label></div>
      <div id="launch-list" class="accordion-list">${operations.launches.map((launch) => launchDetails(launch, canConfirm)).join("") || emptyState("No launches", "No launch operation has been created.")}</div>
    </section>`;
}

export function mount(root, context) {
  const renderFiltered = (query) => {
    const { operations, role } = context.store.get();
    const term = query.toLowerCase();
    root.querySelector("#launch-list").innerHTML = operations.launches.filter((item) => `${item.id} ${item.code} ${item.project} ${item.po}`.toLowerCase().includes(term)).map((launch) => launchDetails(launch, ["engineer", "manager"].includes(role))).join("");
    bindConfirmation();
  };
  const bindConfirmation = () => bindAsync(root, ".confirm-reception", async (_, button) => {
    await context.api.operations.confirmReception(context.store.get().role, button.dataset.id);
    await context.refreshOperations();
    renderFiltered(root.querySelector("#launch-search").value);
    showNotice("Reception confirmed and stock deducted.");
  });
  root.querySelector("#launch-search").addEventListener("input", (event) => renderFiltered(event.target.value));
  bindConfirmation();
}

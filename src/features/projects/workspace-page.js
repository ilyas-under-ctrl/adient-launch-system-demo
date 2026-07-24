import { badge, emptyState, pageHeader } from "../../components/ui.js";
import { escapeHtml, formatNumber } from "../../components/html.js";

export function render({ store, location }) {
  const { operations } = store.get();
  const name = decodeURIComponent(location.path.replace("/projects/", ""));
  const project = operations.projects.find((item) => item.name === name);
  if (!project) return pageHeader("Project not found", "This project is outside the current access scope.");
  const pos = operations.purchase_orders.filter((po) => po.project === name);
  const launches = operations.launches.filter((launch) => launch.project === name);
  const canPlan = operations.editable_projects.includes(name);
  const ordered = pos.flatMap((po) => po.fgpn_lines).reduce((sum, line) => sum + line.ordered, 0);
  const launched = pos.flatMap((po) => po.fgpn_lines).reduce((sum, line) => sum + line.launched, 0);

  return `${pageHeader(name, canPlan ? "Project-specific purchase orders, part numbers, and launch history." : "Read-only portfolio view. This project is not assigned to you.", canPlan ? `<a class="button primary" href="#/launches/new?project=${encodeURIComponent(name)}">Plan launch</a>` : "")}
    <section class="metrics-grid compact">
      ${[
        ["Purchase orders", pos.length],
        ["Part numbers", pos.flatMap((po) => po.fgpn_lines).length],
        ["Launched units", formatNumber(launched)],
        ["Remaining units", formatNumber(Math.max(0, ordered - launched))],
      ].map(([label, value]) => `<article class="metric"><span>${label}</span><strong>${value}</strong></article>`).join("")}
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2>Purchase orders</h2><p>Each PO keeps its part numbers and launch progress together.</p></div></div>
      <div class="accordion-list">${pos.map((po) => `<details class="accordion">
        <summary><div><strong>${escapeHtml(po.id)}</strong><span>${escapeHtml(po.stock_code)} · Delivery ${escapeHtml(po.delivery)}</span></div>${badge(po.status)}</summary>
        <div class="table-wrap"><table><thead><tr><th>Part number</th><th>Description</th><th>Ordered</th><th>Launched</th><th>Remaining</th></tr></thead>
        <tbody>${po.fgpn_lines.map((line) => `<tr><td class="mono">${escapeHtml(line.fgpn)}</td><td>${escapeHtml(line.description)}</td><td>${formatNumber(line.ordered)}</td><td>${formatNumber(line.launched)}</td><td>${formatNumber(line.ordered - line.launched)}</td></tr>`).join("")}</tbody></table></div>
      </details>`).join("") || emptyState("No purchase orders", "This project does not have a purchase order yet.")}</div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2>Launches</h2><p>Expand a launch to see its code, parts, materials, and current status.</p></div></div>
      <div class="accordion-list">${launches.map((launch) => `<details class="accordion">
        <summary><div><strong>${escapeHtml(launch.id)}</strong><span>${escapeHtml(launch.po)} · ${escapeHtml(launch.code)}</span></div>${badge(launch.status)}</summary>
        <div class="split-detail"><div><h3>Finished goods</h3>${launch.fgpn_quantities.map((line) => `<p><span class="mono">${escapeHtml(line.fgpn)}</span><strong>${formatNumber(line.qty)} units</strong></p>`).join("")}</div>
        <div><h3>Materials</h3>${launch.materials.map((line) => `<p><span class="mono">${escapeHtml(line.code)}</span><strong>${formatNumber(line.qty)} ${escapeHtml(line.unit || "")}</strong></p>`).join("")}</div></div>
      </details>`).join("") || emptyState("No launches", "No launch has been planned for this project.")}</div>
    </section>`;
}

export function mount() {}

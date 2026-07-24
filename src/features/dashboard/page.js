import { formatNumber, escapeHtml } from "../../components/html.js";
import { badge, emptyState, metric, pageHeader } from "../../components/ui.js";

export function render({ store }) {
  const { operations } = store.get();
  const openPos = operations.purchase_orders.filter((po) => !["Delivered", "Packaged"].includes(po.status));
  const activeLaunches = operations.launches.filter((launch) => launch.status !== "Delivered");
  const stock = operations.materials.reduce((sum, material) => sum + material.warehouse, 0);
  const projectRows = operations.projects.map((project) => {
    const pos = operations.purchase_orders.filter((po) => po.project === project.name);
    const launches = operations.launches.filter((launch) => launch.project === project.name);
    const ordered = pos.flatMap((po) => po.fgpn_lines).reduce((sum, line) => sum + line.ordered, 0);
    const launched = pos.flatMap((po) => po.fgpn_lines).reduce((sum, line) => sum + line.launched, 0);
    return `<a class="project-row" href="#/projects/${encodeURIComponent(project.name)}">
      <div><strong>${escapeHtml(project.name)}</strong><span>${pos.length} purchase orders</span></div>
      <div><span>Launched units</span><strong>${formatNumber(launched)} / ${formatNumber(ordered)}</strong></div>
      <div><span>Active launches</span><strong>${launches.filter((item) => item.status !== "Delivered").length}</strong></div>
      <span class="row-arrow" aria-hidden="true">&#8250;</span>
    </a>`;
  }).join("");

  return `${pageHeader("Operational overview", "Projects, launch activity, and stock in your current access scope.")}
    <section class="metrics-grid">
      ${metric("Projects", String(operations.projects.length), "Current access scope")}
      ${metric("Open purchase orders", String(openPos.length), "Available for planning")}
      ${metric("Active launches", String(activeLaunches.length), "Awaiting completion")}
      ${metric("Warehouse stock", formatNumber(stock), "Across all material units")}
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2>Projects</h2><p>Open a project without selecting it again inside its workspace.</p></div><a class="button secondary" href="#/projects">View all</a></div>
      <div class="project-rows">${projectRows || emptyState("No assigned projects", "Ask the administrator to create a project assignment.")}</div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2>Recent launches</h2><p>Latest delivery instructions across the visible portfolio.</p></div></div>
      <div class="compact-list">${operations.launches.slice(0, 5).map((launch) => `
        <a href="#/launches" class="compact-row"><strong>${escapeHtml(launch.id)}</strong><span>${escapeHtml(launch.project)} · ${escapeHtml(launch.po)}</span>${badge(launch.status)}</a>`).join("") || emptyState("No launches yet", "Create a launch plan to begin the workflow.")}</div>
    </section>`;
}

export function mount() {}

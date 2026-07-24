import { escapeHtml, formatNumber } from "../../components/html.js";
import { pageHeader, showNotice } from "../../components/ui.js";
import { remaining } from "./model.js";

function poOptions(pos, selected) {
  return pos.map((po) => `<option value="${escapeHtml(po.id)}" ${po.id === selected ? "selected" : ""}>${escapeHtml(po.id)} · ${escapeHtml(po.project)}</option>`).join("");
}

function lineMarkup(po, operations) {
  if (!po) return "";
  return po.fgpn_lines.filter((line) => remaining(line) > 0).map((line, index) => {
    const components = operations.bom_components.filter((item) => item.fgpn === line.fgpn);
    return `<article class="launch-line" data-fgpn="${escapeHtml(line.fgpn)}">
      <div class="launch-line-head"><label class="check-title"><input class="fgpn-check" type="checkbox" ${index === 0 ? "checked" : ""}><span><strong>${escapeHtml(line.fgpn)}</strong><small>${escapeHtml(line.description)}</small></span></label>
        <label><span>Launch quantity</span><input class="launch-qty" type="number" min="1" max="${remaining(line)}" value="${Math.min(10, remaining(line))}"></label></div>
      <div class="line-stats"><span>Ordered <strong>${formatNumber(line.ordered)}</strong></span><span>Previously launched <strong>${formatNumber(line.launched)}</strong></span><span>Remaining <strong>${formatNumber(remaining(line))}</strong></span></div>
      <details class="materials-preview"><summary>Latest BOM · v${components[0]?.version || "missing"} · ${components.length} materials</summary>
        <div class="material-grid">${components.map((component) => {
          const material = operations.materials.find((item) => item.code === component.material_code);
          return `<div><span class="mono">${escapeHtml(component.material_code)}</span><strong>${formatNumber(component.usage_qty)} ${escapeHtml(material?.unit || "")} / unit</strong><small>${escapeHtml(material?.desc || "Unknown material")}</small></div>`;
        }).join("") || `<p class="inline-error">No current BOM is available for this part number.</p>`}</div>
      </details>
    </article>`;
  }).join("");
}

export function render({ store, location }) {
  const { operations } = store.get();
  const eligible = operations.purchase_orders.filter((po) => operations.editable_projects.includes(po.project) && ["Unplanned", "In Progress"].includes(po.status));
  const requestedProject = location.query.get("project");
  const first = eligible.find((po) => po.project === requestedProject) || eligible[0];
  return `${pageHeader("Plan launch", "Choose a PO, set partial quantities, review the latest BOM, and attach the required meeting minutes.")}
    <form id="launch-form" class="stack">
      <section class="panel">
        <div class="form-grid">
          <label><span>Purchase order</span><select id="launch-po" required>${poOptions(eligible, first?.id)}</select></label>
          <label><span>Required delivery time</span><input id="required-time" type="datetime-local" required></label>
        </div>
      </section>
      <section class="panel"><div class="panel-head"><div><h2>Launch quantities</h2><p>Select finished-good part numbers and enter the quantity for this launch.</p></div></div><div id="launch-lines" class="launch-lines">${lineMarkup(first, operations)}</div></section>
      <section class="panel">
        <div class="panel-head"><div><h2>Meeting minutes</h2><p>A PDF linked to this exact launch is required before a warehouse code can be generated.</p></div></div>
        <label class="file-drop"><input id="meeting-file" type="file" accept="application/pdf,.pdf" required><span><strong>Select meeting minutes PDF</strong><small>PDF only, maximum 10 MB</small></span></label>
      </section>
      <div class="action-bar"><a class="button secondary" href="#/launches">Cancel</a><button class="button primary" type="submit">Create launch and generate code</button></div>
    </form>`;
}

export function mount(root, context) {
  const { operations, role } = context.store.get();
  const selector = root.querySelector("#launch-po");
  selector.addEventListener("change", () => {
    root.querySelector("#launch-lines").innerHTML = lineMarkup(operations.purchase_orders.find((po) => po.id === selector.value), operations);
  });
  root.querySelector("#launch-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.submitter;
    button.disabled = true;
    try {
      const po = operations.purchase_orders.find((item) => item.id === selector.value);
      const lines = [...root.querySelectorAll(".launch-line")].filter((node) => node.querySelector(".fgpn-check").checked).map((node) => ({
        fgpn: node.dataset.fgpn,
        qty: Number(node.querySelector(".launch-qty").value),
      }));
      if (!lines.length) throw new Error("Select at least one part number.");
      const form = new FormData();
      form.set("project", po.project);
      form.set("po", po.id);
      form.set("launch_lines", JSON.stringify(lines));
      form.set("material_lines", JSON.stringify(operations.materials.map((material) => ({
        code: material.code,
        requiredTime: root.querySelector("#required-time").value,
      }))));
      form.set("meeting_minutes", root.querySelector("#meeting-file").files[0]);
      await context.api.operations.createLaunch(role, form);
      await context.refreshOperations();
      showNotice("Launch created and warehouse code generated.");
      context.router.go("/launches");
    } finally {
      button.disabled = false;
    }
  });
}

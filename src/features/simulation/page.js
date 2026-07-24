import { escapeHtml, formatNumber } from "../../components/html.js";
import { badge, pageHeader } from "../../components/ui.js";
import { simulatePurchaseOrders } from "../launches/model.js";

function optionRows(pos) {
  return pos.map((po) => `<label class="choice-row"><input type="checkbox" name="po" value="${escapeHtml(po.id)}"><span><strong>${escapeHtml(po.id)}</strong><small>${escapeHtml(po.project)} · ${po.fgpn_lines.length} part numbers</small></span></label>`).join("");
}

export function render({ store }) {
  const { operations } = store.get();
  const eligible = operations.purchase_orders.filter((po) => ["Unplanned", "In Progress"].includes(po.status));
  return `${pageHeader("Simulation", "Check one PO or a combined plan across multiple projects.")}
    <section class="panel simulation-panel">
      <div class="form-grid">
        <label><span>Selection mode</span><select id="simulation-mode"><option value="single">Single PO</option><option value="multiple">Multiple POs</option></select></label>
        <label class="toggle-field"><input id="reserved-stock" type="checkbox"><span><strong>Subtract frozen stock</strong><small>Include quantities already reserved by active launches.</small></span></label>
      </div>
      <div class="toolbar"><label class="search-field"><span class="sr-only">Search POs</span><input id="simulation-search" type="search" placeholder="Search PO, project, or part number..."></label></div>
      <div id="simulation-options" class="choice-list">${optionRows(eligible)}</div>
      <div class="panel-footer"><button id="run-simulation" class="button primary" type="button">Run simulation</button></div>
    </section>
    <section id="simulation-results" class="panel" hidden></section>`;
}

export function mount(root, { store }) {
  const { operations } = store.get();
  const eligible = operations.purchase_orders.filter((po) => ["Unplanned", "In Progress"].includes(po.status));
  const mode = root.querySelector("#simulation-mode");
  const options = root.querySelector("#simulation-options");
  function enforceMode(event) {
    if (mode.value !== "single" || !event.target.checked) return;
    options.querySelectorAll("input").forEach((input) => { if (input !== event.target) input.checked = false; });
  }
  options.addEventListener("change", enforceMode);
  root.querySelector("#simulation-search").addEventListener("input", (event) => {
    const term = event.target.value.toLowerCase();
    const filtered = eligible.filter((po) => `${po.id} ${po.project} ${po.fgpn_lines.map((line) => line.fgpn).join(" ")}`.toLowerCase().includes(term));
    options.innerHTML = optionRows(filtered);
  });
  root.querySelector("#run-simulation").addEventListener("click", () => {
    const selected = [...options.querySelectorAll("input:checked")].map((input) => input.value);
    const target = root.querySelector("#simulation-results");
    const results = simulatePurchaseOrders(
      eligible.filter((po) => selected.includes(po.id)),
      operations.materials,
      operations.bom_components,
      operations.launches,
      root.querySelector("#reserved-stock").checked,
    );
    target.hidden = false;
    target.innerHTML = `<div class="panel-head"><div><h2>Simulation result</h2><p>Usable supply uses warehouse stock plus WIP${root.querySelector("#reserved-stock").checked ? ", minus frozen reservations" : ""}.</p></div></div>
      ${results.length ? `<div class="table-wrap"><table><thead><tr><th>PO</th><th>Project</th><th>Open quantity</th><th>Result</th><th>Missing materials</th></tr></thead><tbody>${results.map((result) => `<tr><td class="mono">${escapeHtml(result.po.id)}</td><td>${escapeHtml(result.po.project)}</td><td>${formatNumber(result.quantity)}</td><td>${badge(result.result)}</td><td>${result.shortages.length ? result.shortages.map((item) => `${escapeHtml(item.code)}: ${formatNumber(item.required - item.available)}`).join(", ") : "None"}</td></tr>`).join("")}</tbody></table></div>` : `<p class="inline-error">Select at least one purchase order.</p>`}`;
  });
}

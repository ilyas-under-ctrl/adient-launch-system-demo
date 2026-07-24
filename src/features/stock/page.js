import { escapeHtml, formatNumber } from "../../components/html.js";
import { badge, pageHeader } from "../../components/ui.js";

function stockRows(materials, query = "") {
  const term = query.toLowerCase();
  return materials.filter((item) => `${item.code} ${item.desc} ${item.supplier}`.toLowerCase().includes(term)).map((item) => {
    const usable = item.warehouse + item.wip;
    return `<tr><td class="mono">${escapeHtml(item.code)}</td><td><strong>${escapeHtml(item.desc)}</strong><small>${escapeHtml(item.type)} · ${escapeHtml(item.supplier)}</small></td>
      <td>${formatNumber(item.warehouse)} ${escapeHtml(item.unit)}</td><td>${formatNumber(item.wip)}</td><td>${formatNumber(item.transit)}</td><td><strong>${formatNumber(usable)}</strong></td><td>${badge(usable > 500 ? "Available" : "Low stock")}</td></tr>`;
  }).join("");
}

export function render({ store }) {
  const materials = store.get().operations.materials;
  return `${pageHeader("Stock", "Warehouse, usable work in progress, and inbound quantities in one view.")}
    <section class="panel">
      <div class="toolbar"><label class="search-field"><span class="sr-only">Search stock</span><input id="stock-search" type="search" placeholder="Search material, description, supplier..."></label></div>
      <div class="table-wrap"><table><thead><tr><th>Material</th><th>Description</th><th>Warehouse</th><th>Usable WIP</th><th>In transit</th><th>Usable now</th><th>Status</th></tr></thead><tbody id="stock-rows">${stockRows(materials)}</tbody></table></div>
    </section>`;
}

export function mount(root, { store }) {
  root.querySelector("#stock-search").addEventListener("input", (event) => {
    root.querySelector("#stock-rows").innerHTML = stockRows(store.get().operations.materials, event.target.value);
  });
}

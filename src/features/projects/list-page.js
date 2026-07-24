import { escapeHtml, formatNumber } from "../../components/html.js";
import { emptyState, pageHeader } from "../../components/ui.js";

function rows(operations, query = "") {
  const term = query.toLowerCase();
  return operations.projects.filter((project) => project.name.toLowerCase().includes(term)).map((project) => {
    const pos = operations.purchase_orders.filter((po) => po.project === project.name);
    const partNumbers = pos.flatMap((po) => po.fgpn_lines);
    return `<tr>
      <td><a class="primary-link" href="#/projects/${encodeURIComponent(project.name)}">${escapeHtml(project.name)}</a></td>
      <td>${pos.length}</td><td>${partNumbers.length}</td>
      <td>${formatNumber(partNumbers.reduce((sum, line) => sum + line.launched, 0))}</td>
      <td><a class="icon-button" title="Open project" aria-label="Open ${escapeHtml(project.name)}" href="#/projects/${encodeURIComponent(project.name)}">&#128065;</a></td>
    </tr>`;
  }).join("");
}

export function render({ store }) {
  const { operations } = store.get();
  return `${pageHeader("Projects", "Choose a project to enter its dedicated workspace.")}
    <section class="panel">
      <div class="toolbar"><label class="search-field"><span class="sr-only">Search projects</span><input id="project-search" type="search" placeholder="Search project name..."></label></div>
      <div class="table-wrap"><table><thead><tr><th>Project</th><th>POs</th><th>Part numbers</th><th>Launched units</th><th>Open</th></tr></thead><tbody id="project-rows">${rows(operations)}</tbody></table></div>
      <div id="project-empty" hidden>${emptyState("No matching project", "Try a different project name.")}</div>
    </section>`;
}

export function mount(root, { store }) {
  const input = root.querySelector("#project-search");
  input.addEventListener("input", () => {
    const markup = rows(store.get().operations, input.value);
    root.querySelector("#project-rows").innerHTML = markup;
    root.querySelector("#project-empty").hidden = Boolean(markup);
  });
}

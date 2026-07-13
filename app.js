const appState = {
  activeProject: "P-2406-ATL",
  activePO: "PO24073101",
  meetingMinutesUploaded: true,
  statusFilter: "All",
  simulationMode: "single",
};

const projects = [
  {
    id: "P-2406-ATL",
    name: "Atlas Front Seat Launch",
    mark: "Atlas",
    customer: "Covers",
    engineer: "Ilyas Benchassi",
    pos: 3,
    status: "Active",
    health: "Needs attention",
    assigned: true,
    phase: "Prototype build",
    sopDate: "2026-09-15",
    program: "Atlas Seat Program",
    plantLine: "Kenitra Line 2",
  },
  {
    id: "P-2407-ATL",
    name: "Atlas Rear Bench Launch",
    mark: "Atlas",
    customer: "Covers",
    engineer: "Ilyas Benchassi",
    pos: 2,
    status: "Active",
    health: "On track",
    assigned: true,
    phase: "Pilot build",
    sopDate: "2026-10-01",
    program: "Atlas Seat Program",
    plantLine: "Kenitra Line 3",
  },
  {
    id: "P-2408-MAR",
    name: "Marina Trim Refresh",
    mark: "Marina",
    customer: "JIT North",
    engineer: "Ilyas Benchassi",
    pos: 1,
    status: "Active",
    health: "On track",
    assigned: true,
    phase: "Trim refresh",
    sopDate: "2026-08-20",
    program: "Marina Refresh",
    plantLine: "Kenitra Line 1",
  },
];

const purchaseOrders = [
  {
    po: "PO24073101",
    project: "P-2406-ATL",
    fgpn: "742118-33A0-000",
    item: "Front cushion cover",
    status: "In Progress",
    quantity: 300,
    delivered: 100,
    remaining: 200,
    unitPrice: 15.5,
    deliveryWeek: "2026-W30",
    validation: "Mismatch",
    phase: "Current",
  },
  {
    po: "PO24073102",
    project: "P-2406-ATL",
    fgpn: "742118-34B0-000",
    item: "Back rest cover",
    status: "Unplanned",
    quantity: 180,
    delivered: 0,
    remaining: 180,
    unitPrice: 18,
    deliveryWeek: "2026-W31",
    validation: "Missing field",
    phase: "Pending",
  },
  {
    po: "PO24073103",
    project: "P-2407-ATL",
    fgpn: "742119-20C0-000",
    item: "Rear bench trim",
    status: "Packaged",
    quantity: 120,
    delivered: 80,
    remaining: 40,
    unitPrice: 22.75,
    deliveryWeek: "2026-W29",
    validation: "Validated",
    phase: "Current",
  },
  {
    po: "PO24062890",
    project: "P-2406-ATL",
    fgpn: "742118-30A0-000",
    item: "Atlas pilot build cover",
    status: "Delivered",
    quantity: 90,
    delivered: 90,
    remaining: 0,
    unitPrice: 14.75,
    deliveryWeek: "2026-W25",
    validation: "Validated",
    phase: "Previous",
  },
];

const stock = [
  {
    part: "ALU-031",
    description: "Aluminium rail left",
    type: "Component",
    project: "P-2406-ATL",
    practical: 48,
    theoretical: 90,
    reserved: 36,
    transit: 42,
    threshold: 50,
    wip: 12,
    supplier: "Maghreb Metals",
    lastMovement: "CutMan import, -12 today",
    coverageDays: 2,
  },
  {
    part: "FAB-771",
    description: "Black woven textile",
    type: "Roll",
    project: "P-2406-ATL",
    practical: 620,
    theoretical: 710,
    reserved: 260,
    transit: 90,
    threshold: 180,
    wip: 95,
    supplier: "Textile Nord",
    lastMovement: "Reception correction, +20 yesterday",
    coverageDays: 14,
  },
  {
    part: "THR-118",
    description: "Contrast stitching thread",
    type: "Thread",
    project: "P-2407-ATL",
    practical: 132,
    theoretical: 132,
    reserved: 44,
    transit: 0,
    threshold: 90,
    wip: 20,
    supplier: "ThreadWorks",
    lastMovement: "Transit update, +40 Jul 05",
    coverageDays: 8,
  },
];

const validationRows = [
  ["JIT Customer", "Covers", "Covers", "Validated"],
  ["Contact Information", "Nadia Amrani", "Nadia Amrani", "Validated"],
  ["Document Date", "2026-07-07", "Required date", "Validated"],
  ["Delivery Date", "", "Required", "Missing"],
  ["Item", "Front cushion cover", "Always required", "Validated"],
  ["Purchase Order Number", "PO24073102", "PO24073102", "Validated"],
  ["FGPN", "742118-34B0-000", "Expected list: 742118-33A0-000", "Mismatch"],
  ["Development Level", "DV2", "Project reference", "Validated"],
  ["Unit Price", "18.8000", "18.0000", "Mismatch"],
  ["Reason of Purchase Order", "Launch build", "Always required", "Validated"],
  ["Car Model", "Atlas", "Where present", "Validated"],
  ["Engineering Phase", "Prototype", "Where present", "Validated"],
  ["Color Code", "A112", "4 characters", "Validated"],
  ["Description", "Black woven front cover", "Max 50 characters", "Validated"],
  ["Trim Code", "TR-44", "Where present", "Validated"],
  ["Purchase Order Level", "L2", "Max 6 characters", "Validated"],
  ["Pick-Up Date", "2026-07-20", "Where present", "Validated"],
  ["Pick-Up Week", "2026-W31", "Derived from date", "N-A"],
];

const compareRows = [
  ["Quantity", "250", "300", "Changed"],
  ["Unit Price", "15.5000", "15.5000", "Unchanged"],
  ["Delivery Date", "2026-07-23", "2026-07-27", "Changed"],
  ["Color Code", "", "A112", "Added"],
  ["Pick-Up Date", "2026-07-20", "", "Removed"],
];

const storyMap = [
  ["US-01.1", "Create project before PO submission", "Projects", "/projects"],
  ["US-01.2", "Update or delete assigned project", "Projects", "/projects"],
  ["US-01.3", "Monitor assigned projects", "Dashboard", "/dashboard"],
  ["M01.6", "Work from a selected project workspace", "Project Workspace", "/project-workspace"],
  ["US-02.1", "Upload PDF and extract PO", "PO Upload", "/po-upload"],
  ["US-02.2", "Review, correct, confirm extracted fields", "PO Review", "/po-review"],
  ["M02.10", "Work from one PO detail surface", "PO Detail", "/po-detail"],
  ["US-03.1", "Resubmit corrected PO as new version", "PO History", "/po-history"],
  ["US-03.2", "Compare two PO versions", "PO History", "/po-history"],
  ["US-04.1", "View current PO status", "Status", "/po-status"],
  ["US-04.2", "Move PO through allowed statuses", "Status", "/po-status"],
  ["US-04.3", "Track partial production and delivery", "Status", "/po-status"],
  ["M05", "Run launch simulations and upload meeting minutes", "Simulation", "/simulation"],
  ["M06", "Upload BOM Excel and retain versions", "BOM", "/bom"],
  ["M07", "Monitor stock, thresholds, CutMan, transit", "Stock", "/stock"],
  ["M08", "Create warehouse delivery instruction", "Warehouse Delivery", "/warehouse-delivery"],
  ["M09", "Customer delivery instruction and confirmation", "Customer Delivery", "/customer-delivery"],
  ["M10", "Finance recovery and sales forecast", "Finance", "/finance"],
  ["M11", "Dashboard and exception monitoring", "Dashboard", "/dashboard"],
  ["M12", "Generate project audit and traceability", "Audit", "/audit"],
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const money = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

function route() {
  return location.hash.replace("#", "") || "/dashboard";
}

function setRoute(path) {
  location.hash = path;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function titleBlock(title, subtitle, actions = "") {
  return `
    <section class="route-head">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="actions">${actions}</div>
    </section>
  `;
}

function contextBanner(step = "Project workspace") {
  const project = activeProject();
  return `
    <section class="context-banner">
      <div><span>Project</span><strong>${project.mark} - ${project.name}</strong></div>
      <div><span>Customer</span><strong>${project.customer}</strong></div>
      <div><span>Active PO</span><strong>${activePO().po}</strong></div>
      <div><span>Launch operation</span><strong>LO-2026-071</strong></div>
      <div><span>Step</span><strong>${step}</strong></div>
      <div class="row-actions">
        <button data-go="/project-workspace">Workspace</button>
        <button data-go="/audit">Audit trail</button>
      </div>
    </section>
  `;
}

function statusClass(value) {
  if (/missing|expired|locked|not launched|overdue|mismatch/i.test(value)) return "danger";
  if (/partial|pending|attention|threshold|unplanned/i.test(value)) return "warn";
  if (/validated|active|confirmed|delivered|on track|full|ok/i.test(value)) return "ok";
  if (/in progress|packaged|changed|added/i.test(value)) return "info";
  return "neutral";
}

function badge(value) {
  return `<span class="status ${statusClass(value)}">${value}</span>`;
}

function projectOptions() {
  return projects
    .map((project) => `<option value="${project.id}" ${project.id === appState.activeProject ? "selected" : ""}>${project.mark} - ${project.name}</option>`)
    .join("");
}

function poOptions() {
  return purchaseOrders.map((po) => `<option value="${po.po}" ${po.po === appState.activePO ? "selected" : ""}>${po.po} - ${po.fgpn}</option>`).join("");
}

function projectName(projectId) {
  const project = projects.find((item) => item.id === projectId);
  return project ? `${project.mark} - ${project.name}` : projectId;
}

function activeProject() {
  return projects.find((project) => project.id === appState.activeProject) || projects[0];
}

function ordersForProject(projectId = appState.activeProject) {
  return purchaseOrders.filter((po) => po.project === projectId);
}

function activePO() {
  return purchaseOrders.find((po) => po.po === appState.activePO) || purchaseOrders[0];
}

function markGroups() {
  return projects.reduce((groups, project) => {
    if (!groups[project.mark]) groups[project.mark] = [];
    groups[project.mark].push(project);
    return groups;
  }, {});
}

function globalSummary() {
  const openOrders = purchaseOrders.filter((po) => po.remaining > 0);
  return {
    openOrders,
    totalOpenValue: openOrders.reduce((sum, po) => sum + po.remaining * po.unitPrice, 0),
    forecastQty: openOrders.reduce((sum, po) => sum + po.remaining, 0),
  };
}

function projectSidebar(active = "overview") {
  const items = [
    ["overview", "Overview", "/project-workspace"],
    ["pos", "Project POs", "/po-records"],
    ["po-detail", "Active PO", "/po-detail"],
    ["bom", "BOM", "/bom"],
    ["stock", "Stock", "/stock"],
    ["simulation", "Simulation", "/simulation"],
    ["warehouse", "Warehouse", "/warehouse-delivery"],
    ["delivery", "Customer Delivery", "/customer-delivery"],
    ["finance", "Finance", "/finance"],
    ["audit", "Audit", "/audit"],
  ];
  return `
    <aside class="project-side-nav" aria-label="Project-specific navigation">
      <div>
        <span class="eyebrow">Project Workspace</span>
        <strong>${projectName(appState.activeProject)}</strong>
      </div>
      ${items
        .map(([key, label, path]) => `<button class="${active === key ? "active" : ""}" data-go="${path}">${label}</button>`)
        .join("")}
    </aside>
  `;
}

function projectShell(active, content) {
  return `<section class="project-shell">${projectSidebar(active)}<div class="project-shell-main">${content}</div></section>`;
}

function renderTable(headers, rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
        <tbody>${rows.join("")}</tbody>
      </table>
    </div>
  `;
}

function dashboard() {
  const summary = globalSummary();
  const filteredOrders =
    appState.statusFilter === "All"
      ? purchaseOrders
      : purchaseOrders.filter((po) => po.status === appState.statusFilter);
  return `
    ${titleBlock(
      "Launch Engineer Workspace",
      "Global view across assigned projects, cross-project simulations, finance exposure, and project cards.",
      `<button class="primary" data-go="/project-workspace">Enter selected project</button>
       <button data-go="/simulation">Global simulation</button>`
    )}
    <section class="quick-filters">
      <button class="active">Needs my action</button>
      <button>Due this week</button>
      <button>Blocked</button>
      <button>Ready to launch</button>
      <button>Missing evidence</button>
    </section>
    <section class="alert-stack">
      <div class="alert danger">
        <div>
          <strong>Atlas Front Seat Launch needs stock decision</strong>
          <small>ALU-031 practical stock is below threshold. Re-run simulation before warehouse handoff.</small>
        </div>
        <button data-go="/project-workspace">Open workspace</button>
      </div>
      <div class="alert">
        <div>
          <strong>PO24073102 has missing extraction fields</strong>
          <small>Delivery date is required before confirmation.</small>
        </div>
        <button data-project-id="P-2406-ATL" data-po-id="PO24073102" data-go="/po-detail">Open PO</button>
      </div>
      <div class="alert">
        <div>
          <strong>Delivery CD-4409 awaits confirmation</strong>
          <small>Partial customer delivery recorded without received evidence.</small>
        </div>
        <button data-go="/customer-delivery">Confirm</button>
      </div>
    </section>
    <section class="grid four">
      <div class="metric"><span>Assigned projects</span><strong>3</strong><small>Grouped by mark and customer program.</small><button data-go="/projects">Projects</button></div>
      <div class="metric"><span>Open PO value</span><strong>${money(summary.totalOpenValue)}</strong><small>Across all assigned projects.</small><button data-go="/global-finance">Finance</button></div>
      <div class="metric"><span>Global launch qty</span><strong>${summary.forecastQty}</strong><small>Remaining quantity across open POs.</small><button data-go="/simulation">Simulate</button></div>
      <div class="metric"><span>Missing evidence</span><strong>3</strong><small>Reception, POD, invoice.</small><button data-go="/audit">Evidence</button></div>
    </section>
    <section class="global-project-grid" style="margin-top:16px">
      ${projects
        .map((project) => {
          const projectOrders = ordersForProject(project.id);
          const remaining = projectOrders.reduce((sum, po) => sum + po.remaining, 0);
          return `
            <article class="project-card">
              <div class="project-card-head">
                <div>
                  <span>${project.mark}</span>
                  <h2>${project.name}</h2>
                </div>
                ${badge(project.health)}
              </div>
              <p>${project.program} / ${project.plantLine}</p>
              <dl>
                <div><dt>Open POs</dt><dd>${projectOrders.length}</dd></div>
                <div><dt>Remaining qty</dt><dd>${remaining}</dd></div>
                <div><dt>SOP</dt><dd>${project.sopDate}</dd></div>
              </dl>
              <div class="row-actions">
                <button class="primary" data-project-id="${project.id}" data-go="/project-workspace">Open workspace</button>
                <button data-project-id="${project.id}" data-go="/simulation">Simulate</button>
              </div>
            </article>`;
        })
        .join("")}
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Launch Readiness by Project</h2>
          <button data-go="/projects">All projects</button>
        </div>
        ${renderTable(
          ["Project", "POs", "BOM", "Stock", "Evidence", "Next"],
          projects.map(
            (project) => `
              <tr>
                <td><strong>${project.mark}</strong><br><small>${project.name}</small></td>
                <td>${project.pos}</td>
                <td>${badge(project.id === "P-2406-ATL" ? "Active V2" : "Ready")}</td>
                <td>${badge(project.health === "Needs attention" ? "Shortage" : "OK")}</td>
                <td>${badge(project.health === "Needs attention" ? "Missing" : "OK")}</td>
                <td><button data-project-id="${project.id}" data-go="/project-workspace">Open workspace</button></td>
              </tr>`
          )
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Global Simulation Candidates</h2>
          <select data-status-filter aria-label="Status filter">
            ${["All", "Unplanned", "In Progress", "Done", "Packaged", "Delivered"]
              .map((status) => `<option ${status === appState.statusFilter ? "selected" : ""}>${status}</option>`)
              .join("")}
          </select>
        </div>
        ${renderTable(
          ["PO", "Project", "Remaining", "Stock risk", "Open"],
          filteredOrders.map(
            (po) => `
              <tr>
                <td><strong>${po.po}</strong><br><small>${po.fgpn}</small></td>
                <td>${projectName(po.project)}</td>
                <td>${po.remaining}</td>
                <td>${badge(po.validation === "Validated" ? "OK" : po.validation)}</td>
                <td><button data-project-id="${po.project}" data-po-id="${po.po}" data-go="/simulation">Add to simulation</button></td>
              </tr>`
          )
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Critical Materials</h2>
          <button data-go="/stock">Open stock</button>
        </div>
        ${renderTable(
          ["Material", "Practical", "Theoretical", "Threshold"],
          stock.map(
            (row) => `
              <tr>
                <td><strong>${row.part}</strong><br><small>${row.description}</small></td>
                <td>${row.practical}</td>
                <td>${row.theoretical}</td>
                <td>${row.practical <= row.threshold ? badge("Below threshold") : badge("OK")}</td>
              </tr>`
          )
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Global Finance Snapshot</h2>
          <button data-go="/global-finance">Open finance</button>
        </div>
        ${renderTable(
          ["Scope", "Forecast", "Actual", "Variance"],
          [
            `<tr><td>All assigned projects</td><td>${money(7750)}</td><td>${money(5425)}</td><td>${badge("-150 units")}</td></tr>`,
            `<tr><td>Atlas mark</td><td>${money(6120)}</td><td>${money(4185)}</td><td>${badge("Invoice pending")}</td></tr>`,
            `<tr><td>Marina mark</td><td>${money(1630)}</td><td>${money(1240)}</td><td>${badge("POD pending")}</td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function coverage() {
  return `
    ${titleBlock(
      "Launch Engineer Story Map",
      "Route-level coverage for the Launch Engineer stories and SRS modules in this demo.",
      `<button class="primary" data-go="/dashboard">Open dashboard</button>`
    )}
    <section class="coverage">
      ${storyMap
        .map(
          ([id, story, routeName, path]) => `
            <div class="coverage-row">
              <strong>${id}</strong>
              <span>${story}</span>
              <span class="muted">${routeName}</span>
              <button data-go="${path}">Open</button>
            </div>`
        )
        .join("")}
    </section>
  `;
}

function projectsView() {
  const grouped = markGroups();
  return `
    ${titleBlock(
      "Projects by Mark",
      "Choose the mark first, then open the project workspace. This matches how launch engineers normally think about programs.",
      `<button class="primary" data-go="/projects-new">New project</button>
       <button data-go="/project-workspace">Current workspace</button>
       <button data-action="export-projects">Export list</button>`
    )}
    <section class="form-block">
      <div class="form-grid three">
        <label class="field"><span>Search project</span><input value="Atlas" placeholder="Mark, project, customer, line"></label>
        <label class="field"><span>Mark</span><select><option>All marks</option><option>Atlas</option><option>Marina</option></select></label>
        <label class="field"><span>Project state</span><select><option>Needs my action</option><option>All active</option><option>On track</option><option>Blocked</option></select></label>
      </div>
    </section>
    <section class="project-groups" style="margin-top:16px">
      ${Object.entries(grouped)
        .map(
          ([mark, markProjects]) => `
            <div class="project-group">
              <div class="project-group-head">
                <div>
                  <h2>${mark}</h2>
                  <p>${markProjects.length} assigned project${markProjects.length > 1 ? "s" : ""}</p>
                </div>
                <button data-project-id="${markProjects[0].id}" data-go="/project-workspace">Open mark workspace</button>
              </div>
              ${renderTable(
                ["Project", "Program / Line", "Phase", "POs", "Readiness", "Next action"],
                markProjects.map(
                  (project) => `
                    <tr>
                      <td><strong>${project.name}</strong><br><small>${project.id} / ${project.customer}</small></td>
                      <td>${project.program}<br><small>${project.plantLine}</small></td>
                      <td>${project.phase}<br><small>SOP ${project.sopDate}</small></td>
                      <td>${project.pos}</td>
                      <td>${badge(project.health)}</td>
                      <td>
                        <div class="row-actions">
                          <button class="primary" data-project-id="${project.id}" data-go="/project-workspace">Open workspace</button>
                          <button data-project-id="${project.id}" data-go="/po-records">POs</button>
                          <button data-project-id="${project.id}" data-go="/simulation">Simulate</button>
                        </div>
                      </td>
                    </tr>`
                )
              )}
            </div>`
        )
        .join("")}
    </section>
    <section class="grid sidebar-main" style="margin-top:16px">
      <div class="form-block">
        <h2>New Project Shell</h2>
        <div class="form-grid">
          <label class="field"><span>Project name</span><input value="Atlas Front Seat Launch"></label>
          <label class="field"><span>Mark</span><input value="Atlas"></label>
          <label class="field"><span>Customer</span><select><option>Covers</option><option>JIT North</option></select></label>
          <label class="field"><span>Launch phase</span><input value="Prototype build"></label>
          <label class="field"><span>SOP date</span><input type="date" value="2026-09-15"></label>
          <label class="field"><span>Plant / line</span><input value="Kenitra Line 2"></label>
          <label class="field"><span>Assigned engineer</span><input value="Ilyas Benchassi"></label>
          <label class="field"><span>Status</span><select><option>Active</option><option>On hold</option></select></label>
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="save-project">Save project</button>
          <button data-action="reset-form">Clear</button>
        </div>
      </div>
      <div class="panel">
        <h2>Project Rules</h2>
        ${renderTable(
          ["Rule", "Demo behavior"],
          [
            `<tr><td>Same mark, multiple projects</td><td>Atlas has front seat and rear bench launch projects.</td></tr>`,
            `<tr><td>Assigned-only visibility</td><td>Only projects assigned to Ilyas appear here.</td></tr>`,
            `<tr><td>Delete protection</td><td>Deletion is blocked when linked POs exist.</td></tr>`,
            `<tr><td>Normal path</td><td>Open workspace, then work through POs, stock, launch, delivery, finance, audit.</td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function projectWorkspace() {
  const project = activeProject();
  const projectOrders = ordersForProject(project.id);
  return `
    ${titleBlock(
      "Project Workspace",
      "Work inside one project. POs, stock, launch decisions, deliveries, finance, and audit evidence stay in the same context.",
      `<button data-go="/projects">Projects</button>
       <button class="primary" data-go="/po-upload">Upload PO</button>`
    )}
    ${contextBanner("Project workspace")}
    <section class="project-shell">
      ${projectSidebar("overview")}
      <div class="project-shell-main">
    <section class="workspace-tabs">
      <button class="active">Overview</button>
      <button data-go="/po-records">POs</button>
      <button data-go="/bom">BOM</button>
      <button data-go="/stock">Stock</button>
      <button data-go="/simulation">Simulation</button>
      <button data-go="/warehouse-delivery">Warehouse</button>
      <button data-go="/customer-delivery">Delivery</button>
      <button data-go="/finance">Finance</button>
      <button data-go="/audit">Audit</button>
    </section>
    <section class="grid four" style="margin-top:16px">
      <div class="metric"><span>Open POs</span><strong>${projectOrders.length}</strong><small>Current, pending, and previous records.</small><button data-go="/po-records">Open POs</button></div>
      <div class="metric"><span>BOM status</span><strong>V2</strong><small>Active, 284 rows loaded.</small><button data-go="/bom">Open BOM</button></div>
      <div class="metric"><span>Stock readiness</span><strong>Partial</strong><small>ALU-031 shortage blocks full launch.</small><button data-go="/stock">Open stock</button></div>
      <div class="metric"><span>Audit evidence</span><strong>12/16</strong><small>Four documents still pending.</small><button data-go="/audit">Open audit</button></div>
    </section>
    <section class="grid sidebar-main" style="margin-top:16px">
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">${project.mark} / ${project.name}</h2>
          <button data-go="/projects">Change project</button>
        </div>
        ${renderTable(
          ["Project fact", "Value"],
          [
            `<tr><td>Customer program</td><td>${project.program}</td></tr>`,
            `<tr><td>Plant / line</td><td>${project.plantLine}</td></tr>`,
            `<tr><td>Launch phase</td><td>${project.phase}</td></tr>`,
            `<tr><td>SOP date</td><td>${project.sopDate}</td></tr>`,
            `<tr><td>Responsible engineer</td><td>${project.engineer}</td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Project Flow</h2>
          <button data-go="/coverage">Story map</button>
        </div>
        <div class="workflow-strip">
          <div class="workflow-step active"><span>1</span><strong>PO</strong><small>Uploaded and reviewed</small></div>
          <div class="workflow-step active"><span>2</span><strong>Sim</strong><small>Partial launch</small></div>
          <div class="workflow-step"><span>3</span><strong>Warehouse</strong><small>Reception pending</small></div>
          <div class="workflow-step"><span>4</span><strong>Finance</strong><small>Invoice pending</small></div>
        </div>
      </div>
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Project POs</h2>
          <button data-go="/po-records">All POs</button>
        </div>
        ${renderTable(
          ["PO", "Phase", "Status", "Remaining", "Next"],
          projectOrders.map(
            (po) => `
              <tr>
                <td><strong>${po.po}</strong><br><small>${po.fgpn}</small></td>
                <td>${badge(po.phase)}</td>
                <td>${badge(po.status)}</td>
                <td>${po.remaining} / ${po.quantity}</td>
                <td><button data-project-id="${po.project}" data-po-id="${po.po}" data-go="/po-detail">Open PO</button></td>
              </tr>`
          )
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Next Actions</h2>
          <button data-go="/audit">Evidence</button>
        </div>
        ${renderTable(
          ["Area", "Status", "Next action"],
          [
            `<tr><td>Purchase Orders</td><td>${badge("Needs review")}</td><td><button data-go="/po-review">Review extraction</button></td></tr>`,
            `<tr><td>Launch Simulation</td><td>${badge("Partial launch")}</td><td><button data-go="/simulation">Open simulation</button></td></tr>`,
            `<tr><td>Warehouse Delivery</td><td>${badge("Code generated")}</td><td><button data-go="/warehouse-delivery">Validate reception</button></td></tr>`,
            `<tr><td>Customer Delivery</td><td>${badge("Pending proof")}</td><td><button data-go="/customer-delivery">Upload POD</button></td></tr>`,
            `<tr><td>Finance</td><td>${badge("Invoice pending")}</td><td><button data-go="/finance">Close recovery</button></td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Evidence Checklist</h2>
        ${renderTable(
          ["Evidence", "Required for", "Status"],
          [
            `<tr><td>Original PO PDF</td><td>PO audit</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Meeting minutes</td><td>Launch operation</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Simulation paper</td><td>Warehouse request</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Signed warehouse reception</td><td>Stock update</td><td>${badge("Pending")}</td></tr>`,
            `<tr><td>Customer proof of delivery</td><td>Delivered status</td><td>${badge("Pending")}</td></tr>`,
            `<tr><td>Invoice PDF</td><td>Finance recovery</td><td>${badge("Pending")}</td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Workspace Rule</h2>
        <p class="muted">The engineer should work here first. Supporting module pages open with this project context instead of acting like separate applications.</p>
        <div class="row-actions">
          <button data-go="/po-upload">Upload PO</button>
          <button data-go="/stock">Check stock</button>
          <button data-go="/simulation">Run simulation</button>
          <button data-go="/warehouse-delivery">Warehouse handoff</button>
        </div>
      </div>
    </section>
      </div>
    </section>
  `;
}

function poUpload() {
  return `
    ${titleBlock(
      "PO Upload",
      "Select an existing project, upload a Covers PO PDF, store the original file, and continue to extraction review.",
      `<button data-go="/projects">Projects</button>
       <button class="primary" data-go="/po-review">Continue review</button>`
    )}
    ${contextBanner("PO upload")}
    <section class="grid two">
      <div class="form-block">
        <h2>Upload Purchase Order PDF</h2>
        <div class="form-grid">
          <label class="field"><span>Selected project</span><input value="${projectName(appState.activeProject)}" readonly></label>
          <label class="field"><span>Expected document</span><select><option>Covers Purchase Order</option></select></label>
        </div>
        <div class="dropzone" style="margin-top:14px">
          <div>
            <strong>Drop PDF here</strong>
            <span class="muted">Original file is retained for audit, even if rejected.</span>
          </div>
          <input type="file" accept="application/pdf">
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button data-action="reject-non-pdf">Test non-PDF rejection</button>
          <button data-action="validate-structure">Validate structure</button>
          <button data-action="open-source-pdf">Open original PDF</button>
          <button class="primary" data-go="/po-review">Extract fields</button>
        </div>
      </div>
      <div class="panel">
        <h2>Extraction Queue</h2>
        ${renderTable(
          ["File", "Project", "Result", "Next"],
          [
            `<tr><td>Covers_PO_24073102.pdf</td><td>Atlas</td><td>${badge("Ready")}</td><td><div class="row-actions"><button data-go="/po-review">Review</button><button data-action="open-source-pdf">PDF</button><button data-action="reset-form">Remove</button></div></td></tr>`,
            `<tr><td>scan_customer_note.pdf</td><td>Atlas</td><td>${badge("Invalid structure")}</td><td><div class="row-actions"><button data-action="show-rejection">Reason</button><button data-action="reset-form">Retry</button></div></td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function poReview() {
  return `
    ${titleBlock(
      "PO Extraction Review",
      "Every extracted field is shown before storage, with validation flags and correction controls.",
      `<button data-go="/po-upload">Back to upload</button>
       <button data-go="/po-records">PO records</button>
       <button data-action="open-source-pdf">Open original PDF</button>
       <button class="primary" data-action="confirm-po">Confirm and store</button>`
    )}
    ${contextBanner("PO extraction review")}
    <section class="alert-stack">
      <div class="alert danger">
        <div>
          <strong>Validation gate</strong>
          <small>Cannot confirm until required fields are validated or marked corrected with reason. Missing delivery date blocks confirmation.</small>
        </div>
        <button data-action="validate-structure">Run validation</button>
      </div>
    </section>
    <section class="panel">
      <h2>Header Fields</h2>
      ${renderTable(
        ["Field", "Extracted", "Reference / Expected", "Status", "Correction"],
        validationRows.map(
          ([field, extracted, expected, status]) => `
            <tr>
              <td><strong>${field}</strong></td>
              <td><input value="${escapeHtml(extracted)}" placeholder="Enter required value"></td>
              <td>${expected}</td>
              <td>${badge(status)}</td>
              <td><button data-action="mark-corrected">Mark corrected</button></td>
            </tr>`
        )
      )}
    </section>
    <section class="panel" style="margin-top:16px">
      <div class="toolbar">
        <h2 style="margin-right:auto">Line Items</h2>
        <button data-action="add-line">Add line</button>
        <button data-action="mark-corrected">Accept all validated</button>
        <button data-action="show-rejection">Reject PO</button>
      </div>
      ${renderTable(
        ["Item", "FGPN", "Quantity", "Unit price", "Amount status", "Action"],
        [
          `<tr><td>1</td><td>742118-34B0-000</td><td><input value="180"></td><td><input value="18.8000"></td><td>${badge("Mismatch")}</td><td><button data-action="mark-corrected">Correct</button></td></tr>`,
          `<tr><td>2</td><td>742118-33A0-000</td><td><input value="120"></td><td><input value="15.5000"></td><td>${badge("Validated")}</td><td><button data-action="reset-form">Remove</button></td></tr>`,
          `<tr><td>3</td><td>742119-20C0-000</td><td><input value="60"></td><td><input value="22.7500"></td><td>${badge("Validated")}</td><td><button data-action="reset-form">Remove</button></td></tr>`,
        ]
      )}
    </section>
  `;
}

function poRecords() {
  const selectedProject = appState.activeProject;
  const projectPOs = purchaseOrders.filter((po) => po.project === selectedProject);
  const groupedPOs = ["Current", "Pending", "Previous"].map((phase) => {
    const rows = projectPOs.filter((po) => po.phase === phase);
    return `
      <div class="lane">
        <h3>${phase} <span class="pill">${rows.length}</span></h3>
        ${
          rows.length
            ? rows
                .map(
                  (po) => `
                    <div class="mini-card">
                      <strong>${po.po}</strong>
                      <div class="muted">${po.fgpn}</div>
                      <div class="inline" style="margin-top:8px">${badge(po.status)} <span>${po.remaining}/${po.quantity} remaining</span></div>
                    </div>`
                )
                .join("")
            : `<div class="mini-card"><span class="muted">No ${phase.toLowerCase()} POs for this project.</span></div>`
        }
      </div>`;
  });

  return `
    ${titleBlock(
      "PO Records",
      "Select a project to see all its current, pending, and previous purchase orders in one place.",
      `<button class="primary" data-go="/po-upload">Upload new PO</button>
       <button data-go="/po-history">Open PO history</button>`
    )}
    ${contextBanner("PO records")}
    <section class="alert-stack">
      <div class="alert ok">
        <div>
          <strong>PO24073102 stored as V1</strong>
          <small>Status is Unplanned. Source PDF and corrected fields are retained in PO history.</small>
        </div>
        <div class="row-actions">
          <button data-go="/po-status">Open status</button>
          <button data-go="/simulation">Run simulation</button>
          <button data-go="/po-history">View history</button>
        </div>
      </div>
    </section>
    <section class="form-block">
      <div class="form-grid three">
        <label class="field"><span>Selected project</span><input value="${projectName(appState.activeProject)}" readonly></label>
        <label class="field"><span>PO scope</span><select><option>Current + Pending + Previous</option><option>Current only</option><option>Pending only</option><option>Previous only</option></select></label>
        <label class="field"><span>Search in selected project</span><input value="PO2407"></label>
      </div>
      <p class="muted" style="margin:12px 0 0">Selected project: ${projectName(selectedProject)}. This project view intentionally includes active work, waiting/pending records, and prior delivered POs.</p>
    </section>
    <section class="kanban" style="margin-top:16px">${groupedPOs.join("")}</section>
    <section class="panel">
      <div class="toolbar">
        <h2 style="margin-right:auto">Operational PO List</h2>
        <select><option>All statuses</option><option>Unplanned</option><option>In Progress</option><option>Packaged</option></select>
        <input type="search" placeholder="PO number or FGPN">
      </div>
      ${renderTable(
        ["PO", "Project", "FGPN", "Qty", "Delivered", "Remaining", "Amount", "Actions"],
        purchaseOrders.map(
          (po) => `
            <tr>
              <td><strong>${po.po}</strong><br><small>Source PDF stored</small></td>
              <td>${po.project}</td>
              <td>${po.fgpn}</td>
              <td>${po.quantity}</td>
              <td>${po.delivered}</td>
              <td>${po.remaining}</td>
              <td>${money(po.remaining * po.unitPrice)}</td>
              <td>
                <div class="row-actions">
                  <button data-project-id="${po.project}" data-po-id="${po.po}" data-go="/po-detail">Open</button>
                  <button data-go="/po-status">Status</button>
                  <button data-go="/simulation">Simulate</button>
                  <button data-go="/customer-delivery">Deliver</button>
                  <button data-go="/po-history">History</button>
                </div>
              </td>
            </tr>`
        )
      )}
    </section>
  `;
}

function poDetail() {
  const po = activePO();
  return `
    ${titleBlock(
      "PO Detail",
      "One purchase order with its review, versions, lines, status, delivery, finance, and audit trail.",
      `<button data-go="/project-workspace">Project workspace</button>
       <button data-go="/po-records">All project POs</button>
       <button class="primary" data-go="/po-status">Move status</button>`
    )}
    ${contextBanner("PO detail")}
    <section class="workspace-tabs">
      <button class="active">Summary</button>
      <button data-go="/po-review">Review</button>
      <button data-go="/po-history">Versions</button>
      <button data-go="/po-status">Status</button>
      <button data-go="/simulation">Simulation</button>
      <button data-go="/customer-delivery">Deliveries</button>
      <button data-go="/finance">Finance</button>
      <button data-go="/audit">Audit</button>
    </section>
    <section class="grid four" style="margin-top:16px">
      <div class="metric"><span>PO number</span><strong>${po.po}</strong><small>10 character PO reference.</small><button data-action="open-source-pdf">Source PDF</button></div>
      <div class="metric"><span>Status</span><strong>${po.status}</strong><small>${po.delivered} delivered, ${po.remaining} remaining.</small><button data-go="/po-status">Status</button></div>
      <div class="metric"><span>Version</span><strong>V2</strong><small>V1 retained and immutable.</small><button data-go="/po-history">History</button></div>
      <div class="metric"><span>Amount open</span><strong>${money(po.remaining * po.unitPrice)}</strong><small>Unit price x remaining quantity.</small><button data-go="/finance">Finance</button></div>
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <h2>PO Line Items</h2>
        ${renderTable(
          ["Line", "FGPN", "Item", "Qty", "Delivered", "Remaining", "Validation"],
          [
            `<tr><td>1</td><td>${po.fgpn}</td><td>${po.item}</td><td>${po.quantity}</td><td>${po.delivered}</td><td>${po.remaining}</td><td>${badge(po.validation)}</td></tr>`,
            `<tr><td>2</td><td>742118-34B0-000</td><td>Back rest cover</td><td>180</td><td>0</td><td>180</td><td>${badge("Missing field")}</td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Next Action</h2>
        ${renderTable(
          ["Area", "State", "Action"],
          [
            `<tr><td>Review</td><td>${badge("Mismatch")}</td><td><button data-go="/po-review">Resolve fields</button></td></tr>`,
            `<tr><td>Status</td><td>${badge(po.status)}</td><td><button data-go="/po-status">Move forward</button></td></tr>`,
            `<tr><td>Launch</td><td>${badge("Partial launch")}</td><td><button data-go="/simulation">Run simulation</button></td></tr>`,
            `<tr><td>Delivery</td><td>${badge("Pending proof")}</td><td><button data-go="/customer-delivery">Open delivery</button></td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Version and Correction Trail</h2>
        <ul class="timeline">
          <li><time>Jul 01</time><div><strong>V1 stored</strong><br><span class="muted">Original PDF retained.</span></div></li>
          <li><time>Jul 03</time><div><strong>V2 stored</strong><br><span class="muted">Quantity and delivery date changed.</span></div></li>
          <li><time>Jul 04</time><div><strong>Unit price corrected</strong><br><span class="muted">Original and corrected values retained.</span></div></li>
        </ul>
      </div>
      <div class="panel">
        <h2>Audit Evidence</h2>
        ${renderTable(
          ["Evidence", "Status", "Open"],
          [
            `<tr><td>Source PO PDF</td><td>${badge("Included")}</td><td><button data-action="open-source-pdf">PDF</button></td></tr>`,
            `<tr><td>Simulation paper</td><td>${badge("Ready")}</td><td><button data-go="/simulation-paper">Paper</button></td></tr>`,
            `<tr><td>Customer POD</td><td>${badge("Pending")}</td><td><button data-go="/customer-delivery">Upload</button></td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function poHistory() {
  return `
    ${titleBlock(
      "PO History",
      "Historical PO versions, comparisons, corrections, source PDFs, and status movements live separately from the active PO work list.",
      `<button data-go="/po-records">Back to PO records</button>
       <button data-go="/po-versions">Resubmit corrected PO</button>
       <button class="primary" data-go="/po-compare">Compare versions</button>`
    )}
    ${contextBanner("PO history")}
    <section class="grid two">
      <div class="panel">
        <h2>Version History</h2>
        ${renderTable(
          ["PO", "Version", "Stored", "Summary", "Source"],
          [
            `<tr><td>PO24073101</td><td>V1</td><td>2026-07-01 09:45</td><td>Original customer PDF, qty 250</td><td><button data-action="open-source-pdf">PDF</button></td></tr>`,
            `<tr><td>PO24073101</td><td>V2</td><td>2026-07-03 14:12</td><td>Quantity changed to 300, delivery date moved</td><td><button data-action="open-source-pdf">PDF</button></td></tr>`,
            `<tr><td>PO24062890</td><td>V1</td><td>2026-06-28 10:20</td><td>Previous delivered PO retained</td><td><button data-action="open-source-pdf">PDF</button></td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Correction & Status History</h2>
        <ul class="timeline">
          <li><time>Jul 03</time><div><strong>New PO version stored</strong><br><span class="muted">PO24073101 V2 created; V1 remains read-only.</span></div></li>
          <li><time>Jul 04</time><div><strong>Unit price mismatch corrected</strong><br><span class="muted">Original value and corrected value retained.</span></div></li>
          <li><time>Jul 06</time><div><strong>Status changed</strong><br><span class="muted">Unplanned to In Progress by Ilyas Benchassi.</span></div></li>
          <li><time>Jul 07</time><div><strong>Backward transition attempt</strong><br><span class="muted">Reason required before storing transition.</span></div></li>
        </ul>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Historical PO Lookup</h2>
      ${renderTable(
        ["Project", "PO", "Phase", "Status", "Delivered", "Remaining", "History actions"],
        purchaseOrders.map(
          (po) => `
            <tr>
              <td>${projectName(po.project)}</td>
              <td><strong>${po.po}</strong><br><small>${po.fgpn}</small></td>
              <td>${badge(po.phase)}</td>
              <td>${badge(po.status)}</td>
              <td>${po.delivered}</td>
              <td>${po.remaining}</td>
              <td><div class="row-actions"><button data-go="/po-versions">Versions</button><button data-go="/po-compare">Compare</button></div></td>
            </tr>`
        )
      )}
    </section>
  `;
}

function poVersions() {
  return `
    ${titleBlock(
      "PO Versions",
      "Resubmitted purchase orders create sequential versions without overwriting prior records.",
      `<button data-go="/po-history">PO history</button>
       <button data-go="/po-review">Review extraction</button>
       <button class="primary" data-go="/po-compare">Compare versions</button>`
    )}
    <section class="grid two">
      <div class="form-block">
        <h2>Resubmit Corrected PO</h2>
        <label class="field"><span>Purchase order</span><select>${poOptions()}</select></label>
        <div class="dropzone" style="margin-top:14px">
          <div>
            <strong>Upload corrected PDF</strong>
            <span class="muted">The demo will create V3 and keep V1/V2 read-only.</span>
          </div>
          <input type="file" accept="application/pdf">
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button data-action="version-preview">Preview extraction</button>
          <button class="primary" data-action="create-version">Create V3</button>
        </div>
      </div>
      <div class="panel">
        <h2>Stored Versions</h2>
        ${renderTable(
          ["Version", "Stored", "Quantity", "Delivery date", "Edit"],
          [
            `<tr><td>V1</td><td>2026-07-01 09:45</td><td>250</td><td>2026-07-23</td><td>${badge("Read-only")}</td></tr>`,
            `<tr><td>V2</td><td>2026-07-03 14:12</td><td>300</td><td>2026-07-27</td><td>${badge("Read-only")}</td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function poCompare() {
  return `
    ${titleBlock(
      "Version Compare",
      "Select two versions of the same purchase order and inspect field-level changes.",
      `<button data-go="/po-history">PO history</button>
       <button data-go="/po-versions">Versions</button>
       <button class="primary" data-action="export-compare">Export summary</button>`
    )}
    <section class="form-block">
      <div class="form-grid three">
        <label class="field"><span>Purchase order</span><select>${poOptions()}</select></label>
        <label class="field"><span>Version A</span><select><option>V1</option><option>V2</option></select></label>
        <label class="field"><span>Version B</span><select><option>V2</option><option>V3 draft</option></select></label>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Field Comparison</h2>
      ${renderTable(
        ["Field", "Version A", "Version B", "Indicator"],
        compareRows.map(
          ([field, a, b, indicator]) => `
            <tr><td><strong>${field}</strong></td><td>${a || "<span class='muted'>Blank</span>"}</td><td>${b || "<span class='muted'>Blank</span>"}</td><td>${badge(indicator)}</td></tr>`
        )
      )}
    </section>
  `;
}

function poStatus() {
  return `
    ${titleBlock(
      "PO Status",
      "Move purchase orders through the defined sequence and record partial deliveries with timestamped history.",
      `<button data-go="/po-records">PO records</button>
       <button class="primary" data-action="advance-status">Move to Done</button>`
    )}
    ${contextBanner("PO status")}
    <section class="panel">
      <div class="toolbar">
        <label class="field" style="max-width:360px"><span>Purchase order</span><select>${poOptions()}</select></label>
        <span>${badge("In Progress")}</span>
      </div>
      <div class="steps">
        <div class="step done">Unplanned</div>
        <div class="step current">In Progress</div>
        <div class="step">Done</div>
        <div class="step">Packaged</div>
        <div class="step">Delivered</div>
      </div>
      <div class="row-actions">
        <button class="primary" data-action="advance-status">Allowed next: Done</button>
        <button data-action="skip-status">Try skip to Packaged</button>
        <button data-action="backward-status">Backward with reason</button>
      </div>
      <div class="form-grid" style="margin-top:14px">
        <label class="field"><span>Backward target status</span><select><option>Unplanned</option><option>In Progress</option></select></label>
        <label class="field"><span>Transition reason</span><textarea>Quality issue found during production review.</textarea></label>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Next Required Action</h2>
      ${renderTable(
        ["Current status", "Required action", "Go"],
        [
          `<tr><td>Unplanned</td><td>Start production</td><td><button data-action="advance-status">Start</button></td></tr>`,
          `<tr><td>In Progress</td><td>Move to Done</td><td><button data-action="advance-status">Move</button></td></tr>`,
          `<tr><td>Done</td><td>Create warehouse delivery instruction</td><td><button data-go="/warehouse-delivery">Warehouse</button></td></tr>`,
          `<tr><td>Packaged</td><td>Create customer delivery instruction</td><td><button data-go="/customer-delivery">Customer delivery</button></td></tr>`,
          `<tr><td>Delivered</td><td>Send confirmed delivery to finance</td><td><button data-go="/finance">Finance</button></td></tr>`,
        ]
      )}
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="form-block">
        <h2>Partial Delivery</h2>
        <div class="form-grid">
          <label class="field"><span>Delivered quantity</span><input type="number" value="80"></label>
          <label class="field"><span>Delivery date</span><input type="date" value="2026-07-09"></label>
          <label class="field"><span>Remaining quantity</span><input value="120" readonly></label>
          <label class="field"><span>Amount</span><input value="${money(1860)}" readonly></label>
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="record-partial">Record partial delivery</button>
          <button data-action="final-delivery">Set Delivered when remaining is zero</button>
        </div>
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Status History</h2>
          <button data-action="export-compare">Export history</button>
        </div>
        ${renderTable(
          ["Timestamp", "User", "From", "To", "Reason"],
          [
            `<tr><td>2026-07-01 09:45</td><td>Ilyas</td><td>New</td><td>Unplanned</td><td>PO created</td></tr>`,
            `<tr><td>2026-07-06 14:05</td><td>Ilyas</td><td>Unplanned</td><td>In Progress</td><td>Production started</td></tr>`,
            `<tr><td>2026-07-07 11:12</td><td>Ilyas</td><td>Done</td><td>In Progress</td><td>Quality issue found</td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function simulation() {
  const modes = {
    single: {
      title: "Single PO",
      description: "Check whether one purchase order can launch with current warehouse stock, WIP, and the active BOM.",
      result: "Partial launch",
      primaryAction: "run-single-sim",
      fields: `
        <label class="field"><span>Purchase order</span><select>${poOptions()}</select></label>
        <label class="field"><span>Selected project</span><input value="${projectName(appState.activeProject)}" readonly></label>
        <label class="field"><span>Safety coefficient</span><input type="number" value="2"></label>
        <label class="field"><span>Meeting minutes PDF</span><input type="file" accept="application/pdf"></label>
      `,
    },
    multi: {
      title: "Global Multi-PO",
      description: "Simulate POs from multiple assigned projects competing for shared stock.",
      result: "3 projects, 2 launchable",
      primaryAction: "run-multi-sim",
      fields: `
        <label class="field"><span>Portfolio scope</span><select><option>All assigned projects</option><option>Atlas mark only</option><option>Selected projects</option></select></label>
        <label class="field"><span>PO scope</span><select><option>Current + pending POs across projects</option><option>Selected POs only</option><option>All open POs</option></select></label>
        <label class="field"><span>Priority rule</span><select><option>Earliest delivery date first</option><option>Highest PO value first</option><option>Manual sequence across projects</option></select></label>
        <label class="field"><span>Meeting minutes PDF</span><input type="file" accept="application/pdf"></label>
      `,
    },
    future: {
      title: "Future Stock",
      description: "Add planned incoming material to see a planning result without changing stored stock.",
      result: "Projected full launch",
      primaryAction: "run-future-sim",
      fields: `
        <label class="field"><span>Selected project</span><input value="${projectName(appState.activeProject)}" readonly></label>
        <label class="field"><span>Incoming material</span><input value="ALU-031"></label>
        <label class="field"><span>Expected quantity</span><input type="number" value="120"></label>
        <label class="field"><span>Expected arrival</span><input type="date" value="2026-07-14"></label>
        <label class="field"><span>Additional planned material</span><input value="FAB-771 / 90 / 2026-07-11"></label>
      `,
    },
  };
  const mode = modes[appState.simulationMode] || modes.single;
  const modeKeys = Object.keys(modes);
  const modeIndex = modeKeys.indexOf(appState.simulationMode);

  return `
    ${titleBlock(
      "Launch Simulation",
      "Choose the launch scope, run the check, then extract the simulation paper for the meeting or audit trail.",
      `<button data-go="/bom">BOM</button>
       <button data-go="/stock">Stock</button>
       <button data-go="/warehouse-delivery">Warehouse instruction</button>
       <button class="primary" data-action="extract-simulation-paper">Extract simulation paper</button>`
    )}
    ${contextBanner("Launch simulation")}
    <section class="panel">
      <div class="toolbar">
        <h2 style="margin-right:auto">Portfolio Simulation Scope</h2>
        <button data-simulation-mode-shortcut="multi">Use all assigned projects</button>
      </div>
      ${renderTable(
        ["Project", "Candidate POs", "Remaining qty", "Stock conflict", "Priority"],
        projects.map((project) => {
          const orders = ordersForProject(project.id).filter((po) => po.remaining > 0);
          const remaining = orders.reduce((sum, po) => sum + po.remaining, 0);
          return `<tr><td>${projectName(project.id)}</td><td>${orders.length}</td><td>${remaining}</td><td>${badge(project.health === "Needs attention" ? "ALU-031" : "None")}</td><td>Earliest delivery</td></tr>`;
        })
      )}
    </section>
    <section class="workflow-strip" aria-label="Simulation workflow">
      <div class="workflow-step active"><span>1</span><strong>Scope</strong><small>Select PO mode</small></div>
      <div class="workflow-step active"><span>2</span><strong>Inputs</strong><small>Stock, BOM, meeting</small></div>
      <div class="workflow-step"><span>3</span><strong>Decision</strong><small>Launch result</small></div>
      <div class="workflow-step"><span>4</span><strong>Paper</strong><small>Extract document</small></div>
    </section>
    <section class="form-block mode-switcher">
      <div>
        <label class="field"><span>Simulation type</span>
          <select data-simulation-mode>
            ${Object.entries(modes)
              .map(([key, item]) => `<option value="${key}" ${appState.simulationMode === key ? "selected" : ""}>${item.title}</option>`)
              .join("")}
          </select>
        </label>
      </div>
      <div class="row-actions">
        <button data-sim-nav="prev" ${modeIndex === 0 ? "disabled" : ""}>Previous mode</button>
        <button data-sim-nav="next" ${modeIndex === modeKeys.length - 1 ? "disabled" : ""}>Next mode</button>
      </div>
    </section>
    <section class="grid sidebar-main" style="margin-top:16px">
      <div class="form-block active-simulation">
        <div class="toolbar">
          <div>
            <h2>${mode.title} Simulation</h2>
            <p class="muted" style="margin:0">${mode.description}</p>
          </div>
          ${badge(mode.result)}
        </div>
        <div class="form-grid" style="margin-top:16px">${mode.fields}</div>
        <div class="row-actions action-bar">
          <button class="primary" data-action="${mode.primaryAction}">Run simulation</button>
          <button data-action="export-missing">Export missing list</button>
          <button data-action="extract-simulation-paper">Extract paper</button>
          <button data-action="finalize-launch">Finalize launch</button>
        </div>
      </div>
      <div class="panel input-summary">
        <h2>Inputs Used</h2>
        <ul class="summary-list">
          <li><span>Warehouse stock</span><strong>System stock records</strong></li>
          <li><span>WIP stock</span><strong>CutMan import today</strong></li>
          <li><span>BOM version</span><strong>BOM V2 active</strong></li>
          <li><span>Safety coefficient</span><strong>2</strong></li>
          <li><span>Meeting minutes</span><strong>Uploaded</strong></li>
        </ul>
      </div>
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Launch Decision</h2>
          <button data-action="save-sim">Store result</button>
        </div>
        ${renderTable(
          ["PO", "Decision", "Max launchable", "Open quantity"],
          [
            `<tr><td>PO24073101</td><td>${badge("Partial launch")}</td><td>220</td><td>80</td></tr>`,
            `<tr><td>PO24073102</td><td>${badge("Not launched")}</td><td>0</td><td>180</td></tr>`,
            `<tr><td>PO24073103</td><td>${badge("Full launch")}</td><td>120</td><td>0</td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Missing Material</h2>
          <button data-action="export-missing">Export</button>
        </div>
        ${renderTable(
          ["Material", "Required", "Available", "Shortfall"],
          [
            `<tr><td>ALU-031</td><td>100</td><td>80</td><td>${badge("20")}</td></tr>`,
            `<tr><td>FAB-771</td><td>360</td><td>620</td><td>${badge("0")}</td></tr>`,
          ]
        )}
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <div class="toolbar">
        <h2 style="margin-right:auto">Launch Operation Record</h2>
        <button data-action="finalize-launch">Approve LO-2026-071</button>
      </div>
      ${renderTable(
        ["Artifact", "Value", "Status"],
        [
          `<tr><td>LO number</td><td>LO-2026-071</td><td>${badge("Draft")}</td></tr>`,
          `<tr><td>Simulation paper</td><td>SIM-2026-071</td><td>${badge("Ready")}</td></tr>`,
          `<tr><td>Meeting minutes</td><td>minutes_atlas_2026-07-07.pdf</td><td>${badge("Uploaded")}</td></tr>`,
          `<tr><td>BOM version</td><td>BOM V2</td><td>${badge("Included")}</td></tr>`,
          `<tr><td>Stock snapshot</td><td>2026-07-07 10:20</td><td>${badge("Included")}</td></tr>`,
        ]
      )}
    </section>
    <section class="panel" style="margin-top:16px">
      <div class="toolbar">
        <h2 style="margin-right:auto">Simulation Paper Preview</h2>
        <button data-action="extract-simulation-paper">Download paper</button>
        <button data-action="save-sim">Store in audit trail</button>
      </div>
      ${renderTable(
        ["Section", "Included content", "Status"],
        [
          `<tr><td>Project and PO scope</td><td>Selected project, selected POs, mark, engineer, run timestamp</td><td>${badge("Ready")}</td></tr>`,
          `<tr><td>Input basis</td><td>Warehouse stock, WIP from CutMan, BOM version, safety coefficient, meeting minutes</td><td>${badge("Ready")}</td></tr>`,
          `<tr><td>Launch decision</td><td>Full, partial, or not launched with max launchable and remaining open quantity</td><td>${badge("Ready")}</td></tr>`,
          `<tr><td>Missing materials</td><td>Material part number, required quantity, available quantity, shortfall</td><td>${badge("Ready")}</td></tr>`,
          `<tr><td>Future-stock disclaimer</td><td>Labelled based on real and planned stock, not confirmed when future mode is used</td><td>${badge("Ready")}</td></tr>`,
        ]
      )}
    </section>
  `;
}

function simulationPaper() {
  return `
    ${titleBlock(
      "Simulation Paper",
      "Generated launch simulation document with inputs, decision, missing material, and audit references.",
      `<button data-go="/simulation">Back to simulation</button>
       <button class="primary" data-action="save-sim">Store in audit trail</button>`
    )}
    ${contextBanner("Simulation paper")}
    <section class="grid sidebar-main">
      <div class="panel">
        <h2>Document Summary</h2>
        ${renderTable(
          ["Field", "Value"],
          [
            `<tr><td>Paper reference</td><td><strong>SIM-2026-071</strong></td></tr>`,
            `<tr><td>Project</td><td>${projectName("P-2406-ATL")}</td></tr>`,
            `<tr><td>Mode</td><td>${badge(modesLabel(appState.simulationMode))}</td></tr>`,
            `<tr><td>Engineer</td><td>Ilyas Benchassi</td></tr>`,
            `<tr><td>Run timestamp</td><td>2026-07-07 10:20</td></tr>`,
            `<tr><td>Meeting minutes</td><td>minutes_atlas_2026-07-07.pdf</td></tr>`,
            `<tr><td>Audit label</td><td>${badge("Traceable")}</td></tr>`,
            `<tr><td>Draft audit record</td><td>DR-AUD-2026-071 retained for OP-12</td></tr>`,
          ]
        )}
      </div>
      <div class="form-block">
        <h2>Paper Actions</h2>
        <p class="muted">This is the page the engineer lands on after extracting the simulation paper.</p>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="download-simulation-paper">Download PDF</button>
          <button data-go="/warehouse-delivery">Create warehouse instruction</button>
          <button data-go="/audit">Open audit package</button>
        </div>
      </div>
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <h2>Launch Decision</h2>
        ${renderTable(
          ["PO", "Decision", "Max launchable", "Open quantity"],
          [
            `<tr><td>PO24073101</td><td>${badge("Partial launch")}</td><td>220</td><td>80</td></tr>`,
            `<tr><td>PO24073102</td><td>${badge("Not launched")}</td><td>0</td><td>180</td></tr>`,
            `<tr><td>PO24073103</td><td>${badge("Full launch")}</td><td>120</td><td>0</td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Missing Material</h2>
        ${renderTable(
          ["Material", "Required", "Available", "Shortfall"],
          [
            `<tr><td>ALU-031</td><td>100</td><td>80</td><td>${badge("20")}</td></tr>`,
            `<tr><td>FAB-771</td><td>360</td><td>620</td><td>${badge("0")}</td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function modesLabel(mode) {
  const labels = {
    single: "Single PO",
    multi: "Multiple PO",
    future: "Future stock",
  };
  return labels[mode] || labels.single;
}

function bom() {
  return `
    ${titleBlock(
      "Bill of Material",
      "Upload BOM Excel files, validate the template, activate a replacement, and retain version history.",
      `<button data-go="/stock">Validate stock coverage</button>
       <button data-go="/simulation">Use in simulation</button>
       <button class="primary" data-action="upload-bom">Upload BOM .xlsx</button>`
    )}
    ${contextBanner("BOM")}
    <section class="grid two">
      <div class="form-block">
        <h2>BOM Upload</h2>
        <label class="field"><span>Selected project</span><input value="${projectName(appState.activeProject)}" readonly></label>
        <div class="dropzone" style="margin-top:14px">
          <div>
            <strong>Drop BOM Excel file</strong>
            <span class="muted">Expected columns: FGPN, Material Part Number, Usage Quantity.</span>
          </div>
          <input type="file" accept=".xlsx">
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button data-action="validate-bom">Validate template</button>
          <button data-action="export-compare">Compare active vs previous</button>
          <button data-action="open-source-pdf">Open source Excel</button>
          <button class="primary" data-action="activate-bom">Confirm replacement</button>
          <button data-go="/simulation">Use in simulation</button>
        </div>
      </div>
      <div class="panel">
        <h2>Version History</h2>
        ${renderTable(
          ["Version", "Uploaded", "Status", "Records"],
          [
            `<tr><td>BOM V2</td><td>2026-07-07</td><td>${badge("Active")}</td><td>284</td></tr>`,
            `<tr><td>BOM V1</td><td>2026-06-18</td><td>${badge("Archived")}</td><td>271</td></tr>`,
          ]
        )}
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Material Requirements Preview</h2>
      ${renderTable(
        ["FGPN", "Material", "Usage", "Safety coefficient", "PO quantity", "Required"],
        [
          `<tr><td>742118-33A0-000</td><td>ALU-031</td><td>3</td><td>2</td><td>10</td><td>60</td></tr>`,
          `<tr><td>742118-34B0-000</td><td>FAB-771</td><td>1.4</td><td>2</td><td>180</td><td>504</td></tr>`,
          `<tr><td>Two FGPN aggregate</td><td>ALU-031</td><td>3 + 2</td><td>2</td><td>10 + 20</td><td>140 total</td></tr>`,
        ]
      )}
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Upload Validation Summary</h2>
      ${renderTable(
        ["Check", "Result", "Action"],
        [
          `<tr><td>Loaded records</td><td>284 rows</td><td>${badge("Valid")}</td></tr>`,
          `<tr><td>Duplicate materials</td><td>0 blocking</td><td>${badge("OK")}</td></tr>`,
          `<tr><td>Unmapped PO lines</td><td>1 warning</td><td><button data-go="/po-review">Review PO</button></td></tr>`,
          `<tr><td>Usage format</td><td>4 decimal precision accepted</td><td>${badge("OK")}</td></tr>`,
        ]
      )}
    </section>
  `;
}

function stockView() {
  const totals = stock.reduce(
    (acc, row) => {
      acc.practical += row.practical;
      acc.theoretical += row.theoretical;
      acc.wip += row.wip;
      acc.transit += row.transit;
      acc.reserved += row.reserved;
      if (row.practical <= row.threshold) acc.alerts += 1;
      return acc;
    },
    { practical: 0, theoretical: 0, wip: 0, transit: 0, reserved: 0, alerts: 0 }
  );
  const stockRows = stock.map((row) => {
    const ratio = Math.min(100, Math.round((row.practical / Math.max(row.threshold, 1)) * 100));
    const netAvailable = row.practical - row.reserved;
    const alert = row.practical <= row.threshold;
    return `
      <tr>
        <td>
          <strong>${row.part}</strong><br>
          <small>${row.description}</small>
        </td>
        <td>${projectName(row.project)}<br><small>${row.type}</small></td>
        <td>
          <strong>${row.practical}</strong>
          <div class="stock-bar ${alert ? "danger" : ""}"><span style="width:${ratio}%"></span></div>
          <small>Threshold ${row.threshold}</small>
        </td>
        <td>${row.theoretical}<br><small>+${row.transit} transit</small></td>
        <td>${row.wip}</td>
        <td>${row.reserved}</td>
        <td>${netAvailable}</td>
        <td>${badge(alert ? "Below threshold" : `${row.coverageDays} days`)}</td>
        <td><div class="row-actions"><button data-action="save-threshold">Threshold</button><button data-action="correct-locked">Correct</button></div></td>
      </tr>`;
  });

  return `
    ${titleBlock(
      "Stock Management",
      "Monitor material availability from warehouse stock, WIP, transit, reservations, thresholds, and recent movements.",
      `<button data-go="/stock-history">History</button>
       <button data-go="/simulation">Use in simulation</button>
       <button class="primary" data-action="import-cutman">Import CutMan</button>`
    )}
    <section class="grid four">
      <div class="metric"><span>Practical stock</span><strong>${totals.practical}</strong><small>Confirmed warehouse stock.</small><button data-go="/stock-history">Movements</button></div>
      <div class="metric"><span>Theoretical stock</span><strong>${totals.theoretical}</strong><small>Practical plus ${totals.transit} in transit.</small><button data-action="save-transit">Add transit</button></div>
      <div class="metric"><span>WIP stock</span><strong>${totals.wip}</strong><small>From CutMan and manual transfers.</small><button data-action="import-cutman">Import</button></div>
      <div class="metric"><span>Threshold alerts</span><strong>${totals.alerts}</strong><small>Critical material pinned first.</small><button data-action="save-threshold">Manage</button></div>
    </section>
    <section class="alert-stack" style="margin-top:16px">
      <div class="alert danger">
        <div>
          <strong>ALU-031 is below practical threshold</strong>
          <small>Practical 48, reserved 36, net available 12. Transit of 42 is expected on 2026-07-14.</small>
        </div>
        <button data-go="/simulation">Re-run launch</button>
      </div>
    </section>
    <section class="form-block" style="margin-top:16px">
      <div class="form-grid three">
        <label class="field"><span>Project</span><select><option>All assigned projects</option>${projectOptions()}</select></label>
        <label class="field"><span>Material search</span><input value="ALU-03" placeholder="Part number or description"></label>
        <label class="field"><span>Stock view</span><select><option>Practical vs theoretical</option><option>Below threshold only</option><option>Transit expected</option><option>WIP materials</option></select></label>
      </div>
    </section>
    <section class="grid sidebar-main" style="margin-top:16px">
      <div class="form-block">
        <h2>Stock Controls</h2>
        <label class="field"><span>Material</span><select>${stock.map((row) => `<option>${row.part} - ${row.description}</option>`).join("")}</select></label>
        <label class="field"><span>CutMan import file</span><input type="file" accept=".xlsx,.sql"></label>
        <label class="field"><span>Transit quantity</span><input type="number" value="120"></label>
        <label class="field"><span>Expected arrival</span><input type="date" value="2026-07-14"></label>
        <label class="field"><span>Critical threshold</span><input type="number" value="50"></label>
        <label class="field"><span>Manual cutting transfer</span><input value="8 rolls to cutting area"></label>
        <label class="field"><span>Locked correction reason</span><textarea placeholder="Required when correcting a locked reception entry">Supplier count correction after recount.</textarea></label>
        <div class="row-actions" style="margin-top:14px">
          <button data-action="save-transit">Save transit</button>
          <button data-action="save-threshold">Save threshold</button>
          <button data-action="reserve-launch">Reserve for launch operation</button>
          <button data-action="import-cutman">Validate CutMan file</button>
          <button data-action="correct-locked">Correct locked entry</button>
        </div>
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Material Availability</h2>
          <button data-go="/simulation">Use selected in simulation</button>
        </div>
        ${renderTable(
        ["Material", "Project / Type", "Practical", "Theoretical", "WIP", "Reserved", "Net", "Coverage", "Actions"],
          stockRows
        )}
      </div>
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Transit & WIP</h2>
          <button data-action="import-cutman">Import CutMan</button>
        </div>
        ${renderTable(
          ["Material", "Transit", "Expected", "WIP", "Last update"],
          [
            `<tr><td>ALU-031</td><td>42</td><td>2026-07-14</td><td>12</td><td>CutMan import today</td></tr>`,
            `<tr><td>FAB-771</td><td>90</td><td>2026-07-11</td><td>95</td><td>Reception correction yesterday</td></tr>`,
            `<tr><td>THR-118</td><td>0</td><td>None</td><td>20</td><td>Transit update Jul 05</td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <div class="toolbar">
          <h2 style="margin-right:auto">Recent Movements</h2>
          <button data-go="/stock-history">Full history</button>
        </div>
        <ul class="timeline">
          <li><time>Today</time><div><strong>ALU-031 CutMan import</strong><br><span class="muted">WIP updated by -12, resulting practical stock 48.</span></div></li>
          <li><time>Yesterday</time><div><strong>FAB-771 locked correction</strong><br><span class="muted">Original and corrected values retained with reason.</span></div></li>
          <li><time>Jul 05</time><div><strong>THR-118 transit update</strong><br><span class="muted">Theoretical stock updated without changing practical stock.</span></div></li>
        </ul>
      </div>
    </section>
  `;
}

function stockHistory() {
  return `
    ${titleBlock(
      "Stock History",
      "Immutable material movement log with corrections, CutMan imports, transit updates, and signed delivery links.",
      `<button data-go="/stock">Stock</button>`
    )}
    <section class="panel">
      <div class="toolbar">
        <input type="search" placeholder="Material part number or description">
        <select><option>All movement types</option><option>Reception</option><option>CutMan import</option><option>Transit update</option><option>Correction</option></select>
        <button data-action="filter-history">Filter</button>
      </div>
      ${renderTable(
        ["Time", "Material", "Movement", "Qty", "Resulting stock", "User", "Reason"],
        [
          `<tr><td>2026-07-07 08:30</td><td>ALU-031</td><td>CutMan import</td><td>-12</td><td>48</td><td>Ilyas</td><td>${badge("Import event")}</td></tr>`,
          `<tr><td>2026-07-06 17:15</td><td>FAB-771</td><td>Reception correction</td><td>+20</td><td>620</td><td>Ilyas</td><td>Supplier count correction</td></tr>`,
          `<tr><td>2026-07-05 11:02</td><td>THR-118</td><td>Transit update</td><td>+40</td><td>132</td><td>Ilyas</td><td>${badge("Immutable")}</td></tr>`,
        ]
      )}
    </section>
  `;
}

function stockReception() {
  return `
    ${titleBlock(
      "Stock Reception",
      "Record warehouse material reception, show the 24-hour correction window, and expose locked-entry correction handoff.",
      `<button data-go="/stock">Stock</button>
       <button data-go="/stock-history">History</button>`
    )}
    ${contextBanner("Stock reception")}
    <section class="grid two" style="margin-top:16px">
      <div class="form-block">
        <h2>Receive Material</h2>
        <label class="field"><span>Material search</span><input value="ALU-03" placeholder="3+ characters: part or description"></label>
        <label class="field"><span>Selected material</span><select><option>ALU-031 - Aluminium rail left</option><option>FAB-771 - Black woven textile</option></select></label>
        <label class="field"><span>Received quantity</span><input type="number" value="50"></label>
        <label class="field"><span>Received by</span><input value="warehouse.lead"></label>
        <label class="field"><span>Reception timestamp</span><input value="2026-07-07 10:30"></label>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="record-reception">Record reception</button>
          <button data-action="filter-history">View matching history</button>
        </div>
      </div>
      <div class="panel">
        <h2>Correction Window</h2>
        ${renderTable(
          ["Entry", "Original qty", "Corrected qty", "Window", "State", "Action"],
          [
            `<tr><td>REC-8821</td><td>50</td><td><input value="52"></td><td>23h remaining</td><td>${badge("Editable")}</td><td><button data-action="record-reception">Save correction</button></td></tr>`,
            `<tr><td>REC-8792</td><td>600</td><td><input value="620"></td><td>Expired</td><td>${badge("Locked")}</td><td><button data-go="/stock">Launch Engineer correction</button></td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function warehouseDelivery() {
  return `
    ${titleBlock(
      "Warehouse-to-Manufacturing Delivery",
      "Create delivery instructions after approved launch operations, generate a time-limited code, and validate signed reception documents.",
      `<button data-go="/simulation">Launch operation</button>
       <button data-go="/customer-delivery">Customer delivery</button>
       <button class="primary" data-action="generate-code">Generate code</button>`
    )}
    ${contextBanner("Warehouse delivery")}
    <section class="grid two">
      <div class="form-block">
        <h2>Delivery Instruction</h2>
        <label class="field"><span>Approved launch operation</span><select><option>LO-2026-071 - Atlas partial launch</option></select></label>
        <label class="field"><span>Material part number</span><input value="ALU-031"></label>
        <label class="field"><span>Quantity to deliver</span><input type="number" value="80"></label>
        <label class="field"><span>Required delivery time</span><input type="datetime-local" value="2026-07-09T10:00"></label>
        <div class="row-actions" style="margin-top:14px">
          <button data-action="block-no-minutes">Test missing minutes block</button>
          <button class="primary" data-action="save-instruction">Save instruction</button>
        </div>
      </div>
      <div class="panel">
        <h2>Delivery Code & Document</h2>
        ${renderTable(
          ["Code", "Expires", "Use", "Status"],
          [
            `<tr><td><strong>WH-582914</strong></td><td>2026-07-09 10:00</td><td>Single use</td><td>${badge("Active")}</td></tr>`,
            `<tr><td>WH-219004</td><td>2026-07-04 12:00</td><td>Single use</td><td>${badge("Expired")}</td></tr>`,
          ]
        )}
        <div class="row-actions" style="margin-top:14px">
          <button data-go="/warehouse-code">Warehouse code entry</button>
          <button data-action="generate-code">Regenerate code</button>
          <button data-action="validate-signed-doc">Validate signed document</button>
          <button data-action="open-delivery-doc">Open delivery document</button>
        </div>
      </div>
    </section>
    <section class="form-block" style="margin-top:16px">
      <h2>Signed Reception Document</h2>
      <div class="form-grid three">
        <label class="field"><span>Manufacturing receiver</span><select><option>Yassine El Fassi</option><option>Imane Radi</option></select></label>
        <label class="field"><span>Received time</span><input value="2026-07-09 10:30"></label>
        <label class="field"><span>Actual received qty</span><input type="number" value="80"></label>
        <label class="field"><span>Variance reason</span><input placeholder="Required if actual differs"></label>
        <label class="field"><span>Signed PDF</span><input type="file" accept="application/pdf"></label>
        <label class="field"><span>Uploader</span><input value="warehouse.lead"></label>
      </div>
      <div class="row-actions" style="margin-top:14px">
        <button data-action="open-delivery-doc">Generate document</button>
        <button class="primary" data-action="validate-signed-doc">Validate and link stock movement</button>
      </div>
    </section>
  `;
}

function warehouseCodeAccess() {
  return `
    ${titleBlock(
      "Warehouse Code Access",
      "Warehouse Team Leader code-entry shell for valid, expired, and already-used delivery codes.",
      `<button data-go="/warehouse-delivery">Delivery instructions</button>
       <button data-go="/stock-history">Stock movement history</button>`
    )}
    <section class="grid two">
      <div class="form-block">
        <h2>Enter Delivery Code</h2>
        <label class="field"><span>Delivery code</span><input value="WH-582914"></label>
        <label class="field"><span>Warehouse team leader</span><input value="warehouse.lead"></label>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="access-code">Access delivery</button>
          <button data-action="expired-code">Test expired code</button>
          <button data-action="used-code">Test used code</button>
        </div>
      </div>
      <div class="panel">
        <h2>Delivery Details</h2>
        ${renderTable(
          ["Goods", "Part", "Qty", "Receiver", "Document"],
          [
            `<tr><td>Component</td><td>ALU-031</td><td>80</td><td>Yassine El Fassi</td><td><button data-action="open-delivery-doc">Generate document</button></td></tr>`,
            `<tr><td>Roll</td><td>FAB-771</td><td>12</td><td>Yassine El Fassi</td><td><button data-action="open-delivery-doc">Generate document</button></td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function customerDelivery() {
  return `
    ${titleBlock(
      "Customer Delivery",
      "Generate delivery instructions, record partial deliveries, require confirmation evidence, and update remaining quantities.",
      `<button data-go="/po-status">PO status</button>
       <button data-go="/finance">Finance</button>
       <button class="primary" data-action="generate-customer-doc">Generate instruction</button>`
    )}
    ${contextBanner("Customer delivery")}
    <section class="alert-stack">
      <div class="alert">
        <div>
          <strong>Warehouse readiness check</strong>
          <small>Available packaged quantity: 120. Warehouse document WH-DOC-071 must be confirmed before customer instruction unless overridden with reason.</small>
        </div>
        <button data-go="/warehouse-delivery">Open warehouse document</button>
      </div>
    </section>
    <section class="grid two">
      <div class="form-block">
        <h2>Delivery Instruction</h2>
        <div class="form-grid">
          <label class="field"><span>PO reference</span><select>${poOptions()}</select></label>
          <label class="field"><span>FGPN</span><input value="742118-33A0-000"></label>
          <label class="field"><span>Quantity to deliver</span><input type="number" value="100"></label>
          <label class="field"><span>Delivery method</span><select><option>Truck</option><option>DHL</option><option>Van</option></select></label>
          <label class="field"><span>Delivery date</span><input type="date" value="2026-07-12"></label>
          <label class="field"><span>Transport cost</span><input value="$240.00"></label>
          <label class="field"><span>Carrier reference</span><input value="TRK-90811"></label>
          <label class="field"><span>Customer dock</span><input value="Dock 4"></label>
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button data-action="open-delivery-doc">Print delivery note</button>
          <button class="primary" data-action="record-delivery">Record partial delivery</button>
          <button data-action="reset-form">Split delivery</button>
          <button data-action="try-delivered-no-confirmation">Try Delivered without confirmation</button>
        </div>
      </div>
      <div class="form-block">
        <h2>Delivery Confirmation</h2>
        <label class="field"><span>Confirmation date</span><input type="date" value="2026-07-13"></label>
        <label class="field"><span>Method of confirmation</span><select><option>Signed receipt PDF</option><option>Email record</option><option>Manual confirmation flag</option></select></label>
        <label class="field"><span>Confirming person</span><input value="Nadia Amrani"></label>
        <div class="dropzone" style="margin-top:14px">
          <div><strong>Upload evidence</strong><span class="muted">Accepted evidence pending business confirmation.</span></div>
          <input type="file" accept="application/pdf">
        </div>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="confirm-delivery">Confirm delivered</button>
        </div>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Delivery Records</h2>
      ${renderTable(
        ["Delivery", "PO", "Week", "Method", "Level", "Description", "Value", "Confirmation", "Actions"],
        [
          `<tr><td>CD-4408</td><td>PO24073101</td><td>2026-W29</td><td>Truck</td><td>L2</td><td>Front cushion cover</td><td>${money(1550)}</td><td>${badge("Confirmed")}</td><td><button data-action="open-source-pdf">POD</button></td></tr>`,
          `<tr><td>CD-4409</td><td>PO24073101</td><td>2026-W30</td><td>DHL</td><td>L2</td><td>Partial shipment</td><td>${money(1240)}</td><td>${badge("Pending")}</td><td><button data-action="confirm-delivery">Confirm</button></td></tr>`,
        ]
      )}
    </section>
  `;
}

function finance() {
  return `
    ${titleBlock(
      "Finance, Recovery, and Sales Forecasting",
      "Track unit prices, transport costs, revenue by period, forecasts, actual sales, invoices, and price history.",
      `<button data-go="/customer-delivery">Deliveries</button>
       <button data-go="/audit">Audit</button>
       <button class="primary" data-action="save-price">Save price</button>
       <button data-action="upload-invoice">Upload invoice</button>`
    )}
    ${contextBanner("Finance recovery")}
    <section class="form-block">
      <div class="form-grid three">
        <label class="field"><span>Period</span><select><option>Current calendar month</option><option>Next calendar month</option><option>Custom range</option></select></label>
        <label class="field"><span>From</span><input type="date" value="2026-07-01"></label>
        <label class="field"><span>To</span><input type="date" value="2026-07-31"></label>
      </div>
    </section>
    <section class="grid three">
      <div class="metric"><span>Current month revenue</span><strong>${money(3100)}</strong><small>200 units at $15.50 plus transport.</small></div>
      <div class="metric"><span>Next month forecast</span><strong>500</strong><small>Planned pick-up quantity.</small></div>
      <div class="metric"><span>July variance</span><strong>-150</strong><small>Forecast 500, actual 350.</small></div>
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="form-block">
        <h2>Price Record</h2>
        <div class="form-grid">
          <label class="field"><span>Part number</span><input value="7421183"></label>
          <label class="field"><span>FGPN</span><input value="742118-33A0-000"></label>
          <label class="field"><span>Trim style</span><input value="Black woven"></label>
          <label class="field"><span>Unit price</span><input value="15.5000"></label>
          <label class="field"><span>Effective date</span><input type="date" value="2026-06-01"></label>
          <label class="field"><span>Transport method</span><select><option>Truck - $240</option><option>DHL - $90</option><option>Van - $120</option></select></label>
        </div>
      </div>
      <div class="form-block">
        <h2>Invoice Upload</h2>
        <label class="field"><span>Delivery record</span><select><option>CD-4408 - PO24073101</option><option>CD-4409 - PO24073101</option></select></label>
        <div class="dropzone" style="margin-top:14px">
          <div><strong>Attach invoice PDF</strong><span class="muted">Invoice requirement is pending business confirmation.</span></div>
          <input type="file" accept="application/pdf">
        </div>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Forecast vs Actual</h2>
      ${renderTable(
        ["Period", "Forecast qty", "Actual qty", "Forecast value", "Actual value", "Variance"],
        [
          `<tr><td>July 2026</td><td>500</td><td>350</td><td>${money(7750)}</td><td>${money(5425)}</td><td>${badge("-150 units")}</td></tr>`,
          `<tr><td>August 2026</td><td>420</td><td>0</td><td>${money(6510)}</td><td>${money(0)}</td><td>${badge("Pending")}</td></tr>`,
        ]
      )}
    </section>
    <section class="grid two" style="margin-top:16px">
      <div class="panel">
        <h2>Price History</h2>
        ${renderTable(
          ["FGPN", "Previous", "New", "Effective", "User", "Action"],
          [
            `<tr><td>742118-33A0-000</td><td>15.5000</td><td>16.0000</td><td>2026-07-01</td><td>Ilyas</td><td><button data-action="save-price">Edit</button></td></tr>`,
            `<tr><td>742118-34B0-000</td><td>18.8000</td><td>18.0000</td><td>2026-07-03</td><td>Ilyas</td><td><button data-go="/po-history">Source correction</button></td></tr>`,
          ]
        )}
      </div>
      <div class="panel">
        <h2>Recovery Records</h2>
        ${renderTable(
          ["Delivery", "Qty", "Unit price", "Transport", "Invoice", "Revenue", "Status"],
          [
            `<tr><td>CD-4408</td><td>100</td><td>15.5000</td><td>${money(240)}</td><td><button data-action="open-source-pdf">Invoice</button></td><td>${money(1790)}</td><td>${badge("Recovered")}</td></tr>`,
            `<tr><td>CD-4409</td><td>80</td><td>15.5000</td><td>${money(90)}</td><td>${badge("Pending")}</td><td>${money(1330)}</td><td>${badge("Invoice pending")}</td></tr>`,
          ]
        )}
      </div>
    </section>
  `;
}

function globalFinance() {
  const summary = globalSummary();
  return `
    ${titleBlock(
      "Global Finance",
      "Portfolio recovery, forecast, invoice, and transport view across all assigned projects.",
      `<button data-go="/dashboard">Portfolio overview</button>
       <button class="primary" data-go="/project-workspace">Open selected project</button>`
    )}
    <section class="form-block">
      <div class="form-grid three">
        <label class="field"><span>Scope</span><select><option>All assigned projects</option><option>Atlas mark</option><option>Selected projects</option></select></label>
        <label class="field"><span>Period</span><select><option>Current calendar month</option><option>Next calendar month</option><option>Custom range</option></select></label>
        <label class="field"><span>Issue filter</span><select><option>All finance states</option><option>Invoice pending</option><option>Transport unrecovered</option><option>Price missing</option></select></label>
      </div>
    </section>
    <section class="grid four" style="margin-top:16px">
      <div class="metric"><span>Open PO value</span><strong>${money(summary.totalOpenValue)}</strong><small>Remaining value across portfolio.</small></div>
      <div class="metric"><span>Forecast quantity</span><strong>${summary.forecastQty}</strong><small>Open launch quantity.</small></div>
      <div class="metric"><span>Invoice pending</span><strong>2</strong><small>Customer evidence or invoice missing.</small></div>
      <div class="metric"><span>Recovered</span><strong>${money(5425)}</strong><small>Confirmed deliveries this month.</small></div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Finance by Project</h2>
      ${renderTable(
        ["Project", "Forecast", "Actual", "Open invoice", "Recovery status", "Open"],
        projects.map((project) => {
          const orders = ordersForProject(project.id);
          const forecast = orders.reduce((sum, po) => sum + po.remaining * po.unitPrice, 0);
          return `<tr><td>${projectName(project.id)}</td><td>${money(forecast)}</td><td>${money(Math.round(forecast * 0.62))}</td><td>${badge(project.health === "Needs attention" ? "Pending" : "OK")}</td><td>${badge(project.health === "Needs attention" ? "Recoverable transport" : "Recovered")}</td><td><button data-project-id="${project.id}" data-go="/finance">Project finance</button></td></tr>`;
        })
      )}
    </section>
  `;
}

function audit() {
  return `
    ${titleBlock(
      "Audit and Traceability",
      "Generate a project lifecycle audit package and inspect immutable traceability records.",
      `<button data-go="/po-history">PO history</button>
       <button data-go="/stock-history">Stock history</button>
       <button data-go="/customer-delivery">Deliveries</button>
       <button data-go="/finance">Finance</button>
       <button class="primary" data-action="generate-audit">Generate audit document</button>`
    )}
    ${contextBanner("Traceability audit")}
    <section class="grid sidebar-main">
      <div class="form-block">
        <h2>Project Audit Package</h2>
        <label class="field"><span>Selected project</span><input value="${projectName(appState.activeProject)}" readonly></label>
        <label class="field"><span>Format</span><select><option>PDF package</option><option>ZIP with source documents</option></select></label>
        <label class="field"><span>Scope</span><select><option>Include source PDFs, minutes, simulation papers, delivery evidence, invoices</option></select></label>
        <div class="row-actions" style="margin-top:14px">
          <button class="primary" data-action="generate-audit">Generate</button>
          <button data-action="download-audit-package">Download package</button>
          <button data-action="view-trace">View trace records</button>
        </div>
      </div>
      <div class="panel">
        <h2>Included Records</h2>
        ${renderTable(
          ["Area", "Content", "Status"],
          [
            `<tr><td>Purchase Orders</td><td>PDFs, versions, corrections, comparisons</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Status History</td><td>Transitions, backward reasons, user timestamps</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Launch Decisions</td><td>Simulations, meeting minutes, warehouse requests</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Deliveries</td><td>Warehouse documents, customer confirmations, invoices</td><td>${badge("Included")}</td></tr>`,
            `<tr><td>Stock and BOM</td><td>Movements, CutMan imports, BOM versions used</td><td>${badge("Included")}</td></tr>`,
          ]
        )}
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Traceability Timeline</h2>
      <ul class="timeline">
        <li><time>08:30</time><div><strong>CutMan import</strong><br><span class="muted">ALU-031 WIP updated by Ilyas Benchassi.</span></div></li>
        <li><time>09:10</time><div><strong>PO version stored</strong><br><span class="muted">PO24073101 V2 stored, V1 unchanged.</span></div></li>
        <li><time>09:42</time><div><strong>Meeting minutes uploaded</strong><br><span class="muted">Linked to LO-2026-071.</span></div></li>
        <li><time>10:00</time><div><strong>Warehouse instruction generated</strong><br><span class="muted">Code WH-582914 created, expires in 48 hours.</span></div></li>
        <li><time>10:30</time><div><strong>Signed warehouse reception validated</strong><br><span class="muted">Signer Yassine El Fassi, uploader warehouse.lead, stock movement linked.</span></div></li>
        <li><time>13:20</time><div><strong>Customer delivery confirmed</strong><br><span class="muted">POD uploaded, PO delivered status accepted.</span></div></li>
        <li><time>15:00</time><div><strong>Invoice uploaded</strong><br><span class="muted">Invoice linked to CD-4408 and finance recovery record.</span></div></li>
        <li><time>15:30</time><div><strong>Audit immutability check</strong><br><span class="muted">Attempted overwrite rejected and recorded.</span></div></li>
      </ul>
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Trace Filters and Evidence</h2>
      ${renderTable(
        ["Trace type", "Example", "Evidence"],
        [
          `<tr><td>Login/access</td><td>Launch Engineer login</td><td>${badge("Immutable")}</td></tr>`,
          `<tr><td>Signed document</td><td>Warehouse reception</td><td>Signer + uploader stored</td></tr>`,
          `<tr><td>Price change</td><td>Unit price 15.50 -> 16.00</td><td>Effective date and user</td></tr>`,
          `<tr><td>Delete attempt</td><td>Audit overwrite rejected</td><td>${badge("Rejected")}</td></tr>`,
        ]
      )}
    </section>
  `;
}

const routes = {
  "/dashboard": dashboard,
  "/coverage": coverage,
  "/projects": projectsView,
  "/projects-new": projectsView,
  "/project-workspace": projectWorkspace,
  "/po-upload": poUpload,
  "/po-review": poReview,
  "/po-records": poRecords,
  "/po-detail": poDetail,
  "/po-history": poHistory,
  "/po-versions": poVersions,
  "/po-compare": poCompare,
  "/po-status": poStatus,
  "/simulation": simulation,
  "/simulation-paper": simulationPaper,
  "/bom": bom,
  "/stock": stockView,
  "/stock-reception": stockReception,
  "/stock-history": stockHistory,
  "/warehouse-delivery": warehouseDelivery,
  "/warehouse-code": warehouseCodeAccess,
  "/customer-delivery": customerDelivery,
  "/finance": finance,
  "/global-finance": globalFinance,
  "/audit": audit,
};

function render() {
  const path = routes[route()] ? route() : "/dashboard";
  $("#view").innerHTML = routes[path]();
  $("#view").focus({ preventScroll: true });
  $$(".nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === path);
  });
  bindViewEvents();
}

function bindViewEvents() {
  $$("[data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.projectId) appState.activeProject = button.dataset.projectId;
      if (button.dataset.poId) {
        appState.activePO = button.dataset.poId;
        const po = purchaseOrders.find((item) => item.po === button.dataset.poId);
        if (po) appState.activeProject = po.project;
      }
      setRoute(button.dataset.go);
    });
  });

  $$("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  const filter = $("[data-status-filter]");
  if (filter) {
    filter.addEventListener("change", () => {
      appState.statusFilter = filter.value;
      render();
    });
  }

  const simulationMode = $("[data-simulation-mode]");
  if (simulationMode) {
    simulationMode.addEventListener("change", () => {
      appState.simulationMode = simulationMode.value;
      render();
      notify(`${modesLabel(appState.simulationMode)} simulation selected.`);
    });
  }

  $$("[data-simulation-mode-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.simulationMode = button.dataset.simulationModeShortcut;
      render();
      notify(`${modesLabel(appState.simulationMode)} simulation selected.`);
    });
  });

  $$("select").forEach((select) => {
    if ([...select.options].some((option) => purchaseOrders.some((po) => po.po === option.value))) {
      select.addEventListener("change", () => {
        if (purchaseOrders.some((po) => po.po === select.value)) {
          appState.activePO = select.value;
          const po = activePO();
          appState.activeProject = po.project;
        }
      });
    }
  });

  const projectSwitcher = $("#projectSwitcher");
  if (projectSwitcher) {
    projectSwitcher.innerHTML = projectOptions();
    projectSwitcher.value = appState.activeProject;
    projectSwitcher.addEventListener("change", () => {
      appState.activeProject = projectSwitcher.value;
      const firstProjectPO = ordersForProject(appState.activeProject)[0];
      if (firstProjectPO) appState.activePO = firstProjectPO.po;
      setRoute("/project-workspace");
      notify(`${projectName(appState.activeProject)} selected.`);
    });
  }

  $$("[data-sim-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const modeKeys = ["single", "multi", "future"];
      const current = modeKeys.indexOf(appState.simulationMode);
      const nextIndex = button.dataset.simNav === "next" ? current + 1 : current - 1;
      appState.simulationMode = modeKeys[Math.max(0, Math.min(modeKeys.length - 1, nextIndex))];
      render();
      notify(`${modesLabel(appState.simulationMode)} simulation selected.`);
    });
  });
}

function handleAction(action) {
  const actionRoutes = {
    "save-project": "/project-workspace",
    "version-preview": "/po-review",
    "validate-structure": "/po-review",
    "confirm-po": "/po-detail",
    "create-version": "/po-history",
    "export-compare": "/po-history",
    "advance-status": "/po-status",
    "try-delivered-no-confirmation": "/po-status",
    "record-partial": "/po-detail",
    "final-delivery": "/customer-delivery",
    "finalize-launch": "/warehouse-delivery",
    "save-sim": "/warehouse-delivery",
    "extract-simulation-paper": "/simulation-paper",
    "draft-doc": "/simulation-paper",
    "upload-bom": "/bom",
    "validate-bom": "/bom",
    "activate-bom": "/simulation",
    "import-cutman": "/stock",
    "save-transit": "/stock-history",
    "save-threshold": "/stock",
    "reserve-launch": "/stock-history",
    "correct-locked": "/stock-history",
    "record-reception": "/stock-history",
    "filter-history": "/stock-history",
    "generate-code": "/warehouse-delivery",
    "access-code": "/warehouse-code",
    "expired-code": "/warehouse-code",
    "used-code": "/warehouse-code",
    "save-instruction": "/warehouse-delivery",
    "validate-signed-doc": "/stock-history",
    "open-delivery-doc": "/warehouse-delivery",
    "generate-customer-doc": "/customer-delivery",
    "record-delivery": "/finance",
    "confirm-delivery": "/finance",
    "save-price": "/finance",
    "upload-invoice": "/audit",
    "generate-audit": "/audit",
    "view-trace": "/audit",
    "download-audit-package": "/audit",
    "download-simulation-paper": "/simulation-paper",
  };
  const messages = {
    "export-projects": "Assigned project list export queued.",
    "save-project": "Project shell saved. The project is now available for PO submission.",
    "reset-form": "Form cleared for a new project.",
    "edit-project": "Edit controls opened for assigned project.",
    "delete-project": "Deletion blocked because this project has linked purchase orders.",
    "reject-non-pdf": "Only PDF files are accepted.",
    "validate-structure": "Covers PO structure validated. Extraction is ready.",
    "show-rejection": "Rejected: expected Covers PO fields were not found.",
    "confirm-po": "PO stored as V1 with corrected-field flags and original extracted values retained.",
    "mark-corrected": "Field marked Corrected by user.",
    "add-line": "New line item shell added.",
    "version-preview": "Corrected PDF extraction preview is ready.",
    "create-version": "V3 created. Prior versions remain immutable.",
    "export-compare": "Version comparison summary generated.",
    "open-source-pdf": "Stored source PDF opened from PO history.",
    "advance-status": "Status action captured with timestamp and user attribution.",
    "skip-status": "Transition rejected. Allowed next status from In Progress is Done.",
    "backward-status": "Backward transition requires a written reason before saving.",
    "record-partial": "Partial delivery recorded. Delivered and remaining quantities recalculated.",
    "final-delivery": "Remaining quantity is zero, PO is eligible for Delivered status.",
    "run-single-sim": "Single PO simulation completed.",
    "run-multi-sim": "Multi-PO simulation completed using the selected priority rule.",
    "run-future-sim": "Future-stock simulation completed without changing stored stock.",
    "export-missing": "Missing-material list exported.",
    "extract-simulation-paper": "Simulation paper extracted with inputs, result, missing materials, and audit label.",
    "download-simulation-paper": "Simulation paper PDF downloaded.",
    "finalize-launch": "Launch operation LO-2026-071 finalized because meeting minutes are linked.",
    "save-sim": "Simulation stored in the audit trail; next step is warehouse instruction.",
    "draft-doc": "Draft document generated: based on real and planned stock, not confirmed.",
    "upload-bom": "BOM upload shell opened.",
    "validate-bom": "BOM template validated.",
    "activate-bom": "New BOM version activated; previous version archived.",
    "import-cutman": "CutMan Excel or SQL import shell opened.",
    "save-transit": "Transit quantity saved and theoretical stock updated.",
    "save-threshold": "Critical threshold saved.",
    "reserve-launch": "Material reservation created for LO-2026-071 and linked to stock history.",
    "correct-locked": "Locked reception correction requires a reason and stores both values.",
    "record-reception": "Stock reception recorded with timestamp, user, and correction window.",
    "filter-history": "Stock history filters applied.",
    "generate-code": "Delivery code WH-582914 generated for 48 hours and single use.",
    "access-code": "Valid delivery code accepted; warehouse delivery details displayed.",
    "expired-code": "This code has expired. Please contact the Launch Engineer to generate a new delivery instruction.",
    "used-code": "This code has already been used and does not show delivery details.",
    "block-no-minutes": "A meeting minutes document must be uploaded before a delivery instruction can be created.",
    "save-instruction": "Warehouse delivery instruction saved.",
    "validate-signed-doc": "Signed reception document validated and stock movement linked.",
    "open-delivery-doc": "Warehouse delivery document shell opened.",
    "generate-customer-doc": "Customer delivery instruction generated.",
    "record-delivery": "Partial customer delivery recorded.",
    "try-delivered-no-confirmation": "Delivered status blocked until confirmation details are recorded.",
    "confirm-delivery": "Delivery confirmation stored with date, method, and confirming person.",
    "save-price": "Price record saved with effective date and history entry.",
    "upload-invoice": "Invoice PDF linked to the selected delivery record.",
    "generate-audit": "Project audit package generated.",
    "view-trace": "Traceability records opened.",
    "download-audit-package": "Audit package downloaded with selected source evidence.",
  };

  notify(messages[action] || "Demo action completed.");
  if (actionRoutes[action]) {
    setTimeout(() => setRoute(actionRoutes[action]), 220);
  }
}

let toastTimer;
function notify(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

$("#globalSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    notify(`Search shell submitted for "${event.currentTarget.value || "all records"}".`);
  }
});

window.addEventListener("hashchange", render);

if (!location.hash) {
  location.hash = "/dashboard";
}

render();

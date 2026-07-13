import React, { createContext, useContext, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "../styles.css";
import "./react.css";

const projects = [
  {
    id: "P-2406-ATL",
    name: "Atlas Front Seat Launch",
    mark: "Atlas",
    customer: "Covers",
    engineer: "Ilyas Benchassi",
    pos: 3,
    health: "Needs attention",
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
    health: "On track",
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
    health: "On track",
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
    validation: "Validated",
    phase: "Previous",
  },
];

const stock = [
  { part: "ALU-031", description: "Aluminium rail left", project: "P-2406-ATL", practical: 48, theoretical: 90, reserved: 36, transit: 42, threshold: 50, wip: 12, coverageDays: 2 },
  { part: "FAB-771", description: "Black woven textile", project: "P-2406-ATL", practical: 620, theoretical: 710, reserved: 260, transit: 90, threshold: 180, wip: 95, coverageDays: 14 },
  { part: "THR-118", description: "Contrast stitching thread", project: "P-2407-ATL", practical: 132, theoretical: 132, reserved: 44, transit: 0, threshold: 90, wip: 20, coverageDays: 8 },
];

const AppContext = createContext(null);

function useApp() {
  return useContext(AppContext);
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function statusClass(value) {
  if (/missing|expired|locked|not launched|overdue|mismatch|shortage|pending/i.test(value)) return "danger";
  if (/partial|attention|threshold|unplanned|invoice/i.test(value)) return "warn";
  if (/validated|active|confirmed|delivered|on track|full|ok|ready|included|recovered/i.test(value)) return "ok";
  if (/in progress|packaged|changed|added/i.test(value)) return "info";
  return "neutral";
}

function Badge({ children }) {
  return <span className={`status ${statusClass(String(children))}`}>{children}</span>;
}

function Table({ headers, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function PageHead({ title, subtitle, actions }) {
  return (
    <section className="route-head">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="actions">{actions}</div>
    </section>
  );
}

function ActionButton({ to, projectId, poId, children, primary, className = "" }) {
  const navigate = useNavigate();
  const { setActiveProject, setActivePO, poById } = useApp();
  return (
    <button
      className={`${primary ? "primary" : ""} ${className}`.trim()}
      onClick={() => {
        if (projectId) setActiveProject(projectId);
        if (poId) {
          setActivePO(poId);
          const po = poById(poId);
          if (po) setActiveProject(po.project);
        }
        if (to) navigate(to);
      }}
    >
      {children}
    </button>
  );
}

function AppProvider({ children }) {
  const [activeProject, setActiveProject] = useState("P-2406-ATL");
  const [activePO, setActivePO] = useState("PO24073101");
  const [toast, setToast] = useState("");

  const value = useMemo(() => {
    const projectById = (id) => projects.find((project) => project.id === id) || projects[0];
    const poById = (id) => purchaseOrders.find((po) => po.po === id) || purchaseOrders[0];
    const ordersForProject = (id = activeProject) => purchaseOrders.filter((po) => po.project === id);
    const activeProjectRecord = projectById(activeProject);
    const activePORecord = poById(activePO);
    const notify = (message) => {
      setToast(message);
      window.clearTimeout(window.__adientToast);
      window.__adientToast = window.setTimeout(() => setToast(""), 2400);
    };
    return {
      activeProject,
      activePO,
      setActiveProject,
      setActivePO,
      activeProjectRecord,
      activePORecord,
      projectById,
      poById,
      ordersForProject,
      notify,
    };
  }, [activeProject, activePO]);

  return (
    <AppContext.Provider value={value}>
      {children}
      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </AppContext.Provider>
  );
}

function Layout() {
  const { activeProject, setActiveProject, setActivePO, ordersForProject, activeProjectRecord, notify } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const isProjectWorkspace = isProjectRoute(location.pathname);
  return (
    <div className="app-shell">
      <aside className={`sidebar ${isProjectWorkspace ? "project-workspace-sidebar" : "global-workspace-sidebar"}`}>
        {isProjectWorkspace ? <ProjectSidebarShell /> : <GlobalSidebar />}
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div>
            <small className="eyebrow">Role</small>
            <strong>Launch Engineer</strong>
          </div>
          <label className="project-switcher">
            <span>Project</span>
            <select
              value={activeProject}
              onChange={(event) => {
                setActiveProject(event.target.value);
                const firstPO = ordersForProject(event.target.value)[0];
                if (firstPO) setActivePO(firstPO.po);
                navigate("/project");
                notify(`${projects.find((p) => p.id === event.target.value)?.name} selected.`);
              }}
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>{project.mark} - {project.name}</option>
              ))}
            </select>
          </label>
          <label className="search">
            <span>Search</span>
            <input placeholder="Project, PO, FGPN, material" />
          </label>
          <div className="profile">
            <span className="status-dot"></span>
            <span>{activeProjectRecord.engineer}</span>
          </div>
        </header>
        <main className="view" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<ProjectWorkspace />} />
            <Route path="/po" element={<PODetail />} />
            <Route path="/po-review" element={<POReview />} />
            <Route path="/po-records" element={<PORecords />} />
            <Route path="/po-history" element={<POHistory />} />
            <Route path="/po-status" element={<POStatus />} />
            <Route path="/po-upload" element={<POUpload />} />
            <Route path="/simulation" element={<Simulation scope="global" />} />
            <Route path="/project-simulation" element={<Simulation scope="project" />} />
            <Route path="/simulation-paper" element={<SimulationPaper />} />
            <Route path="/bom" element={<BOM />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock-reception" element={<ModulePage title="Stock Reception" active="stock" />} />
            <Route path="/stock-history" element={<ModulePage title="Stock History" active="stock" />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/warehouse-code" element={<ModulePage title="Warehouse Code Access" active="warehouse" />} />
            <Route path="/customer-delivery" element={<CustomerDelivery />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/global-finance" element={<GlobalFinance />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/story-map" element={<StoryMap />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function GlobalSidebar() {
  return (
    <>
      <NavLink className="brand" to="/">
        <span className="brand-mark">AL</span>
        <span>
          <strong>Adient Launch</strong>
          <small>Engineer Demo</small>
        </span>
      </NavLink>
      <nav className="nav" aria-label="Global launch engineer navigation">
        <p>Global Workspace</p>
        <NavLink to="/">Portfolio Overview</NavLink>
        <NavLink to="/projects">Assigned Projects</NavLink>
        <NavLink to="/simulation">Global Simulation</NavLink>
        <NavLink to="/global-finance">Global Finance</NavLink>
        <p>Reference</p>
        <NavLink to="/story-map">Story Map</NavLink>
      </nav>
    </>
  );
}

function ProjectSidebarShell() {
  const { activeProjectRecord } = useApp();
  const location = useLocation();
  return (
    <>
      <ActionButton to="/" className="sidebar-back">Global workspace</ActionButton>
      <section className="sidebar-project-card">
        <span className="eyebrow">Project</span>
        <strong>{activeProjectRecord.mark} - {activeProjectRecord.name}</strong>
      </section>
      <ProjectSideNav active={activeSectionForPath(location.pathname)} />
    </>
  );
}

function isProjectRoute(pathname) {
  return [
    "/project",
    "/po",
    "/po-review",
    "/po-records",
    "/po-history",
    "/po-status",
    "/po-upload",
    "/project-simulation",
    "/simulation-paper",
    "/bom",
    "/stock",
    "/stock-reception",
    "/stock-history",
    "/warehouse",
    "/warehouse-code",
    "/customer-delivery",
    "/finance",
    "/audit",
  ].includes(pathname);
}

function activeSectionForPath(pathname) {
  if (pathname === "/project") return "overview";
  if (pathname === "/po-records" || pathname === "/po-upload") return "pos";
  if (pathname.startsWith("/po")) return "po";
  if (pathname.startsWith("/bom")) return "bom";
  if (pathname.startsWith("/stock")) return "stock";
  if (pathname === "/project-simulation" || pathname === "/simulation-paper") return "simulation";
  if (pathname.startsWith("/warehouse")) return "warehouse";
  if (pathname.startsWith("/customer-delivery")) return "delivery";
  if (pathname.startsWith("/finance")) return "finance";
  if (pathname.startsWith("/audit")) return "audit";
  return "overview";
}

function Portfolio() {
  const openOrders = purchaseOrders.filter((po) => po.remaining > 0);
  const totalOpenValue = openOrders.reduce((sum, po) => sum + po.remaining * po.unitPrice, 0);
  const forecastQty = openOrders.reduce((sum, po) => sum + po.remaining, 0);
  const projectsNeedingAction = projects.filter((project) => project.health !== "On track").length;
  const stockRisks = stock.filter((item) => item.practical < item.threshold).length;
  return (
    <>
      <section className="portfolio-hero">
        <div>
          <small className="eyebrow">Global workspace</small>
          <h1>Launch Engineer Overview</h1>
          <p>Start from the portfolio, check the global workload, then choose one project card to enter its dedicated workspace.</p>
        </div>
        <div className="row-actions">
          <ActionButton to="/simulation">Global simulation</ActionButton>
          <ActionButton to="/global-finance">Global finance</ActionButton>
        </div>
      </section>

      <section className="mini-dashboard">
        <Metric label="Assigned projects" value={projects.length} note="All projects assigned to this launch engineer." to="/projects" action="View all" />
        <Metric label="Need action" value={projectsNeedingAction} note="Projects with open launch, stock, or evidence risk." to="/projects" action="Filter" />
        <Metric label="Open PO value" value={money(totalOpenValue)} note="Remaining value across assigned projects." to="/global-finance" action="Finance" />
        <Metric label="Global launch qty" value={forecastQty} note="Open quantity available for cross-project planning." to="/simulation" action="Simulate" />
        <Metric label="Stock risks" value={stockRisks} note="Materials below practical threshold." to="/stock" action="Stock" />
      </section>

      <section className="portfolio-section-head">
        <div>
          <h2>Choose Your Project</h2>
          <p>Each card opens a separate project workspace with only project-specific tools.</p>
        </div>
        <div className="quick-filters">
          <button className="active">All</button><button>Atlas</button><button>Needs action</button><button>On track</button>
        </div>
      </section>

      <section className="project-pick-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </section>
    </>
  );
}

function Projects() {
  const groups = projects.reduce((acc, project) => {
    acc[project.mark] = [...(acc[project.mark] || []), project];
    return acc;
  }, {});
  return (
    <>
      <PageHead
        title="Assigned Projects"
        subtitle="Choose a mark or project, then enter the project workspace. This page is global; it is not tied to one project."
        actions={<><ActionButton to="/project" primary>Current workspace</ActionButton><button>Export list</button></>}
      />
      <section className="form-block">
        <div className="form-grid three">
          <label className="field"><span>Search project</span><input defaultValue="Atlas" /></label>
          <label className="field"><span>Mark</span><select><option>All marks</option><option>Atlas</option><option>Marina</option></select></label>
          <label className="field"><span>State</span><select><option>Needs my action</option><option>All active</option><option>Blocked</option></select></label>
        </div>
      </section>
      <section className="project-groups" style={{ marginTop: 16 }}>
        {Object.entries(groups).map(([mark, markProjects]) => (
          <div className="project-group" key={mark}>
            <div className="project-group-head">
              <div><h2>{mark}</h2><p>{markProjects.length} assigned projects</p></div>
              <ActionButton to="/project" projectId={markProjects[0].id}>Open mark workspace</ActionButton>
            </div>
            <Table
              headers={["Project", "Program / Line", "Phase", "POs", "Readiness", "Next action"]}
              rows={markProjects.map((project) => (
                <tr key={project.id}>
                  <td><strong>{project.name}</strong><br /><small>{project.id} / {project.customer}</small></td>
                  <td>{project.program}<br /><small>{project.plantLine}</small></td>
                  <td>{project.phase}<br /><small>SOP {project.sopDate}</small></td>
                  <td>{project.pos}</td>
                  <td><Badge>{project.health}</Badge></td>
                  <td><div className="row-actions"><ActionButton to="/project" projectId={project.id} primary>Open</ActionButton><ActionButton to="/simulation" projectId={project.id}>Simulate</ActionButton></div></td>
                </tr>
              ))}
            />
          </div>
        ))}
      </section>
    </>
  );
}

function ProjectWorkspace() {
  const { activeProjectRecord, ordersForProject } = useApp();
  const orders = ordersForProject();
  return (
    <>
      <PageHead
        title="Project Workspace"
        subtitle="Project-specific work. The project is fixed by the top switcher, so these pages do not keep asking you to reselect it."
        actions={<><ActionButton to="/projects">Projects</ActionButton><ActionButton to="/po-upload" primary>Upload PO</ActionButton></>}
      />
      <ProjectContext step="Overview" />
      <ProjectShell active="overview">
        <ProjectTabs active="overview" />
        <section className="grid four" style={{ marginTop: 16 }}>
          <Metric label="Open POs" value={orders.length} note="Current, pending, and previous records." to="/po-records" action="POs" />
          <Metric label="BOM status" value="V2" note="Active, 284 rows loaded." to="/bom" action="BOM" />
          <Metric label="Stock readiness" value="Partial" note="ALU-031 shortage blocks full launch." to="/stock" action="Stock" />
          <Metric label="Audit evidence" value="12/16" note="Four documents still pending." to="/audit" action="Audit" />
        </section>
        <section className="grid sidebar-main" style={{ marginTop: 16 }}>
          <Panel title={`${activeProjectRecord.mark} / ${activeProjectRecord.name}`} action={<ActionButton to="/projects">Change project</ActionButton>}>
            <Table headers={["Project fact", "Value"]} rows={[
              <tr key="program"><td>Customer program</td><td>{activeProjectRecord.program}</td></tr>,
              <tr key="line"><td>Plant / line</td><td>{activeProjectRecord.plantLine}</td></tr>,
              <tr key="phase"><td>Launch phase</td><td>{activeProjectRecord.phase}</td></tr>,
              <tr key="sop"><td>SOP date</td><td>{activeProjectRecord.sopDate}</td></tr>,
              <tr key="eng"><td>Responsible engineer</td><td>{activeProjectRecord.engineer}</td></tr>,
            ]} />
          </Panel>
          <Panel title="Project Flow">
            <div className="workflow-strip">
              <WorkflowStep n="1" title="PO" note="Uploaded and reviewed" active />
              <WorkflowStep n="2" title="Sim" note="Partial launch" active />
              <WorkflowStep n="3" title="Warehouse" note="Reception pending" />
              <WorkflowStep n="4" title="Finance" note="Invoice pending" />
            </div>
          </Panel>
        </section>
        <section className="grid two" style={{ marginTop: 16 }}>
          <Panel title="Project POs" action={<ActionButton to="/po-records">All POs</ActionButton>}>
            <Table
              headers={["PO", "Phase", "Status", "Remaining", "Next"]}
              rows={orders.map((po) => <PORow key={po.po} po={po} />)}
            />
          </Panel>
          <Panel title="Next Actions" action={<ActionButton to="/audit">Evidence</ActionButton>}>
            <Table headers={["Area", "Status", "Next action"]} rows={[
              <tr key="review"><td>Purchase Orders</td><td><Badge>Needs review</Badge></td><td><ActionButton to="/po-review">Review extraction</ActionButton></td></tr>,
              <tr key="sim"><td>Launch Simulation</td><td><Badge>Partial launch</Badge></td><td><ActionButton to="/project-simulation">Open simulation</ActionButton></td></tr>,
              <tr key="warehouse"><td>Warehouse Delivery</td><td><Badge>Code generated</Badge></td><td><ActionButton to="/warehouse">Validate reception</ActionButton></td></tr>,
              <tr key="delivery"><td>Customer Delivery</td><td><Badge>Pending proof</Badge></td><td><ActionButton to="/customer-delivery">Upload POD</ActionButton></td></tr>,
              <tr key="finance"><td>Finance</td><td><Badge>Invoice pending</Badge></td><td><ActionButton to="/finance">Close recovery</ActionButton></td></tr>,
            ]} />
          </Panel>
        </section>
      </ProjectShell>
    </>
  );
}

function ProjectShell({ active, children }) {
  return (
    <section className="project-shell">
      <div className="project-shell-main">{children}</div>
    </section>
  );
}

function ProjectSideNav({ active }) {
  const items = [
    ["overview", "Overview", "/project"],
    ["pos", "Project POs", "/po-records"],
    ["po", "Active PO", "/po"],
    ["bom", "BOM", "/bom"],
    ["stock", "Stock", "/stock"],
    ["simulation", "Simulation", "/project-simulation"],
    ["warehouse", "Warehouse", "/warehouse"],
    ["delivery", "Customer Delivery", "/customer-delivery"],
    ["finance", "Finance", "/finance"],
    ["audit", "Audit", "/audit"],
  ];
  const { activeProjectRecord } = useApp();
  return (
    <aside className="project-side-nav" aria-label="Project-specific navigation">
      <div><span className="eyebrow">Project Workspace</span><strong>{activeProjectRecord.mark} - {activeProjectRecord.name}</strong></div>
      {items.map(([key, label, to]) => <ActionButton key={key} to={to} className={active === key ? "active" : ""}>{label}</ActionButton>)}
    </aside>
  );
}

function ProjectTabs({ active }) {
  return null;
}

function ProjectContext({ step }) {
  const { activeProjectRecord, activePORecord } = useApp();
  return (
    <section className="context-banner">
      <div><span>Project</span><strong>{activeProjectRecord.mark} - {activeProjectRecord.name}</strong></div>
      <div><span>Customer</span><strong>{activeProjectRecord.customer}</strong></div>
      <div><span>Active PO</span><strong>{activePORecord.po}</strong></div>
      <div><span>Launch operation</span><strong>LO-2026-071</strong></div>
      <div><span>Step</span><strong>{step}</strong></div>
      <div className="row-actions"><ActionButton to="/project">Workspace</ActionButton><ActionButton to="/audit">Audit</ActionButton></div>
    </section>
  );
}

function PODetail() {
  const { activePORecord } = useApp();
  const po = activePORecord;
  return (
    <>
      <PageHead title="PO Detail" subtitle="One purchase order with review, versions, lines, status, delivery, finance, and audit trail." actions={<><ActionButton to="/project">Project workspace</ActionButton><ActionButton to="/po-status" primary>Move status</ActionButton></>} />
      <ProjectContext step="PO detail" />
      <ProjectShell active="po">
        <ProjectTabs active="po" />
        <section className="grid four" style={{ marginTop: 16 }}>
          <Metric label="PO number" value={po.po} note="Source PDF retained." action="PDF" />
          <Metric label="Status" value={po.status} note={`${po.delivered} delivered, ${po.remaining} remaining.`} to="/po-status" action="Status" />
          <Metric label="Version" value="V2" note="V1 retained and immutable." to="/po-history" action="History" />
          <Metric label="Amount open" value={money(po.remaining * po.unitPrice)} note="Unit price x remaining." to="/finance" action="Finance" />
        </section>
        <section className="grid two" style={{ marginTop: 16 }}>
          <Panel title="PO Line Items">
            <Table headers={["Line", "FGPN", "Item", "Qty", "Delivered", "Remaining", "Validation"]} rows={[
              <tr key={po.po}><td>1</td><td>{po.fgpn}</td><td>{po.item}</td><td>{po.quantity}</td><td>{po.delivered}</td><td>{po.remaining}</td><td><Badge>{po.validation}</Badge></td></tr>,
              <tr key="2"><td>2</td><td>742118-34B0-000</td><td>Back rest cover</td><td>180</td><td>0</td><td>180</td><td><Badge>Missing field</Badge></td></tr>,
            ]} />
          </Panel>
          <Panel title="Next Action">
            <Table headers={["Area", "State", "Action"]} rows={[
              <tr key="review"><td>Review</td><td><Badge>{po.validation}</Badge></td><td><ActionButton to="/po-review">Resolve fields</ActionButton></td></tr>,
              <tr key="status"><td>Status</td><td><Badge>{po.status}</Badge></td><td><ActionButton to="/po-status">Move forward</ActionButton></td></tr>,
              <tr key="launch"><td>Launch</td><td><Badge>Partial launch</Badge></td><td><ActionButton to="/project-simulation">Run simulation</ActionButton></td></tr>,
              <tr key="delivery"><td>Delivery</td><td><Badge>Pending proof</Badge></td><td><ActionButton to="/customer-delivery">Open delivery</ActionButton></td></tr>,
            ]} />
          </Panel>
        </section>
      </ProjectShell>
    </>
  );
}

function PORecords() {
  const { ordersForProject, activeProjectRecord } = useApp();
  const orders = ordersForProject();
  return (
    <>
      <PageHead title="Project POs" subtitle="Current, pending, previous, and blocked POs for the selected project only." actions={<><ActionButton to="/po-upload" primary>Upload PO</ActionButton><ActionButton to="/po-history">History</ActionButton></>} />
      <ProjectContext step="Project POs" />
      <ProjectShell active="pos">
        <ProjectTabs active="pos" />
        <section className="form-block"><p className="muted" style={{ margin: 0 }}>Selected project: {activeProjectRecord.mark} - {activeProjectRecord.name}. Use the top project switcher to change scope.</p></section>
        <section className="kanban" style={{ marginTop: 16 }}>{["Current", "Pending", "Previous"].map((phase) => <POLane key={phase} phase={phase} orders={orders.filter((po) => po.phase === phase)} />)}</section>
        <Panel title="Operational PO List" style={{ marginTop: 16 }}>
          <Table headers={["PO", "FGPN", "Qty", "Delivered", "Remaining", "Amount", "Actions"]} rows={orders.map((po) => (
            <tr key={po.po}>
              <td><strong>{po.po}</strong><br /><small>Source PDF stored</small></td>
              <td>{po.fgpn}</td><td>{po.quantity}</td><td>{po.delivered}</td><td>{po.remaining}</td><td>{money(po.remaining * po.unitPrice)}</td>
              <td><div className="row-actions"><ActionButton to="/po" poId={po.po}>Open</ActionButton><ActionButton to="/project-simulation" poId={po.po}>Simulate</ActionButton><ActionButton to="/po-history" poId={po.po}>History</ActionButton></div></td>
            </tr>
          ))} />
        </Panel>
      </ProjectShell>
    </>
  );
}

function POLane({ phase, orders }) {
  return (
    <div className="lane">
      <h3>{phase} <span className="pill">{orders.length}</span></h3>
      {orders.length ? orders.map((po) => (
        <div className="mini-card" key={po.po}>
          <strong>{po.po}</strong>
          <div className="muted">{po.fgpn}</div>
          <div className="inline" style={{ marginTop: 8 }}><Badge>{po.status}</Badge><span>{po.remaining}/{po.quantity} remaining</span></div>
          <div className="row-actions" style={{ marginTop: 8 }}><ActionButton to="/po" poId={po.po}>Open</ActionButton></div>
        </div>
      )) : <div className="mini-card"><span className="muted">No {phase.toLowerCase()} POs.</span></div>}
    </div>
  );
}

function Simulation({ scope = "global" }) {
  const [mode, setMode] = useState("multi");
  const modes = { single: "Single PO", multi: "Global Multi-PO", future: "Future Stock" };
  const isGlobal = scope === "global";
  return (
    <>
      <PageHead title={isGlobal ? "Global Launch Simulation" : "Project Simulation"} subtitle={isGlobal ? "Cross-project launch planning across multiple POs from assigned projects." : "Project-specific simulation using the selected project's POs, stock, WIP, and BOM."} actions={<><ActionButton to="/bom">BOM</ActionButton><ActionButton to="/stock">Stock</ActionButton><ActionButton to="/simulation-paper" primary>Extract paper</ActionButton></>} />
      {!isGlobal && <ProjectContext step={mode === "multi" ? "Project multi-PO simulation" : "Project simulation"} />}
      <Panel title="Portfolio Simulation Scope">
        <Table headers={["Project", "Candidate POs", "Remaining qty", "Stock conflict", "Priority"]} rows={projects.map((project) => {
          const orders = purchaseOrders.filter((po) => po.project === project.id && po.remaining > 0);
          const remaining = orders.reduce((sum, po) => sum + po.remaining, 0);
          return <tr key={project.id}><td>{projectLabel(project.id)}</td><td>{orders.length}</td><td>{remaining}</td><td><Badge>{project.health === "Needs attention" ? "ALU-031" : "None"}</Badge></td><td>Earliest delivery</td></tr>;
        })} />
      </Panel>
      <section className="form-block mode-switcher" style={{ marginTop: 16 }}>
        <label className="field"><span>Simulation type</span><select value={mode} onChange={(e) => setMode(e.target.value)}>{Object.entries(modes).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
        <div className="row-actions"><button disabled={mode === "single"} onClick={() => setMode("single")}>Previous mode</button><button disabled={mode === "future"} onClick={() => setMode(mode === "single" ? "multi" : "future")}>Next mode</button></div>
      </section>
      <section className="grid two" style={{ marginTop: 16 }}>
        <Panel title={`${modes[mode]} Inputs`}>
          {mode === "multi" ? (
            <div className="form-grid">
              <label className="field"><span>Portfolio scope</span><select><option>All assigned projects</option><option>Atlas mark only</option><option>Selected projects</option></select></label>
              <label className="field"><span>PO scope</span><select><option>Current + pending POs across projects</option><option>Selected POs only</option></select></label>
              <label className="field"><span>Priority rule</span><select><option>Earliest delivery date first</option><option>Highest PO value first</option></select></label>
              <label className="field"><span>Meeting minutes PDF</span><input type="file" /></label>
            </div>
          ) : (
            <div className="form-grid">
              <label className="field"><span>Purchase order</span><select>{purchaseOrders.map((po) => <option key={po.po}>{po.po} - {po.fgpn}</option>)}</select></label>
              <label className="field"><span>Safety coefficient</span><input defaultValue="2" /></label>
              <label className="field"><span>Meeting minutes PDF</span><input type="file" /></label>
            </div>
          )}
          <div className="row-actions action-bar"><button className="primary">Run simulation</button><ActionButton to="/simulation-paper">Extract paper</ActionButton><ActionButton to="/warehouse">Finalize launch</ActionButton></div>
        </Panel>
        <Panel title="Launch Decision">
          <Table headers={["PO", "Decision", "Max launchable", "Open quantity"]} rows={[
            <tr key="1"><td>PO24073101</td><td><Badge>Partial launch</Badge></td><td>220</td><td>80</td></tr>,
            <tr key="2"><td>PO24073102</td><td><Badge>Not launched</Badge></td><td>0</td><td>180</td></tr>,
            <tr key="3"><td>PO24073103</td><td><Badge>Full launch</Badge></td><td>120</td><td>0</td></tr>,
          ]} />
        </Panel>
      </section>
    </>
  );
}

function GlobalFinance() {
  const openOrders = purchaseOrders.filter((po) => po.remaining > 0);
  const totalOpenValue = openOrders.reduce((sum, po) => sum + po.remaining * po.unitPrice, 0);
  const forecastQty = openOrders.reduce((sum, po) => sum + po.remaining, 0);
  return (
    <>
      <PageHead title="Global Finance" subtitle="Portfolio recovery, forecast, invoice, and transport view across all assigned projects." actions={<><ActionButton to="/">Portfolio overview</ActionButton><ActionButton to="/project" primary>Open selected project</ActionButton></>} />
      <section className="form-block"><div className="form-grid three"><label className="field"><span>Scope</span><select><option>All assigned projects</option><option>Atlas mark</option></select></label><label className="field"><span>Period</span><select><option>Current calendar month</option><option>Next calendar month</option></select></label><label className="field"><span>Issue filter</span><select><option>All finance states</option><option>Invoice pending</option></select></label></div></section>
      <section className="grid four" style={{ marginTop: 16 }}><Metric label="Open PO value" value={money(totalOpenValue)} note="Remaining value across portfolio." /><Metric label="Forecast quantity" value={forecastQty} note="Open launch quantity." /><Metric label="Invoice pending" value="2" note="Customer evidence or invoice missing." /><Metric label="Recovered" value={money(5425)} note="Confirmed deliveries this month." /></section>
      <Panel title="Finance by Project" style={{ marginTop: 16 }}>
        <Table headers={["Project", "Forecast", "Actual", "Open invoice", "Recovery status", "Open"]} rows={projects.map((project) => {
          const orders = purchaseOrders.filter((po) => po.project === project.id);
          const forecast = orders.reduce((sum, po) => sum + po.remaining * po.unitPrice, 0);
          return <tr key={project.id}><td>{projectLabel(project.id)}</td><td>{money(forecast)}</td><td>{money(Math.round(forecast * 0.62))}</td><td><Badge>{project.health === "Needs attention" ? "Pending" : "OK"}</Badge></td><td><Badge>{project.health === "Needs attention" ? "Recoverable transport" : "Recovered"}</Badge></td><td><ActionButton to="/finance" projectId={project.id}>Project finance</ActionButton></td></tr>;
        })} />
      </Panel>
    </>
  );
}

function ModulePage({ title, active }) {
  return (
    <>
      <PageHead title={title} subtitle="Project-specific shell kept inside the selected project context." actions={<ActionButton to="/project">Project workspace</ActionButton>} />
      <ProjectContext step={title} />
      <ProjectShell active={active}>
        <ProjectTabs active={active} />
        <GenericModuleContent title={title} />
      </ProjectShell>
    </>
  );
}

function GenericModuleContent({ title }) {
  const { activeProject } = useApp();
  return (
    <section className="grid two" style={{ marginTop: 16 }}>
      <Panel title={`${title} Controls`}>
        <div className="form-grid">
          <label className="field"><span>Selected project</span><input value={projectLabel(activeProject)} readOnly /></label>
          <label className="field"><span>Status</span><select><option>Ready</option><option>Pending</option><option>Blocked</option></select></label>
        </div>
        <div className="row-actions action-bar"><button className="primary">Save</button><button>Export</button><ActionButton to="/audit">Audit evidence</ActionButton></div>
      </Panel>
      <Panel title="Traceable Records">
        <Table headers={["Record", "Status", "Next"]} rows={[
          <tr key="1"><td>{title} record</td><td><Badge>Ready</Badge></td><td><ActionButton to="/project">Workspace</ActionButton></td></tr>,
          <tr key="2"><td>Linked evidence</td><td><Badge>Included</Badge></td><td><ActionButton to="/audit">Audit</ActionButton></td></tr>,
        ]} />
      </Panel>
    </section>
  );
}

function POReview() { return <ModulePage title="PO Review" active="po" />; }
function POHistory() { return <ModulePage title="PO History" active="po" />; }
function POStatus() { return <ModulePage title="PO Status" active="po" />; }
function POUpload() { return <ModulePage title="PO Upload" active="pos" />; }
function SimulationPaper() { return <ModulePage title="Simulation Paper" active="simulation" />; }
function BOM() { return <ModulePage title="BOM" active="bom" />; }
function Stock() { return <ModulePage title="Stock Readiness" active="stock" />; }
function Warehouse() { return <ModulePage title="Warehouse Handoff" active="warehouse" />; }
function CustomerDelivery() { return <ModulePage title="Customer Delivery" active="delivery" />; }
function Finance() { return <ModulePage title="Project Finance" active="finance" />; }
function Audit() { return <ModulePage title="Audit Trail" active="audit" />; }

function StoryMap() {
  const rows = [
    ["Global", "Launch Engineer sees all assigned projects", "/"],
    ["Project", "Engineer enters a selected project workspace", "/project"],
    ["PO", "Engineer opens one PO detail surface", "/po"],
    ["Simulation", "Engineer runs global or project simulation", "/simulation"],
    ["Finance", "Engineer reviews global and project recovery", "/global-finance"],
  ];
  return <><PageHead title="Story Map" subtitle="Route-level architecture coverage." actions={<ActionButton to="/">Portfolio overview</ActionButton>} /><Panel title="Coverage">{<Table headers={["Area", "Story", "Route"]} rows={rows.map(([a, s, r]) => <tr key={a}><td>{a}</td><td>{s}</td><td><ActionButton to={r}>Open</ActionButton></td></tr>)} />}</Panel></>;
}

function Metric({ label, value, note, to, action }) {
  return <div className="metric"><span>{label}</span><strong>{value}</strong><small>{note}</small>{to && <ActionButton to={to}>{action}</ActionButton>}</div>;
}

function Panel({ title, action, children, style }) {
  return <section className="panel" style={style}><div className="toolbar"><h2 style={{ marginRight: "auto" }}>{title}</h2>{action}</div>{children}</section>;
}

function ProjectCard({ project }) {
  const orders = purchaseOrders.filter((po) => po.project === project.id);
  const remaining = orders.reduce((sum, po) => sum + po.remaining, 0);
  const current = orders.filter((po) => po.phase === "Current").length;
  const pending = orders.filter((po) => po.phase === "Pending").length;
  const previous = orders.filter((po) => po.phase === "Previous").length;
  return (
    <article className="project-card">
      <div className="project-card-head"><div><span>{project.mark}</span><h2>{project.name}</h2></div><Badge>{project.health}</Badge></div>
      <p>{project.program} / {project.plantLine}</p>
      <dl>
        <div><dt>Current</dt><dd>{current}</dd></div>
        <div><dt>Pending</dt><dd>{pending}</dd></div>
        <div><dt>Previous</dt><dd>{previous}</dd></div>
        <div><dt>Remaining</dt><dd>{remaining}</dd></div>
        <div><dt>Phase</dt><dd>{project.phase}</dd></div>
        <div><dt>SOP</dt><dd>{project.sopDate}</dd></div>
      </dl>
      <div className="row-actions"><ActionButton to="/project" projectId={project.id} primary>Open project</ActionButton><ActionButton to="/simulation" projectId={project.id}>Simulate</ActionButton></div>
    </article>
  );
}

function PORow({ po }) {
  return <tr><td><strong>{po.po}</strong><br /><small>{po.fgpn}</small></td><td><Badge>{po.phase}</Badge></td><td><Badge>{po.status}</Badge></td><td>{po.remaining} / {po.quantity}</td><td><ActionButton to="/po" poId={po.po}>Open PO</ActionButton></td></tr>;
}

function WorkflowStep({ n, title, note, active }) {
  return <div className={`workflow-step ${active ? "active" : ""}`}><span>{n}</span><strong>{title}</strong><small>{note}</small></div>;
}

function projectLabel(id) {
  const project = projects.find((item) => item.id === id);
  return project ? `${project.mark} - ${project.name}` : id;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AppProvider>
        <Layout />
      </AppProvider>
    </HashRouter>
  </React.StrictMode>
);

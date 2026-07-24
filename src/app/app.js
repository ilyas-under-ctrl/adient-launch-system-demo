import { adminApi, ensureAdminSession } from "../api/admin.js";
import { operationsApi } from "../api/operations.js";
import { renderSidebar } from "../layout/sidebar.js";
import { renderTopbar } from "../layout/topbar.js";
import * as dashboardPage from "../features/dashboard/page.js";
import * as projectsPage from "../features/projects/list-page.js";
import * as projectWorkspacePage from "../features/projects/workspace-page.js";
import * as simulationPage from "../features/simulation/page.js";
import * as launchPlannerPage from "../features/launches/planner-page.js";
import * as launchesPage from "../features/launches/list-page.js";
import * as stockPage from "../features/stock/page.js";
import * as warehousePage from "../features/warehouse/page.js";
import * as usersPage from "../features/admin/users-page.js";
import * as assignmentsPage from "../features/admin/assignments-page.js";
import * as referencesPage from "../features/admin/references-page.js";
import * as auditPage from "../features/admin/audit-page.js";
import * as loginPage from "../features/login/page.js";
import { createRouter, exact, startsWith } from "./router.js";
import { createStore } from "./store.js";

const routes = [
  { match: exact("/login"), page: loginPage, public: true },
  { match: exact("/overview"), page: dashboardPage, roles: ["engineer", "manager"] },
  { match: exact("/projects"), page: projectsPage, roles: ["engineer", "manager"] },
  { match: startsWith("/projects/"), page: projectWorkspacePage, roles: ["engineer", "manager"] },
  { match: exact("/simulation"), page: simulationPage, roles: ["engineer", "manager"] },
  { match: exact("/launches/new"), page: launchPlannerPage, roles: ["engineer", "manager"] },
  { match: exact("/launches"), page: launchesPage, roles: ["engineer", "manager", "wh_lead"] },
  { match: exact("/stock"), page: stockPage, roles: ["engineer", "manager", "wh_lead"] },
  { match: exact("/warehouse"), page: warehousePage, roles: ["wh_lead"] },
  { match: exact("/admin/users"), page: usersPage, roles: ["admin"] },
  { match: exact("/admin/assignments"), page: assignmentsPage, roles: ["admin"] },
  { match: exact("/admin/references"), page: referencesPage, roles: ["admin"] },
  { match: exact("/admin/audit"), page: auditPage, roles: ["admin"] },
  { match: () => true, fallback: true },
];

const referenceTypes = ["jit_customer", "contact", "fgpn", "mfg_receiver", "delivery_method", "material_type"];

export function createApplication() {
  const store = createStore();
  const roots = {
    sidebar: document.querySelector("#sidebar"),
    topbar: document.querySelector("#topbar"),
    page: document.querySelector("#page"),
  };
  let router;

  const api = { operations: operationsApi, admin: adminApi };
  const context = {
    store,
    api,
    get router() { return router; },
    async refreshOperations() {
      const operations = await operationsApi.bootstrap(store.get().role);
      store.set({ operations });
      return operations;
    },
    async refreshAdmin() {
      await ensureAdminSession();
      const [users, projects, assignments, events, ...referenceLists] = await Promise.all([
        adminApi.users(),
        adminApi.projects(),
        adminApi.assignments(),
        adminApi.events(),
        ...referenceTypes.map((type) => adminApi.references(type)),
      ]);
      const references = Object.fromEntries(referenceTypes.map((type, index) => [type, referenceLists[index]]));
      const admin = { users, projects, assignments, events, references };
      store.set({ admin });
      return admin;
    },
    async changeRole(role) {
      store.setRole(role);
      const destination = role === "admin" ? "/admin/users" : role === "wh_lead" ? "/warehouse" : "/overview";
      renderChrome();
      router.go(destination);
      try {
        if (role === "admin") await context.refreshAdmin();
        else await context.refreshOperations();
        await router.refresh();
      } catch (error) {
        console.error("Backend data could not be loaded:", error);
      }
    },
    login(role) {
      return context.changeRole(role);
    },
    logout() {
      store.clearRole();
      roots.sidebar.innerHTML = "";
      roots.topbar.innerHTML = "";
      document.body.classList.add("login-mode");
      router.go("/login");
    },
  };

  function renderChrome() {
    if (!store.get().role) return;
    document.body.classList.remove("login-mode");
    renderSidebar(roots.sidebar, context);
    renderTopbar(roots.topbar, context);
  }

  async function renderRoute(route, location) {
    const role = store.get().role;
    if (route.fallback || (!route.public && !route.roles.includes(role))) {
      const destination = !role ? "/login" : role === "admin" ? "/admin/users" : role === "wh_lead" ? "/warehouse" : "/overview";
      if (location.path !== destination) router.go(destination);
      return null;
    }
    if (route.public) {
      document.body.classList.add("login-mode");
      roots.sidebar.innerHTML = "";
      roots.topbar.innerHTML = "";
    }
    renderChrome();
    roots.page.innerHTML = `<div class="page-loading"><span></span>Loading workspace...</div>`;
    try {
      roots.page.innerHTML = route.page.render({ ...context, location });
      roots.page.focus({ preventScroll: true });
      return route.page.mount?.(roots.page, { ...context, location }) || null;
    } catch (error) {
      roots.page.innerHTML = `<section class="error-panel"><strong>Unable to open this workspace</strong><p>${error.message}</p><button class="button secondary" id="retry-page">Retry</button></section>`;
      roots.page.querySelector("#retry-page").addEventListener("click", () => window.location.reload());
      return null;
    }
  }

  router = createRouter(routes, renderRoute);

  return {
    async start() {
      if (!store.get().role) {
        if (window.location.hash !== "#/login") window.location.hash = "/login";
        router.start();
        return;
      }
      renderChrome();
      roots.page.innerHTML = `<div class="page-loading"><span></span>Connecting to LaunchOps...</div>`;
      try {
        if (store.get().role === "admin") await context.refreshAdmin();
        else await context.refreshOperations();
      } catch (error) {
        roots.page.innerHTML = `<section class="error-panel"><strong>FastAPI is not available</strong><p>${error.message}. Start the API with <code>npm run api</code>.</p></section>`;
        return;
      }
      router.start();
    },
  };
}

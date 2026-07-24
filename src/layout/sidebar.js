import { navigationFor, roleName } from "../app/navigation.js";
import { escapeHtml } from "../components/html.js";

export function renderSidebar(root, context) {
  const { role } = context.store.get();
  const path = location.hash.slice(1) || "/overview";
  root.innerHTML = `
    <div class="brand"><img src="/adient-brand.webp" alt="Adient"><div><strong>LaunchOps</strong><span>PO Control Center</span></div></div>
    <div class="role-summary"><span>Workspace</span><strong>${escapeHtml(roleName(role))}</strong></div>
    <nav aria-label="${escapeHtml(roleName(role))} navigation">
      ${navigationFor(role).map(([key, label, href]) => `
        <a href="#${href}" class="${path.startsWith(href) ? "active" : ""}" data-key="${key}">
          <span class="nav-mark" aria-hidden="true"></span>${escapeHtml(label)}
        </a>`).join("")}
    </nav>
    <div class="sidebar-foot"><strong>${escapeHtml(roleName(role))}</strong><span>Working prototype</span></div>`;
}

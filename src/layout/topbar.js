import { roleName } from "../app/navigation.js";
import { escapeHtml } from "../components/html.js";

export function renderTopbar(root, context) {
  const { role } = context.store.get();
  root.innerHTML = `
    <button class="icon-button menu-button" type="button" aria-label="Toggle navigation">&#9776;</button>
    <div class="breadcrumb"><span>LaunchOps</span><strong>${escapeHtml(roleName(role))}</strong></div>
    <label class="global-search"><span class="sr-only">Search</span><input type="search" placeholder="Search projects, POs, materials..."></label>
    <button class="button secondary sign-out" type="button">Sign out</button>
    <span class="avatar" aria-label="${escapeHtml(roleName(role))}">${roleName(role).split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>`;
  root.querySelector(".menu-button").addEventListener("click", () => document.body.classList.toggle("nav-open"));
  root.querySelector(".sign-out").addEventListener("click", context.logout);
}

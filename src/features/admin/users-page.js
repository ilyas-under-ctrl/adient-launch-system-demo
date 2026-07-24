import { escapeHtml, formatDate } from "../../components/html.js";
import { badge, bindAsync, pageHeader, showNotice } from "../../components/ui.js";

const roles = ["PLANT_MANAGER", "LAUNCH_MANAGER", "LAUNCH_ENGINEER", "WAREHOUSE_TEAM_LEADER", "WAREHOUSE_PERSONNEL", "PRODUCTION_PACKING_COORDINATOR", "SYSTEM_ADMIN"];

function userRows(users) {
  return users.map((user) => `<tr>
    <td><strong>${escapeHtml(user.full_name)}</strong><small>@${escapeHtml(user.username)}</small></td>
    <td>${escapeHtml(user.role.replaceAll("_", " "))}</td><td>${badge(user.status)}</td>
    <td>${user.locked_at ? badge("Locked") : "Available"}</td><td>${formatDate(user.last_login_at)}</td>
    <td><div class="table-actions">
      <button class="icon-button user-toggle" data-id="${user.id}" data-action="${user.status === "ACTIVE" ? "deactivate" : "reactivate"}" title="${user.status === "ACTIVE" ? "Deactivate" : "Reactivate"}">${user.status === "ACTIVE" ? "&#10005;" : "&#10003;"}</button>
      ${user.locked_at ? `<button class="icon-button user-unlock" data-id="${user.id}" title="Unlock">&#128275;</button>` : ""}
      <button class="icon-button user-reset" data-id="${user.id}" title="Reset password">&#8635;</button>
    </div></td>
  </tr>`).join("");
}

export function render({ store }) {
  const users = store.get().admin.users;
  return `${pageHeader("User accounts", "Create accounts, control access status, unlock users, and reset passwords.")}
    <section class="panel">
      <div class="panel-head"><div><h2>Accounts</h2><p>${users.length} configured users</p></div></div>
      <form id="create-user" class="inline-create">
        <label><span>Full name</span><input name="full_name" required></label>
        <label><span>Username</span><input name="username" required></label>
        <label><span>Role</span><select name="role">${roles.map((role) => `<option>${role}</option>`).join("")}</select></label>
        <label><span>Temporary password</span><input name="password" type="password" minlength="8" value="Temporary123!" required></label>
        <button class="button primary" type="submit">Add user</button>
      </form>
      <div class="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Status</th><th>Access</th><th>Last login</th><th>Actions</th></tr></thead><tbody id="user-rows">${userRows(users)}</tbody></table></div>
    </section>`;
}

export function mount(root, context) {
  const refresh = async () => {
    await context.refreshAdmin();
    root.querySelector("#user-rows").innerHTML = userRows(context.store.get().admin.users);
    bindActions();
  };
  const bindActions = () => {
    bindAsync(root, ".user-toggle", async (_, button) => {
      await context.api.admin.userAction(button.dataset.id, button.dataset.action);
      await refresh();
      showNotice("Account status updated.");
    });
    bindAsync(root, ".user-unlock", async (_, button) => {
      await context.api.admin.userAction(button.dataset.id, "unlock");
      await refresh();
      showNotice("Account unlocked.");
    });
    bindAsync(root, ".user-reset", async (_, button) => {
      await context.api.admin.userAction(button.dataset.id, "reset-password", { password: "Temporary123!" });
      showNotice("Temporary password set to Temporary123!.");
    });
  };
  root.querySelector("#create-user").addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await context.api.admin.createUser({ ...data, email: null, phone: null, location: null });
    event.currentTarget.reset();
    await refresh();
    showNotice("User account created.");
  });
  bindActions();
}

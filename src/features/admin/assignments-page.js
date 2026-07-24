import { escapeHtml } from "../../components/html.js";
import { bindAsync, emptyState, pageHeader, showNotice } from "../../components/ui.js";

function assignmentRows(assignments) {
  return assignments.map((item) => `<tr><td>${escapeHtml(item.project_name)}</td><td><strong>${escapeHtml(item.user_name)}</strong><small>@${escapeHtml(item.username)}</small></td><td>${escapeHtml(item.assignment_role.replaceAll("_", " "))}</td><td><button class="icon-button remove-assignment" data-id="${item.id}" title="Remove assignment">&#128465;</button></td></tr>`).join("");
}

export function render({ store }) {
  const { users, projects, assignments } = store.get().admin;
  const eligible = users.filter((user) => ["LAUNCH_ENGINEER", "LAUNCH_MANAGER"].includes(user.role) && user.status === "ACTIVE");
  return `${pageHeader("Project assignments", "Assignments control edit access; managers retain read-only visibility across other projects.")}
    <section class="panel">
      <form id="assignment-form" class="inline-create">
        <label><span>Project</span><select name="project_id" required>${projects.map((project) => `<option value="${project.id}">${escapeHtml(project.name)}</option>`).join("")}</select></label>
        <label><span>User</span><select name="user_id" required>${eligible.map((user) => `<option value="${user.id}" data-role="${user.role}">${escapeHtml(user.full_name)} · ${escapeHtml(user.role)}</option>`).join("")}</select></label>
        <button class="button primary" type="submit">Assign</button>
      </form>
      <div class="table-wrap"><table><thead><tr><th>Project</th><th>User</th><th>Responsibility</th><th>Remove</th></tr></thead><tbody id="assignment-rows">${assignmentRows(assignments)}</tbody></table></div>
      ${assignments.length ? "" : emptyState("No assignments", "Assign an engineer or manager to a project.")}
    </section>`;
}

export function mount(root, context) {
  const refresh = async () => {
    await context.refreshAdmin();
    root.querySelector("#assignment-rows").innerHTML = assignmentRows(context.store.get().admin.assignments);
    bindRemove();
  };
  const bindRemove = () => bindAsync(root, ".remove-assignment", async (_, button) => {
    await context.api.admin.deleteAssignment(button.dataset.id);
    await refresh();
    showNotice("Assignment removed.");
  });
  root.querySelector("#assignment-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const selected = event.currentTarget.elements.user_id.selectedOptions[0];
    values.assignment_role = selected.dataset.role === "LAUNCH_MANAGER" ? "responsible_manager" : "responsible_engineer";
    await context.api.admin.createAssignment(values);
    await refresh();
    showNotice("Project assignment created.");
  });
  bindRemove();
}

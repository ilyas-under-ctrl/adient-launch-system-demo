import { showNotice } from "../../components/ui.js";

const demoRoles = [
  ["engineer", "Launch Engineer", "Assigned projects, simulations, and launch planning"],
  ["manager", "Launch Manager", "Portfolio visibility and assigned-project launch control"],
  ["wh_lead", "Warehouse Team Leader", "Delivery codes, transfer documents, and signed reception"],
  ["admin", "System Administrator", "Users, assignments, reference lists, and login audit"],
];

export function render() {
  return `<div class="login-page">
    <section class="login-panel">
      <div class="login-brand"><img src="/adient-brand.webp" alt="Adient"><div><strong>LaunchOps</strong><span>PO Control Center</span></div></div>
      <div class="login-copy"><h1>Sign in</h1><p>Authentication will be connected later. Use a demo workspace below for now.</p></div>
      <form id="login-form" class="login-form">
        <label><span>Username</span><input name="username" autocomplete="username" placeholder="Enter username"></label>
        <label><span>Password</span><input name="password" type="password" autocomplete="current-password" placeholder="Enter password"></label>
        <button class="button secondary" type="submit">Sign in with credentials</button>
      </form>
      <div class="demo-divider"><span>Demo access</span></div>
      <div class="demo-roles">${demoRoles.map(([role, label, detail]) => `<button class="demo-role" type="button" data-role="${role}"><span><strong>${label}</strong><small>${detail}</small></span><b aria-hidden="true">&#8250;</b></button>`).join("")}</div>
    </section>
  </div>`;
}

export function mount(root, context) {
  root.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showNotice("Credential login will be connected later. Choose a demo role below.", "danger");
  });
  root.querySelectorAll(".demo-role").forEach((button) => {
    button.addEventListener("click", () => context.login(button.dataset.role));
  });
}

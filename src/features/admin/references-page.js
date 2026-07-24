import { escapeHtml } from "../../components/html.js";
import { badge, bindAsync, pageHeader, showNotice } from "../../components/ui.js";

export const referenceTypes = {
  jit_customer: "Customers",
  contact: "Contacts",
  fgpn: "Finished-good part numbers",
  mfg_receiver: "Manufacturing receivers",
  delivery_method: "Delivery methods",
  material_type: "Material types",
};

function entriesMarkup(entries, type) {
  return entries.map((entry) => `<tr><td><strong>${escapeHtml(entry.label)}</strong><small>${escapeHtml(entry.project_name || referenceTypes[type])}</small></td><td>${entry.linked_records_count}</td><td>${badge(entry.status)}</td><td><div class="table-actions"><button class="icon-button toggle-reference" data-id="${entry.id}" title="Toggle status">&#8644;</button><button class="icon-button delete-reference" data-id="${entry.id}" title="Delete">&#128465;</button></div></td></tr>`).join("");
}

export function render({ store }) {
  const type = "jit_customer";
  const entries = store.get().admin.references[type] || [];
  return `${pageHeader("Reference lists", "Maintain shared controlled values used by operational forms.")}
    <section class="panel">
      <div class="toolbar"><label><span>Reference list</span><select id="reference-type">${Object.entries(referenceTypes).map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`).join("")}</select></label></div>
      <form id="reference-form" class="inline-create"><label><span>New label</span><input name="label" required></label><label id="reference-project-field" hidden><span>Project</span><select name="project_id">${store.get().admin.projects.map((project) => `<option value="${project.id}">${escapeHtml(project.name)}</option>`).join("")}</select></label><button class="button primary" type="submit">Add entry</button></form>
      <div class="table-wrap"><table><thead><tr><th>Entry</th><th>Linked records</th><th>Status</th><th>Actions</th></tr></thead><tbody id="reference-rows">${entriesMarkup(entries, type)}</tbody></table></div>
    </section>`;
}

export function mount(root, context) {
  let type = "jit_customer";
  const refresh = async () => {
    const entries = await context.api.admin.references(type);
    context.store.get().admin.references[type] = entries;
    root.querySelector("#reference-rows").innerHTML = entriesMarkup(entries, type);
    bindActions();
  };
  const bindActions = () => {
    bindAsync(root, ".toggle-reference", async (_, button) => {
      await context.api.admin.toggleReference(type, button.dataset.id);
      await refresh();
      showNotice("Reference status updated.");
    });
    bindAsync(root, ".delete-reference", async (_, button) => {
      await context.api.admin.deleteReference(type, button.dataset.id);
      await refresh();
      showNotice("Reference entry deleted.");
    });
  };
  root.querySelector("#reference-type").addEventListener("change", async (event) => {
    type = event.target.value;
    root.querySelector("#reference-project-field").hidden = type !== "fgpn";
    await refresh();
  });
  root.querySelector("#reference-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    await context.api.admin.createReference(type, { label: values.label, project_id: type === "fgpn" ? values.project_id : null });
    event.currentTarget.querySelector("[name=label]").value = "";
    await refresh();
    showNotice("Reference entry added.");
  });
  bindActions();
}

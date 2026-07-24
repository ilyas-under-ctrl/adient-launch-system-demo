import { escapeHtml, formatNumber } from "../../components/html.js";
import { badge, pageHeader, showNotice } from "../../components/ui.js";

function instruction(launch, receivers) {
  return `<section class="panel warehouse-instruction">
    <div class="panel-head"><div><h2>${escapeHtml(launch.id)}</h2><p>${escapeHtml(launch.project)} · ${escapeHtml(launch.po)}</p></div>${badge(launch.status)}</div>
    <div class="code-strip"><span>Validated code</span><strong class="mono">${escapeHtml(launch.code)}</strong></div>
    <div class="table-wrap"><table><thead><tr><th>Material</th><th>Description</th><th>Quantity</th><th>Required time</th></tr></thead><tbody>
      ${launch.materials.map((line) => `<tr><td class="mono">${escapeHtml(line.code)}</td><td>${escapeHtml(line.desc)}</td><td>${formatNumber(line.qty)} ${escapeHtml(line.unit || "")}</td><td>${escapeHtml(line.requiredTime || "Not set")}</td></tr>`).join("")}
    </tbody></table></div>
    <div class="workflow-form">
      <label><span>Manufacturing receiver</span><select id="warehouse-receiver"><option value="">Select receiver</option>${receivers.map((item) => `<option ${launch.receiver === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>
      <button id="save-receiver" class="button secondary" type="button">Save receiver</button>
      <button id="generate-document" class="button secondary" type="button" ${launch.receiver ? "" : "disabled"}>Generate transfer document</button>
      <label class="file-inline"><span>Signed reception PDF</span><input id="signed-reception" type="file" accept="application/pdf,.pdf"></label>
      <button id="upload-reception" class="button primary" type="button" ${launch.status === "Waiting for Signed PDF" ? "" : "disabled"}>Upload signed PDF</button>
    </div>
  </section>`;
}

export function render() {
  return `${pageHeader("Warehouse code access", "Enter a single-use delivery code to open only its associated instruction.")}
    <section class="panel code-entry"><form id="code-form"><label><span>Delivery code</span><input id="delivery-code" class="mono" required placeholder="DEL-YYYYMMDD-XXXXXX"></label><button class="button primary" type="submit">Open instruction</button></form></section>
    <div id="warehouse-result"></div>`;
}

export function mount(root, context) {
  let current = null;
  const result = root.querySelector("#warehouse-result");
  const bindWorkflow = () => {
    root.querySelector("#save-receiver")?.addEventListener("click", async () => {
      current = await context.api.operations.setReceiver(current.id, root.querySelector("#warehouse-receiver").value);
      result.innerHTML = instruction(current, context.store.get().operations.receivers);
      bindWorkflow();
      showNotice("Manufacturing receiver saved.");
    });
    root.querySelector("#generate-document")?.addEventListener("click", async () => {
      current = await context.api.operations.generateDocument(current.id);
      result.innerHTML = instruction(current, context.store.get().operations.receivers);
      bindWorkflow();
      showNotice("Transfer document generated.");
    });
    root.querySelector("#upload-reception")?.addEventListener("click", async () => {
      const file = root.querySelector("#signed-reception").files[0];
      if (!file) return showNotice("Select the signed reception PDF.", "danger");
      const form = new FormData();
      form.set("signed_pdf", file);
      current = await context.api.operations.uploadReception(current.id, form);
      await context.refreshOperations();
      result.innerHTML = instruction(current, context.store.get().operations.receivers);
      bindWorkflow();
      showNotice("Signed reception uploaded for engineer validation.");
    });
  };
  root.querySelector("#code-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    current = await context.api.operations.verifyCode(root.querySelector("#delivery-code").value);
    result.innerHTML = instruction(current, context.store.get().operations.receivers);
    bindWorkflow();
  });
}

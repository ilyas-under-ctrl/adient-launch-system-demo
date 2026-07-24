import { escapeHtml } from "./html.js";

export function pageHeader(title, description, actions = "") {
  return `<header class="page-header"><div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div>${actions ? `<div class="page-actions">${actions}</div>` : ""}</header>`;
}

export function metric(label, value, detail = "") {
  return `<article class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(detail)}</small></article>`;
}

export function badge(status) {
  const tone = /deliver|active|feasible|generated|uploaded/i.test(status)
    ? "success"
    : /expire|blocked|missing|invalid/i.test(status)
      ? "danger"
      : /waiting|progress|used/i.test(status) ? "warning" : "neutral";
  return `<span class="badge ${tone}">${escapeHtml(status || "Unknown")}</span>`;
}

export function emptyState(title, detail) {
  return `<div class="empty"><strong>${escapeHtml(title)}</strong><p>${escapeHtml(detail)}</p></div>`;
}

export function showNotice(message, tone = "success") {
  const node = document.querySelector("#toast");
  node.textContent = message;
  node.className = `app-notice visible ${tone}`;
  clearTimeout(showNotice.timer);
  showNotice.timer = setTimeout(() => { node.className = "app-notice"; }, 3200);
}

export function bindAsync(root, selector, handler) {
  root.querySelectorAll(selector).forEach((element) => {
    element.addEventListener("click", async (event) => {
      event.preventDefault();
      element.disabled = true;
      try {
        await handler(event, element);
      } catch (error) {
        showNotice(error.message, "danger");
      } finally {
        element.disabled = false;
      }
    });
  });
}

const form = document.querySelector("#signup-form");
const statusEl = document.querySelector("#status");
// BUG: the button id in index.html is submit-btn, not sendBtn.
const submitBtn = document.querySelector("#sendBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();

  if (!name || !email) {
    showStatus("Name and email are required.");
    return;
  }

  submitBtn.disabled = true;
  showStatus("Submitting...");

  window.setTimeout(() => {
    submitBtn.disabled = false;
    form.reset();
    showStatus("You're on the list.");
  }, 400);
});

function showStatus(message) {
  statusEl.hidden = false;
  statusEl.textContent = message;
}


const $ = (sel, ctx = document) => ctx.querySelector(sel);

function setupYear(){
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}
function setupNav(){
  const btn = $(".nav-toggle");
  const nav = document.querySelector("header nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!open));
    btn.setAttribute("aria-expanded", String(!open));
  });
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && e.target !== btn) {
      nav.setAttribute("data-open","false");
      btn.setAttribute("aria-expanded","false");
    }
  });
}
function setupContactForm(){
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", (e) => {
    if (form.action.includes("your-form-id")) {
      e.preventDefault();
      status.textContent = "Form demo: add your Formspree ID in contact.html to enable sending.";
    }
  });
}

setupYear();
setupNav();
setupContactForm();

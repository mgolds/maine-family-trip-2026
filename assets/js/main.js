/* Goldsberry Maine Family Trip 2026 */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  highlightActiveNav();
  initLightbox();
});

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
    toggle.textContent = open ? "Close" : "Menu";
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && nav.classList.contains("open")) {
      setOpen(false);
    }
  });
}

function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const file = href.split("/").pop();
    if (file === path || (path === "" && file === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function initLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Image preview");
  lightbox.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
    <img src="" alt="" />
  `;
  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  let scrollY = 0;

  function open(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || "";
    lightbox.classList.add("open");
    scrollY = window.scrollY || window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove("open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
    imgEl.src = "";
  }

  document.querySelectorAll(".gallery figure img").forEach((img) => {
    img.addEventListener("click", () => open(img.src, img.alt));
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `Enlarge: ${img.alt || "photo"}`);
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(img.src, img.alt);
      }
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === closeBtn) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) close();
  });
}

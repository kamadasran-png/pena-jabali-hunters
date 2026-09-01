// Base JavaScript for the Peña Jabalí Hunters web.
// B.1: mobile navigation only. Other interactions will be added in later blocks.

document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#mobile-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 760px)").matches) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
}

// Promoción común: La Camiseta de la Suerte.
// Se inserta automáticamente en todas las páginas que cargan main.js.
const promo = document.createElement("aside");
promo.className = "site-promo";
promo.setAttribute("aria-label", "Promoción La Camiseta de la Suerte");
promo.innerHTML = `
  <div class="site-promo__inner">
    <div class="site-promo__text">
      <strong>🍀 LA CAMISETA DE LA SUERTE</strong>
      <span>15 € · 1 camiseta = 1 participación · Tarjeta HUNTERS 3 valorada en 300 €</span>
    </div>
    <a class="cta cta-primary site-promo__cta" href="formulario-camiseta.html">QUIERO MI CAMISETA</a>
  </div>
`;

document.body.prepend(promo);

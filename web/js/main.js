// Base JavaScript for the Peña Jabalí Hunters web.
// B.3: shared navigation + common promotion + interior header alignment.

document.documentElement.classList.add("js");

// Interior pages use #site-nav; the home page uses #mobile-nav.
// Support both so the same mobile navigation behavior works everywhere.
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#mobile-nav, #site-nav");

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

// Las páginas interiores parten de un único <nav id="site-nav">.
// Lo presentamos con la misma composición izquierda / logo / derecha de Inicio,
// sin modificar la estructura de contenidos de esas páginas.
if (document.querySelector("#site-nav")) {
  const headerFix = document.createElement("style");
  headerFix.textContent = `
    @media (min-width: 761px) {
      .site-header__inner:has(> #site-nav) {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .site-header__inner:has(> #site-nav) > #site-nav {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        display: grid;
        grid-template-columns: auto auto auto auto minmax(300px, 1fr) auto auto auto;
        align-items: center;
        column-gap: .85rem;
        z-index: 31;
      }
      .site-header__inner:has(> #site-nav) > #site-nav a {
        min-width: 0;
        padding: .35rem 0;
        white-space: nowrap;
      }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(1) { grid-column: 1; justify-self: start; }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(2) { grid-column: 2; justify-self: start; }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(3) { grid-column: 3; justify-self: start; }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(4) { grid-column: 4; justify-self: start; }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(5) { grid-column: 6; justify-self: end; }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(6) { grid-column: 7; justify-self: end; }
      .site-header__inner:has(> #site-nav) > #site-nav a:nth-child(7) { grid-column: 8; justify-self: end; }
    }

    @media (max-width: 760px) {
      .site-header__inner:has(> #site-nav) > #site-nav {
        display: none;
        position: absolute;
        top: 180px;
        left: 0;
        width: 100%;
        height: auto;
        margin: 0;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding-bottom: .75rem;
        background: var(--charcoal);
        z-index: 60;
      }
      .site-header__inner:has(> #site-nav) > #site-nav.is-open { display: flex; }
      .site-header__inner:has(> #site-nav) > #site-nav a {
        margin: 0;
        padding: .7rem .75rem;
        border-top: 1px solid rgba(245,243,236,.15);
      }
    }

    @media (max-width: 420px) {
      .site-header__inner:has(> #site-nav) > #site-nav { top: 155px; }
    }
  `;
  document.head.appendChild(headerFix);
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

// 2I.3 — Corrección quirúrgica del comportamiento de los botones del footer.
// Solo afecta a Contactar y Reservar dentro del footer, en escritorio y móvil.
const footerFix = document.createElement("style");
footerFix.textContent = `
  .site-footer .footer-block .cta-primary {
    background: var(--orange) !important;
    color: var(--charcoal) !important;
    border-color: var(--orange) !important;
  }
  .site-footer .footer-block .cta-primary:hover,
  .site-footer .footer-block .cta-primary:focus-visible {
    background: #f1842d !important;
    color: var(--charcoal) !important;
    border-color: #f1842d !important;
  }
  .site-footer .footer-block .cta-secondary {
    background: transparent !important;
    color: var(--ivory) !important;
    border-color: var(--ivory) !important;
  }
  .site-footer .footer-block .cta-secondary:hover,
  .site-footer .footer-block .cta-secondary:focus-visible {
    background: var(--ivory) !important;
    color: var(--olive) !important;
    border-color: var(--ivory) !important;
  }
`;
document.head.appendChild(footerFix);

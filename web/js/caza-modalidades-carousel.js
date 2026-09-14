// CARRUSEL DE MODALIDADES — página Caza
(function () {
  "use strict";

  const modalities = [
    { nombre: "Aguardo", archivo: "aguardo 1.jpeg" },
    { nombre: "Al salto", archivo: "al salto.png" },
    { nombre: "Cetrería", archivo: "cetreria.png" },
    { nombre: "Con arco", archivo: "con arco.png" },
    { nombre: "En mano", archivo: "en mano.png" },
    { nombre: "Rececho", archivo: "rececho 1.png" },
    { nombre: "Sueltas", archivo: "sueltas.png" }
  ];

  function init() {
    const root = document.querySelector("[data-pjh-modalidades]");
    if (!root) return;

    const base = "assets/modalidades/";
    let current = 0;
    let visible = 3;

    root.innerHTML = `
      <div class="modalities-carousel" aria-label="Modalidades de caza disponibles">
        <div class="modalities-carousel__viewport">
          <div class="modalities-carousel__track">
            ${modalities.map(item => `
              <figure class="modalities-carousel__slide">
                <img src="${base}${item.archivo}" alt="${item.nombre}" loading="lazy">
              </figure>
            `).join("")}
          </div>
        </div>
        <div class="modalities-carousel__controls">
          <button class="modalities-carousel__arrow modalities-carousel__arrow--prev" type="button" aria-label="Modalidad anterior">←</button>
          <div class="modalities-carousel__dots" aria-label="Seleccionar modalidad"></div>
          <button class="modalities-carousel__arrow modalities-carousel__arrow--next" type="button" aria-label="Siguiente modalidad">→</button>
        </div>
      </div>
    `;

    const track = root.querySelector(".modalities-carousel__track");
    const slides = [...root.querySelectorAll(".modalities-carousel__slide")];
    const prev = root.querySelector(".modalities-carousel__arrow--prev");
    const next = root.querySelector(".modalities-carousel__arrow--next");
    const dotsRoot = root.querySelector(".modalities-carousel__dots");

    function getVisible() {
      if (window.matchMedia("(max-width: 760px)").matches) return 1;
      if (window.matchMedia("(max-width: 900px)").matches) return 2;
      return 3;
    }

    function pageCount() {
      return Math.ceil(modalities.length / visible);
    }

    function buildDots() {
      dotsRoot.innerHTML = Array.from({ length: pageCount() }, (_, index) =>
        `<button type="button" aria-label="Ver grupo ${index + 1}" data-page="${index}"></button>`
      ).join("");
      dotsRoot.querySelectorAll("button").forEach(dot => {
        dot.addEventListener("click", () => goTo(Number(dot.dataset.page)));
      });
    }

    function update() {
      visible = getVisible();
      const maxPage = Math.max(0, pageCount() - 1);
      if (current > maxPage) current = maxPage;
      slides.forEach(slide => { slide.style.flexBasis = `${100 / visible}%`; });
      track.style.transform = `translateX(-${current * 100}%)`;
      const dots = [...dotsRoot.querySelectorAll("button")];
      dots.forEach((dot, index) => dot.setAttribute("aria-current", String(index === current)));
      prev.disabled = current === 0;
      next.disabled = current === maxPage;
    }

    function goTo(page) {
      const maxPage = Math.max(0, pageCount() - 1);
      current = Math.max(0, Math.min(page, maxPage));
      update();
    }

    prev.addEventListener("click", () => goTo(current - 1));
    next.addEventListener("click", () => goTo(current + 1));
    window.addEventListener("resize", () => {
      const newVisible = getVisible();
      if (newVisible !== visible) buildDots();
      update();
    });

    buildDots();
    update();
  }

  const ready = window.PJHDataReady;
  if (ready && typeof ready.then === "function") {
    ready.then(init).catch(() => {});
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

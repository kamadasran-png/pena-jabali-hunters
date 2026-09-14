// CARRUSEL DE ESPECIES — página Caza
(function () {
  "use strict";

  const species = [
    { nombre: "Conejo", archivo: "conejo.jpg" },
    { nombre: "Perdiz", archivo: "perdiz.jpg" },
    { nombre: "Liebre", archivo: "liebre.jpg" },
    { nombre: "Paloma torcaz", archivo: "paloma-torcaz.jpg" },
    { nombre: "Faisán", archivo: "faisan.jpg" },
    { nombre: "Jabalí", archivo: "jabali.jpg" },
    { nombre: "Zorro", archivo: "zorro.jpg" },
    { nombre: "Muflón", archivo: "muflon.jpg" }
  ];

  function init() {
    const root = document.querySelector("[data-pjh-especies]");
    if (!root) return;

    const base = "assets/especies/";
    let current = 0;
    let visible = 3;

    root.innerHTML = `
      <div class="species-carousel" aria-label="Especies disponibles">
        <div class="species-carousel__viewport">
          <div class="species-carousel__track">
            ${species.map(item => `
              <figure class="species-carousel__slide">
                <img src="${base}${item.archivo}" alt="${item.nombre}" loading="lazy">
              </figure>
            `).join("")}
          </div>
        </div>
        <div class="species-carousel__controls">
          <button class="species-carousel__arrow species-carousel__arrow--prev" type="button" aria-label="Especie anterior">←</button>
          <div class="species-carousel__dots" aria-label="Seleccionar especie">
            ${species.map((item, index) => `<button type="button" aria-label="Ver ${item.nombre}" data-index="${index}"></button>`).join("")}
          </div>
          <button class="species-carousel__arrow species-carousel__arrow--next" type="button" aria-label="Siguiente especie">→</button>
        </div>
      </div>
    `;

    const track = root.querySelector(".species-carousel__track");
    const slides = [...root.querySelectorAll(".species-carousel__slide")];
    const prev = root.querySelector(".species-carousel__arrow--prev");
    const next = root.querySelector(".species-carousel__arrow--next");
    const dots = [...root.querySelectorAll(".species-carousel__dots button")];

    function updateVisible() {
      visible = window.matchMedia("(max-width: 760px)").matches ? 1 : 3;
      const max = Math.max(0, species.length - visible);
      if (current > max) current = max;
      track.style.transform = `translateX(-${current * (100 / visible)}%)`;
      slides.forEach(slide => { slide.style.flexBasis = `${100 / visible}%`; });
      dots.forEach((dot, index) => dot.setAttribute("aria-current", index === current ? "true" : "false"));
      prev.disabled = current === 0;
      next.disabled = current === max;
    }

    function goTo(index) {
      const max = Math.max(0, species.length - visible);
      current = Math.max(0, Math.min(index, max));
      updateVisible();
    }

    prev.addEventListener("click", () => goTo(current - 1));
    next.addEventListener("click", () => goTo(current + 1));
    dots.forEach(dot => dot.addEventListener("click", () => goTo(Number(dot.dataset.index))));
    window.addEventListener("resize", updateVisible);

    updateVisible();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

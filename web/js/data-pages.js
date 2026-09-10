// DATA PRESENTATION LAYER — FASE 2
// Consume window.PJHData sin modificar la hoja de estilos ni el diseño base.
(function () {
  "use strict";
  const ready = window.PJHDataReady;
  if (!ready) return;
  const byId = (items, id) => (items || []).find(item => item.id === id);
  const names = (items, ids) => (ids || []).map(id => byId(items, id)?.nombre || id);
  const listHTML = items => items.map(name => `<span>${name}</span>`).join(" · ");

  function renderCotos(data) {
    const root = document.querySelector("[data-pjh-cotos]");
    if (!root) return;
    root.innerHTML = data.cotos.filter(c => c.estado === "activo").map(coto => `
      <section class="section container"><h2>${coto.nombre}</h2>
        <div class="editorial-block"><p class="eyebrow">DATOS DEL COTO</p><h3>Información técnica</h3>
          <div class="technical-data-grid">
            <div class="technical-data-item"><span class="data-label">COTO</span><strong class="technical-value">${coto.numero_coto}</strong></div>
            <div class="technical-data-item"><span class="data-label">SUPERFICIE</span><strong class="technical-value">${coto.superficie} ha${coto.superficie_cazadero ? ` · ${coto.superficie_cazadero} ha cazadero` : ""}</strong></div>
            <div class="technical-data-item"><span class="data-label">ESPECIES</span><strong class="technical-value">${listHTML(names(data.especies, coto.especies))}</strong></div>
            <div class="technical-data-item"><span class="data-label">TEMPORADA</span><strong class="technical-value">${coto.temporada}</strong></div>
          </div>
        </div>
      </section>
      <section class="section container"><h2>Descripción</h2><p>${coto.descripcion}</p>
        <aside class="info-notice" aria-label="Información importante"><p class="eyebrow">INFORMACIÓN IMPORTANTE</p><p>${coto.periodos}</p></aside>
      </section>`).join("");
  }

  function renderCaza(data) {
    const speciesRoot = document.querySelector("[data-pjh-especies]");
    const modalitiesRoot = document.querySelector("[data-pjh-modalidades]");
    const relatedRoot = document.querySelector("[data-pjh-cotos-relacionados]");
    if (speciesRoot) speciesRoot.innerHTML = `<div class="home-grid">${data.especies.map(e => `<article class="card home-card"><h3>${e.nombre}</h3><p>${names(data.cotos, e.cotos).join(" · ")}</p></article>`).join("")}</div>`;
    if (modalitiesRoot) modalitiesRoot.innerHTML = `<div class="home-grid">${data.modalidades.map(m => `<article class="card home-card"><h3>${m.nombre}</h3><p>${names(data.cotos, m.cotos).join(" · ")}</p></article>`).join("")}</div>`;
    if (relatedRoot) relatedRoot.innerHTML = data.cotos.filter(c => c.estado === "activo").map(c => `<a class="card home-card" href="cotos.html"><h3>${c.nombre}</h3><p>${c.superficie} ha · ${names(data.especies, c.especies).slice(0, 5).join(" · ")}</p></a>`).join("");
  }

  function renderTarjetas(data) {
    const template = document.querySelector("[data-pjh-tarjetas]");
    if (!template) return;
    const activeCards = data.tarjetas.filter(t => t.estado === "activo");
    if (!activeCards.length) return;

    const container = template.parentElement;
    if (!container) return;

    const cards = activeCards.map((card, index) => {
      const root = index === 0 ? template : template.cloneNode(true);
      if (index > 0) container.appendChild(root);

      const field = key => root.querySelector(`[data-field="${key}"]`);
      const nameField = field("nombre");
      const priceField = field("precio");
      const availabilityField = field("disponibilidad");
      const cotosField = field("cotos");
      const validityField = field("validez");
      const conditionsField = field("condiciones");
      const titleField = root.querySelector("h3");
      const descriptionField = root.querySelector(".tarjeta-card > p:not(.eyebrow)");
      const imageGrid = root.querySelector(".home-grid");
      const imageItems = root.querySelectorAll(".home-grid > div");

      if (nameField) nameField.textContent = card.nombre;
      if (titleField) titleField.textContent = card.nombre;
      if (priceField) priceField.textContent = `${card.precio} €`;
      if (availabilityField) availabilityField.textContent = `${card.unidades_disponibles} tarjetas`;
      if (cotosField) cotosField.textContent = names(data.cotos, card.cotos).join(" · ");
      if (validityField) validityField.textContent = card.periodo_validez;
      if (conditionsField) conditionsField.innerHTML = card.condiciones.map(c => `<p>${c}</p>`).join("");
      if (descriptionField) descriptionField.textContent = card.dias ? `Una tarjeta con ${card.dias} jornadas de caza incluidas, según las condiciones establecidas.` : "Una tarjeta para disfrutar de los cazaderos de Peña Jabalí Hunters durante el período de vigencia establecido.";

      if (imageGrid) {
        if (card.imagenes && card.imagenes.length) {
          imageItems.forEach((item, imageIndex) => {
            const image = item.querySelector("img");
            const src = card.imagenes[imageIndex];
            if (image && src) {
              image.src = src;
              image.alt = `${imageIndex === 0 ? "Anverso" : "Reverso"} de la tarjeta ${card.nombre} de Peña Jabalí Hunters`;
            } else if (item) {
              item.hidden = true;
            }
          });
        } else {
          imageGrid.hidden = true;
        }
      }

      return root;
    });

    // El primer elemento ya era el original; los siguientes son sus copias.
    return cards;
  }

  function renderHome(data) {
    const root = document.querySelector("[data-pjh-home-cotos]");
    if (!root) return;
    root.innerHTML = data.cotos.filter(c => c.estado === "activo").map(c => `<article class="home-card"><h3>${c.nombre}</h3><p>${c.superficie} ha · ${c.ubicacion}</p><a class="cta cta-secondary" href="cotos.html">Ver coto</a></article>`).join("");
  }

  ready.then(data => { renderHome(data); renderCotos(data); renderCaza(data); renderTarjetas(data); }).catch(() => {});
})();

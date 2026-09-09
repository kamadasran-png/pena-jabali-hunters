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
    const root = document.querySelector("[data-pjh-tarjetas]");
    if (!root) return;
    const card = data.tarjetas.find(t => t.estado === "activo");
    if (!card) return;
    const field = key => root.querySelector(`[data-field="${key}"]`);
    field("nombre").textContent = card.nombre;
    field("precio").textContent = `${card.precio} €`;
    field("disponibilidad").textContent = `${card.unidades_disponibles} tarjetas`;
    field("cotos").textContent = names(data.cotos, card.cotos).join(" · ");
    field("validez").textContent = card.periodo_validez;
    field("condiciones").innerHTML = card.condiciones.map(c => `<p>${c}</p>`).join("");
  }

  function renderHome(data) {
    const root = document.querySelector("[data-pjh-home-cotos]");
    if (!root) return;
    root.innerHTML = data.cotos.filter(c => c.estado === "activo").map(c => `<article class="home-card"><h3>${c.nombre}</h3><p>${c.superficie} ha · ${c.ubicacion}</p><a class="cta cta-secondary" href="cotos.html">Ver coto</a></article>`).join("");
  }

  ready.then(data => { renderHome(data); renderCotos(data); renderCaza(data); renderTarjetas(data); }).catch(() => {});
})();

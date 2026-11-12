# CONTROL DEL PROYECTO — PEÑA JABALÍ HUNTERS

## 1. Identificación

- Proyecto: **Peña Jabalí Hunters — Web y Aplicación**
- Repositorio: `kamadasran-png/pena-jabali-hunters`
- Rama principal: `main`
- Visibilidad: pública
- Inicio FASE 1: 28/08/2026
- Última sincronización documental: **12/11/2026** (reconciliación con GitHub; véase apartado 19).

---

## 2. Estado general de fases

### FASE 0 — RESCATE Y AUDITORÍA

**CERRADA.**

La copia maestra de rescate permanece fuera de GitHub y no debe modificarse.

### FASE 1 — GITHUB Y CONSTRUCCIÓN

**EN CURSO.**

- FASE 1.1 — Repositorio: **COMPLETADA.**
- FASE 1.2 — Arquitectura: **COMPLETADA.**
- FASE 1.3 — Estructura física: **COMPLETADA.**
- WEB 1.1 → WEB 1.11: **CERRADAS Y APROBADAS.**

El bloque de definición WEB 1.x está cerrado. La construcción física continúa por bloques.

### FASE 2 — ORGANIZACIÓN Y TRATAMIENTO DEL MATERIAL HISTÓRICO

**EN CURSO / BLOQUE HISTÓRICO CONTROLADO.**

- 2.1 → 2.10: **CERRADOS Y APROBADOS.**
- 2.11 — Tratamiento inicial y registro de ANT-01: **CERRADO.**

Los elementos históricos `ANT-02 → ANT-46` quedan **EN ESPERA** y no serán examinados hasta que exista una necesidad concreta de utilización.

---

## 3. Estructura aprobada

- `web/` — web pública.
- `app/` — futuras funcionalidades de aplicación.
- `assets/images/` — imágenes seleccionadas.
- `assets/logos/` — logotipos.
- `assets/documents/` — documentos públicos seleccionados.
- `data/` — datos estructurados y JSON.
- `content/` — contenidos editoriales.
- `legal/` — documentación legal pública.
- `docs/` — documentación técnica, auditorías y control.

### Estructura histórica de Antonino

El archivo histórico primario se conserva en:

`assets/documents/historico/antonino/`

Los documentos originales permanecen separados de cualquier derivado y no se modifican para producir material nuevo.

---

## 4. Archivo histórico primario — Antonino

**46/46 PDF incorporados — COMPLETADO.**

- Total inventariado: 46.
- PDF incorporados: 46.
- PDF pendientes: 0.
- Nombres originales: conservados.
- Inventario: actualizado a 46/46.
- Material primario: conservado íntegramente.

Documento de inventario:

`assets/documents/historico/antonino/INVENTARIO_PLANOS_ANTONINO.md`

`ANT-01` fue examinado y cerrado como unidad de examen y decisión. `ANT-02 → ANT-46` permanecen en espera.

---

## 5. Principio de seguridad histórica

El material recuperado de la antigua web no se incorpora automáticamente al nuevo proyecto.

Todo archivo histórico deberá ser identificado, revisado, clasificado y aprobado antes de incorporarse a un uso derivado o público.

El archivo maestro de rescate permanece íntegro y separado del proyecto de construcción.

Los derivados nunca sustituyen, modifican ni eliminan el documento histórico primario.

---

## 6. Material derivado y publicación

Los elementos históricos podrán, cuando corresponda y previa decisión, generar:

- material derivado;
- material reeditado;
- contenidos documentales;
- contenidos para la web pública;
- otros formatos aprobados.

La aprobación conceptual de un derivado no implica su creación inmediata.

Los derivados se crearán únicamente cuando exista una necesidad real de utilización. Su nombre, formato y ruta se decidirán en el momento de utilización.

---

## 7. Sistema visual C.14 — DEFINITIVO

El sistema visual aprobado queda fijado y debe aplicarse globalmente.

### Identidad

Naturaleza + tradición + profesionalidad + seguridad. Estética cinegética contemporánea, evitando exceso militar o rústico.

### Paleta

- Oliva `#526800`
- Tierra/beige `#D8C9A6`
- Naranja acción `#E87518`
- Carbón `#20231F`
- Oro `#B59A5A`
- Marfil `#F5F3EC`
- Gris `#6B6E68`

La relación 60/30/10 es jerárquica, no una obligación matemática.

### Tipografía

- Roboto Slab: H1/H2/H3/títulos.
- Montserrat: cuerpo, navegación y botones.
- Roboto Mono: datos técnicos, etiquetas y precios.

### Superficies

Marfil como base; tierra para secundarios; oliva para bloques destacados; carbón para cabecera/pie; histórico con tratamiento documental dentro del mismo sistema.

### Botones

- `RESERVAR` → naranja.
- `CONSULTAR` / `CONTACTAR` → oliva.
- `VER MÁS` / `VER INFORMACIÓN` / `VER GALERÍA` → transparente con borde oliva.
- `VOLVER` → discreto.

Los estados hover/focus/active deben ser claros y accesibles.

### Imágenes

Fotografía real y protagonista; color natural; sin deformaciones; recorte permitido; galería limpia; histórico documental; originales separados de optimizados; procedencia y derechos controlados.

### Movimiento

Animaciones elegantes y funcionales, 200–300 ms, sin parallax agresivo, rebotes, rotaciones ni movimiento continuo. Respetar `prefers-reduced-motion`.

### Responsive y accesibilidad

Un único diseño adaptativo para escritorio, tablet y móvil. Prioridad a lectura, acción, contraste, foco visible, texto alternativo y uso sin depender únicamente del color.

**El sistema visual C.14 queda DEFINITIVO. No se rediseña salvo decisión expresa aprobada.**

---

## 8. Componentes aprobados

El sistema de componentes se desarrolla por bloques, sin diseñar cada página de forma independiente.

### Componentes globales

- Cabecera.
- Navegación.
- Pie de página.
- Botones / CTA.
- Responsive.

### Componentes de contenido

- Card estándar.
- Card Coto.
- Card Jornada.
- Card Tarjeta.
- Card destacada.
- Card Galería.
- Card Histórica.
- Bloques editoriales.
- Datos técnicos.
- CTA / acción final.
- Avisos informativos.
- Navegación contextual.

### Regla importante

El bloque `¿Quieres reservar?` es un **bloque editorial/CTA de acción**, no una Card ni una Card complementaria.

---

## 9. Estado de construcción física de la web

La construcción física está iniciada y se realiza progresivamente por bloques.

### Páginas existentes

```text
web/index.html
web/caza.html
web/cotos.html
web/tarjetas-jornadas.html
web/galeria.html
web/la-pena.html
web/contacto.html
```

### Recursos técnicos principales

```text
web/css/styles.css
web/js/main.js
web/assets/logos/logo-pjhunters.png
```

La web se publica mediante GitHub Pages usando GitHub Actions porque la fuente física se mantiene en `web/`.

### Estado de despliegue

GitHub Pages está configurado con **GitHub Actions** y se han obtenido ejecuciones correctas del workflow de publicación.

La ejecución técnica no sustituye a la revisión visual.

---

## 10. Bloques de componentes — estado actual

### 2A → 2D

**APROBADOS / CERRADOS.**

### 2H

- 2H.1 — Bloque editorial: **CERRADO**.
- 2H.2 — Datos técnicos: **CERRADO**.
- 2H.3 — CTA / acción final: **CERRADO**.
- 2H.4 — Aviso informativo: **CERRADO**.

### 2I.2 — Navegación contextual

**IMPLEMENTADO Y VALIDADO CONCEPTUALMENTE.**

Aplicaciones registradas:

- **Caza:** enlaces hacia Cotos y Tarjetas y Jornadas.
- **Cotos:** enlaces hacia Tarjetas y Jornadas y contenidos relacionados.
- **Tarjetas y Jornadas:** enlaces hacia Cotos y contenidos relacionados.
- **Galería:** enlaces hacia Caza, La Peña y Cotos.
- **La Peña:** enlaces hacia Caza, Galería y Cotos.
- **Contacto:** enlaces hacia Cotos, Tarjetas y Jornadas y Caza.

### Corrección técnica

`web/la-pena.html` presentó una omisión de cierres de `div` durante la aplicación de 2I.2. Se corrigió sin modificar el contenido ni el diseño previsto.

Commit de corrección:

`ae47516300f1a3ca8f2c78e68133c139fe9cbb1c`

### 2I.3 — Estados interactivos

**CERRADO Y APROBADO.**

Se han aplicado globalmente en `web/css/styles.css` y, para el comportamiento específico del pie de página, en `web/js/main.js`:

- hover;
- focus;
- active;
- transiciones discretas de 240 ms;
- foco visible y accesible;
- respuesta táctil adecuada;
- estados de botones, tarjetas, enlaces contextuales, categorías de galería y menú móvil;
- zoom muy sutil en imágenes de galería;
- soporte de `prefers-reduced-motion`;
- comportamiento visual correcto de los botones de Contactar y Reservar del footer.

La implementación respeta C.14.5, C.14.8 y C.14.10 y no modifica la arquitectura.

**Revisión visual validada por el usuario en escritorio y móvil.**

---

## 11. Sistema de datos y contenido — 2J

### 2J.1 — Auditoría y diagnóstico

**CERRADO Y APROBADO.**

Se auditó la situación inicial de `data/` y `content/`. Las carpetas estructurales estaban creadas y sin datos reales cargados.

### 2J.2 — Modelo de datos

**CERRADO Y APROBADO.**

Modelo aprobado:

```text
data/cotos/
data/especies/
data/modalidades/
data/jornadas/
data/tarjetas/
data/galeria/
data/historico/
```

`content/` permanece reservado al contenido editorial.

Relaciones principales:

```text
Coto ↔ Especies ↔ Modalidades ↔ Jornadas ↔ Tarjetas
```

### 2J.3 — Campos definitivos

**CERRADO Y APROBADO.**

Cotos: `id`, `nombre`, `numero_coto`, `ubicacion`, `provincia`, `superficie`, `superficie_cazadero`, `descripcion`, `especies`, `modalidades`, `temporada`, `periodos`, `tarjetas`, `jornadas`, `estado`, `imagenes`, `observaciones`.

Se añadió como criterio aprobado para el coto el campo `tarjetas_disponibles`.

Jornadas: `id`, `nombre`, `coto_id`, `fecha`, `tipo`, `modalidad`, `especies`, `numero_cazadores`, `precio`, `incluye`, `condiciones`, `disponibilidad`, `reserva`, `imagen`, `observaciones`, `unidad_precio`.

Tarjetas: `id`, `nombre`, `cotos`, `especies`, `modalidades`, `periodo_validez`, `dias`, `precio`, `descuentos`, `condiciones`, `reservable`, `estado`, `observaciones`, `unidades_disponibles`.

No se utiliza un campo general `precio` para los cotos.

### 2J.4 — Creación de archivos base

**CERRADO Y APROBADO.**

Se crearon los siete JSON base:

```text
data/cotos/cotos.json
data/especies/especies.json
data/modalidades/modalidades.json
data/jornadas/jornadas.json
data/tarjetas/tarjetas.json
data/galeria/galeria.json
data/historico/historico.json
```

Inicialmente vacíos, preparados para la carga controlada de datos reales.

### 2J.5 — Primer conjunto de datos reales: EL POZANCO

**CERRADO Y APROBADO.**

Se cargó y auditó el primer conjunto de datos reales del coto **EL POZANCO — AB-10425**.

Datos públicos aprobados:

- Nombre: **EL POZANCO**.
- Nº de coto: **AB-10425**.
- Ubicación: **Chinchilla de Monte-Aragón / Pozo Cañada**.
- Provincia: **Albacete**.
- Superficie: **698 ha**.
- Temporada: **2026/2027**.
- Descripción: texto aprobado literalmente por el usuario.
- Periodo: **Estipulado por la legislación y la Orden de Vedas de Castilla-La Mancha vigente.**
- Especies: especies autorizadas cargadas individualmente.
- Modalidades: referencias individuales de las modalidades autorizadas.
- Tarjetas disponibles: **5**.
- Jornadas: sin jornadas concretas cargadas.
- Reservas: **no existe sistema de reservas online en esta fase**; los botones quedan preparados para una futura funcionalidad.
- Observación: **Disponible bajo acuerdo el cuartel comercial.**
- Contacto: `jabalihunters@gmail.com`.
- WhatsApp y teléfono: `625025243`.
- Imágenes reales vinculadas al coto: `pozanco-monte.jpg` y `pozanco-casa.jpg`.

Criterios de presentación aprobados para el coto:

- No mostrar vigencia del POC.
- No mostrar cupos oficiales.
- Mostrar únicamente las modalidades autorizadas.
- Eliminar el apartado de gestión técnica.
- No publicar precio, condiciones privadas ni demás información comercial de las tarjetas en la ficha del coto.
- La información comercial detallada de tarjetas se facilitará privadamente tras la consulta del interesado.
- No implementar sistema de reservas en esta fase.

Fuente documental principal para la identificación y autorización cinegética: resolución del POC del coto AB-10425 aportada y revisada durante 2J.5.

Auditoría final del registro:

- `data/cotos/cotos.json`: validado.
- `data/especies/especies.json`: validado.
- `data/modalidades/modalidades.json`: validado.
- `data/galeria/galeria.json`: validado.
- `data/tarjetas/tarjetas.json`: permanece sin ficha de tarjeta, de acuerdo con el criterio comercial aprobado.
- `data/jornadas/jornadas.json`: permanece sin jornadas concretas.
- Rutas de las dos imágenes verificadas en `web/assets/galeria/cotos/`.
- Relación `coto → modalidades` corregida para utilizar los identificadores individuales de `modalidades.json`.

**2J.5 queda cerrado tras carga, corrección relacional y auditoría final.**

### 2J.6 — Segundo conjunto de datos reales: RAMBLA DEL CONDE

**EN CURSO — DATOS CARGADOS, PENDIENTES DE AUDITORÍA FINAL.**

Se inició la carga controlada del segundo coto con información real proporcionada directamente por el usuario. No existe POC de Rambla del Conde aportado al proyecto en este bloque.

Datos cargados:

- Nombre: **RAMBLA DEL CONDE**.
- Nº de coto: **10225**.
- Ubicación: **Pozo Cañada**.
- Provincia: **Albacete**.
- Superficie del coto: **500 ha**.
- Cazadero autorizado: **300 ha**.
- Descripción: tierras de labor con cultivos de secano; frutales de la variedad almendros; arboleda y pinares, monte bajo mediterráneo de esparteras y coscojas; sierra pronunciada bajo el tendido de parque eólico, con numerosas quebradas y regueros pronunciados que propician el rececho de muflón y aguardo de jabalí; comparte instalaciones con El Pozanco; buen acceso desde la carretera Nacional de Pozo Cañada a Hellín, después de 8 kilómetros de trayecto.
- Especies: **jabalí y muflón**.
- Modalidades: **rececho y aguardos**.
- Temporada: **2026/2027**.
- Periodo: **Estipulado por la legislación y la Orden de Vedas de Castilla-La Mancha vigente.**
- Tarjetas disponibles: **6**.
- Jornadas: sin jornadas concretas cargadas.
- Imágenes: **pendientes de realizar**.
- Observaciones específicas: **ninguna**.
- Contacto: el mismo que El Pozanco (`jabalihunters@gmail.com` / `625025243`).

Criterios aprobados durante 2J.6:

- Añadir al modelo de cotos el campo `superficie_cazadero` para distinguir la superficie total del coto de la superficie de cazadero autorizada.
- Aplicar a Rambla del Conde el mismo criterio de periodo aprobado para El Pozanco.
- No inventar un POC ni datos derivados de un POC inexistente en el proyecto.
- No crear imágenes ficticias; las imágenes quedarán pendientes hasta disponer de material real.
- Mantener el criterio comercial ya aprobado: mostrar únicamente el número de tarjetas disponibles y gestionar privadamente el resto de información.
- No implementar sistema de reservas online en esta fase.

Archivos modificados:

- `data/cotos/cotos.json` — registro de Rambla del Conde incorporado.
- `data/especies/especies.json` — relación de jabalí y nuevo registro de muflón.
- `data/modalidades/modalidades.json` — relaciones de rececho y aguardos.

Commits del bloque:

- `data/cotos/cotos.json`: `e024277ba723bd6925d632e37f84fb799c3edd18`.
- `data/especies/especies.json`: `665d14a31b6da0fcd913203a33c16706520ef6a3`.
- `data/modalidades/modalidades.json`: `9489f5df7ab704a2e5ded0af98250b7aab35803f`.

El bloque queda pendiente de revisión/auditoría final antes de declararse cerrado.

---

## 12. Últimos cambios técnicos registrados

### Cotos — 2I.2

Commit:

`6ed09a2ecff2846895ae9ddf1e2548183abab938`

Content SHA:

`12154483dd5f68c28ae2db9e30890bc636d30abb`

### Styles — 2I.2

Commit:

`2f2ac5d6a3e76b555f273cecc7654e992a456a5c`

Content SHA anterior:

`1f2eae12acc38582589fe6020e8bda5fec36ce40`

### 2I.3 — Estados interactivos

Archivo principal:

`web/css/styles.css`

Commit inicial del bloque:

`c8f292218b6133a3f446862a7b873a5c4505f062`

Content SHA inicial:

`f7aa86a73d12479b54c17aa715acc45bcb2d483d`

### Corrección final de footer — 2I.3

Archivo:

`web/js/main.js`

Commit:

`bbf463578ab06110da1819b389d756b3e5f7ab71`

Content SHA:

`ce5bf4cbc682db1c0c7563e70d5e635121dd6dd1`

La corrección fue revisada visualmente y validada por el usuario en escritorio y móvil.

### 2J.4 — Archivos JSON base

Se crearon los siete archivos JSON estructurales de datos para la carga controlada.

### 2J.5 — Primera carga real de El Pozanco

Commit de `data/cotos/cotos.json` con el registro inicial:

`c8b7009fee65ea807e07e85d819f3f7cdaa86dba`

Corrección relacional posterior del registro de modalidades:

`1f20b346e34e77dd118d8546045d3b3e5db1a6ab`

Content SHA final de `data/cotos/cotos.json`:

`5da50ee0ff1ba8c1d720b20d019efaf7b3ccdffb`

Los demás JSON de soporte de especies, modalidades y galería fueron cargados y verificados durante el bloque.

### 2J.6 — Segundo coto: Rambla del Conde

Carga inicial y relaciones de datos realizadas el 02/09/2026. El bloque permanece abierto hasta la auditoría final.

---

## 13. Reglas de control de cambios

El proyecto se desarrolla **por fases y bloques**, con control después de cada bloque.

Regla obligatoria:

```text
CAMBIO NECESARIO
↓
ANÁLISIS
↓
EXPLICACIÓN DE MOTIVO
↓
ALTERNATIVAS SI PROCEDE
↓
DECISIÓN CONJUNTA
↓
IMPLEMENTACIÓN
↓
REVISIÓN
↓
CIERRE
```

No se modifican silenciosamente decisiones aprobadas.

Si una limitación técnica obliga a cambiar arquitectura, navegación, sistema visual o procedimiento, el avance afectado se detiene hasta decidirlo.

**Regla operativa: si funciona, no lo toques.**

---

## 14. Principios de contenido y datos

La información susceptible de cambiar con frecuencia debe mantenerse separada de la presentación cuando corresponda:

```text
data/ → información estructurada
content/ → contenido editorial
assets/ → recursos multimedia
components → presentación reutilizable
pages → composición
```

La estructura está preparada para que los datos puedan ser reutilizados posteriormente por la aplicación.

No se presentarán datos ficticios como definitivos.

---

## 15. Seguridad y conservación

Nunca se incorporarán al repositorio público:

- contraseñas;
- claves privadas;
- tokens;
- credenciales;
- información sensible;
- archivos temporales sin utilidad;
- duplicados innecesarios.

El material histórico primario y la copia maestra de rescate se conservan independientemente de los derivados y de la web pública.

---

## 16. Estado actual consolidado — 02/09/2026

### HISTÓRICO

**46/46 PDF incorporados.**

`ANT-01` cerrado como unidad de examen y decisión.

`ANT-02 → ANT-46` en espera.

### ARQUITECTURA WEB

**WEB 1.x cerrada y aprobada.**

### SISTEMA VISUAL

**C.14 definitivo y aprobado.**

### COMPONENTES

Bloques 2A → 2D y 2H cerrados.

**2I.2 implementado.**

**2I.3 cerrado y aprobado.**

La revisión visual de 2I.3 fue validada en escritorio y móvil, incluyendo botones, tarjetas, navegación contextual, galería, menú móvil y comportamiento del footer.

### SISTEMA DE DATOS

**2J.1 → 2J.5 cerrados y aprobados.**

**2J.6 en curso:** Rambla del Conde cargado, pendiente de auditoría final.

Conjuntos de datos reales cargados: **EL POZANCO — AB-10425** y **RAMBLA DEL CONDE — 10225**.

### PÁGINAS

Las siete páginas principales están creadas en `web/`.

### DESPLIEGUE

GitHub Pages mediante GitHub Actions operativo.

### CONTROL

Este documento queda sincronizado con el estado real del proyecto tras la carga inicial de **2J.6 — Rambla del Conde**.

---

## 17. Próximo paso

**NO SE INICIA AUTOMÁTICAMENTE NINGÚN BLOQUE NUEVO.**

El bloque **2J.6 permanece abierto** hasta completar su revisión y auditoría final.

---

## 18. Historial resumido de control

- 28/08/2026 — Cierre de FASE 0 y comienzo de FASE 1.
- 28/08/2026 — Creación del repositorio y estructura inicial.
- 29/08/2026 — Incorporación completa de los 46 PDF históricos de Antonino.
- 29/08/2026 — Cierre del bloque histórico de definición y tratamiento de ANT-01.
- 29/08/2026 — Cierre y aprobación de WEB 1.1 → WEB 1.11.
- 29/08/2026 — Inicio de la construcción física de la nueva web.
- 29/08/2026 — Definición y aprobación del sistema visual C.14.
- 30/08/2026 → 01/09/2026 — Construcción progresiva de componentes y páginas.
- 01/09/2026 — Aplicación de 2I.2, navegación contextual.
- 01/09/2026 — Corrección estructural de `web/la-pena.html`.
- 02/09/2026 — Sincronización del CONTROL_PROYECTO.md con el estado real hasta 2I.2.
- 02/09/2026 — Implementación de 2I.3 — estados hover, focus y active globales.
- 02/09/2026 — Corrección final del comportamiento visual del footer.
- 02/09/2026 — Revisión visual de 2I.3 validada en escritorio y móvil.
- 02/09/2026 — **Cierre y aprobación de 2I.3.**
- 02/09/2026 — Sincronización del CONTROL_PROYECTO.md con el cierre de 2I.3.
- 02/09/2026 — Auditoría y aprobación del modelo de datos 2J.1 → 2J.3.
- 02/09/2026 — Creación y aprobación de los JSON base 2J.4.
- 02/09/2026 — Carga de datos reales de **EL POZANCO — AB-10425**.
- 02/09/2026 — Incorporación y registro de las imágenes reales de El Pozanco.
- 02/09/2026 — Corrección de la relación `coto → modalidades` y auditoría final.
- 02/09/2026 — **Cierre y aprobación de 2J.5.**
- 02/09/2026 — Sincronización del CONTROL_PROYECTO.md con el cierre de 2J.5.
- 02/09/2026 — **Inicio de 2J.6 y carga inicial de datos reales de Rambla del Conde.**
- 02/09/2026 — Aprobación del campo `superficie_cazadero` y aplicación al registro de Rambla del Conde.

---

**DOCUMENTO DE CONTROL INTERNO DEL PROYECTO.**


---

## 19. Reconciliación del estado con GitHub — 12/11/2026

**Alcance:** actualización documental basada en la rama `main`, el árbol actual del repositorio, los archivos de datos, el workflow de publicación y el historial de commits disponible hasta el último cambio registrado el **09/10/2026**.

Esta reconciliación registra hechos técnicos observables. No modifica por sí misma decisiones comerciales, superficies, condiciones cinegéticas, arquitectura aprobada ni criterios de publicación. Las discrepancias se mantienen abiertas hasta decisión expresa.

### 19.1. Actividad posterior a la sincronización anterior

Desde la sincronización del 02/09/2026 se han incorporado, entre otros, los siguientes bloques de trabajo:

- **Capa de datos 2J / FASE 2:** conexión de Inicio, Caza, Cotos y Tarjetas con los archivos JSON; publicación de los datos junto a la web; validación de archivos antes del despliegue.
- **Tarjetas:** incorporación de SUPER HUNTERS y de HUNTERS 3, HUNTERS 5 y HUNTERS 10, con imágenes, condiciones y presentación diferenciada.
- **Jornadas:** incorporación de jornadas y agenda desplegable de sueltas de perdiz 2026/2027, con acceso directo desde la portada.
- **Inicio y páginas de actividad:** actualización de los heroes y secciones principales; incorporación de oferta especial de El Pozanco y oferta temporal de cabra montés.
- **Caza y galería:** carruseles visuales de especies y modalidades; ampliación de categorías y sección de vídeos; separación de páginas de Caza y fauna y de Jornadas y La Peña.
- **La Peña e histórico:** creación de la página histórica, incorporación de los cuatro capítulos y seis apéndices, con enlaces documentales y ajustes editoriales.
- **Contacto:** formulario que prepara el mensaje en la aplicación de correo del visitante; no almacena los datos en la web.
- **La Camiseta de la Suerte:** actualización del formulario y del flujo de aportación/participación; integración de pago con tarjeta y Bizum mediante Stripe y páginas de retorno de pago correcto y cancelado. La existencia del código no equivale a una certificación de prueba integral de todos los escenarios de pago.
- **Legal y SEO:** páginas de aviso legal, privacidad y cookies; robots.txt, sitemap.xml, canonical y metadatos; verificación de Google Search Console.
- **Redes sociales:** enlaces oficiales de Facebook e Instagram en cabecera, menú móvil y pie de página.

### 19.2. Estado físico actual de la web

La carpeta `web/` contiene, además de las siete páginas principales:

- `caza-fauna.html`.
- `jornadas-la-pena.html`.
- `historia-pena-jabali.html`.
- `historia-capitulo-I.html` a `historia-capitulo-IV.html`.
- `apendices.html` y `apendice-I.html` a `apendice-VI.html`.
- Páginas legales, formulario de La Camiseta de la Suerte y páginas de retorno de pago.
- Recursos CSS, JavaScript, imágenes, datos publicados, robots.txt y sitemap.xml.

La existencia de estas páginas y recursos queda registrada como implementación presente en GitHub. Su presencia no supone que se haya aprobado una modificación de la arquitectura funcional original.

### 19.3. Capa de datos y publicación

La capa de datos está conectada a la web mediante `web/js/main.js` y `web/js/data-pages.js`. El workflow `.github/workflows/pages.yml`:

1. Prepara el contenido de `web/`.
2. Copia `data/` a `web/data/`.
3. Valida que los JSON de cotos, especies, modalidades y tarjetas existan, no estén vacíos y sean JSON válido.
4. Publica el contenido de `web/` mediante GitHub Pages.

Por tanto, los JSON copiados a `web/data/` forman parte del contenido público desplegado y pueden consultarse desde la web.

Estado observado de los datos:

- `data/cotos/cotos.json`: contiene EL POZANCO y RAMBLA DEL CONDE.
- `data/especies/especies.json`: contiene las especies relacionadas con ambos cotos.
- `data/modalidades/modalidades.json`: contiene las modalidades relacionadas con ambos cotos.
- `data/tarjetas/tarjetas.json`: contiene cuatro registros: SUPER HUNTERS, HUNTERS 3, HUNTERS 5 y HUNTERS 10.
- `data/jornadas/jornadas.json`: permanece vacío (`[]`).
- `data/galeria/galeria.json`: contiene dos registros de imágenes de EL POZANCO.

### 19.4. Discrepancias que requieren decisión

No se corrigen automáticamente. Deben resolverse antes de considerar plenamente sincronizado el contenido de control con las decisiones posteriores:

**A. Superficie de RAMBLA DEL CONDE**

- GitHub registra actualmente `superficie: 500` y `superficie_cazadero: 300`.
- Existe una indicación posterior del proyecto de actualizar la superficie total a **300 ha**.
- Se debe confirmar si el dato correcto es 300 ha de superficie total y si debe mantenerse o eliminarse el campo de superficie de cazadero. No modificar el JSON hasta resolverlo.

**B. Tarjetas disponibles de EL POZANCO**

- El control anterior indicaba 5 tarjetas.
- El JSON actual registra 6 tarjetas disponibles.
- Confirmar el número vigente antes de modificar el control o los datos.

**C. Publicidad de condiciones y precios de tarjetas**

- El control anterior establecía que la información comercial detallada debía facilitarse privadamente.
- El JSON actual de tarjetas contiene precios, condiciones y observaciones.
- El workflow publica esos JSON en `web/data/`.
- Debe decidirse si esos datos están autorizados para consulta pública o si debe separarse la información pública de la información interna/comercial. No retirar ni publicar información adicional hasta recibir decisión.

**D. Estado de 2J.6 — RAMBLA DEL CONDE**

- El registro está incorporado en los JSON y relacionado con especies y modalidades.
- No hay imágenes vinculadas en el registro (`imagenes: []`).
- No hay jornadas concretas cargadas.
- La auditoría final y la confirmación de superficies siguen pendientes.

### 19.5. Aplicación

La carpeta `app/` continúa sin implementación funcional; únicamente conserva el archivo de mantenimiento de carpeta. La aplicación no debe marcarse como iniciada ni completada.

### 19.6. Estado del despliegue

El workflow de GitHub Pages utiliza GitHub Actions. Las últimas ejecuciones consultadas, correspondientes al 09/10/2026, muestran despliegues completados con resultado correcto para los cambios finales de esa fecha. La última ejecución consultada concluyó correctamente.

Esto acredita el resultado del despliegue registrado, pero no sustituye una revisión visual actual ni una prueba funcional completa de formularios y pagos.

### 19.7. Situación de control tras la reconciliación

- **Arquitectura WEB 1.x:** se mantiene como aprobada; no se modifica en esta reconciliación.
- **Sistema visual C.14:** se mantiene como definitivo y aprobado.
- **Componentes 2A–2I.3:** se mantienen con el estado de cierre ya registrado.
- **Sistema de datos 2J:** conectado a la web y publicado; el estado de 2J.6 requiere resolver las discrepancias del apartado 19.4 y completar su auditoría.
- **Web:** ampliada e implementada con los cambios descritos en 19.1 y 19.2.
- **Aplicación:** pendiente de desarrollo.
- **Despliegue:** GitHub Pages operativo según las últimas ejecuciones consultadas del 09/10/2026.
- **Próximo paso:** resolver las discrepancias A–C y completar la auditoría de 2J.6. No iniciar un bloque nuevo ni alterar decisiones aprobadas por inferencia.

**Esta sección 19 es la referencia de reconciliación técnica más reciente. Los apartados anteriores conservan su valor como registro histórico de las decisiones y estados que tenían en sus respectivas fechas.**

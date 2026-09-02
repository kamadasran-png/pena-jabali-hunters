# CONTROL DEL PROYECTO — PEÑA JABALÍ HUNTERS

## 1. Identificación

- Proyecto: **Peña Jabalí Hunters — Web y Aplicación**
- Repositorio: `kamadasran-png/pena-jabali-hunters`
- Rama principal: `main`
- Visibilidad: pública
- Inicio FASE 1: 28/08/2026
- Última sincronización: **02/09/2026**

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

## 11. Últimos cambios técnicos registrados

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

Antes de modificar de nuevo los archivos técnicos deberá recuperarse su SHA actual.

---

## 12. Reglas de control de cambios

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

## 13. Principios de contenido y datos

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

## 14. Seguridad y conservación

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

## 15. Estado actual consolidado — 02/09/2026

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

### PÁGINAS

Las siete páginas principales están creadas en `web/`.

### DESPLIEGUE

GitHub Pages mediante GitHub Actions operativo.

### CONTROL

Este documento queda sincronizado con el estado real del proyecto tras el cierre de **2I.3**.

---

## 16. Próximo paso

**NO SE INICIA AUTOMÁTICAMENTE NINGÚN BLOQUE NUEVO.**

El bloque **2I.3 queda cerrado y aprobado**.

El siguiente bloque se decidirá conjuntamente antes de cualquier nueva implementación.

---

## 17. Historial resumido de control

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

---

**DOCUMENTO DE CONTROL INTERNO DEL PROYECTO.**

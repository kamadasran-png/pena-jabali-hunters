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

La copia maestra de rescate permanece fuera de GitHub y no debe modificarse:

`FASE_0_RESCATE_PENA_JABALI_HUNTERS_BACKUP.zip`

### FASE 1 — GITHUB Y CONSTRUCCIÓN

**EN CURSO.**

- FASE 1.1 — Repositorio: **COMPLETADA**.
- FASE 1.2 — Arquitectura: **COMPLETADA**.
- FASE 1.3 — Estructura física: **COMPLETADA**.
- WEB 1.1 → WEB 1.11: **CERRADAS Y APROBADAS**.

WEB 1.x define arquitectura funcional, navegación, contenidos, sistema visual, componentes, datos, estructura técnica, tecnología y metodología de construcción.

### FASE 2 — ORGANIZACIÓN Y TRATAMIENTO DEL MATERIAL HISTÓRICO

**EN CURSO / BLOQUE HISTÓRICO CONTROLADO.**

- 2.1 → 2.10: **CERRADOS Y APROBADOS**.
- 2.11 — ANT-01: **CERRADO**.
- `ANT-02 → ANT-46`: **EN ESPERA**.

Los elementos históricos posteriores no se examinarán hasta que exista una necesidad concreta de utilización.

---

## 3. Arquitectura física aprobada

```text
web/                  → web pública
app/                  → futura aplicación
assets/images/        → imágenes seleccionadas
assets/logos/         → logotipos
assets/documents/     → documentos públicos seleccionados
data/                 → datos estructurados / JSON
content/              → contenidos editoriales
legal/                → documentación legal pública
docs/                 → documentación técnica y control
```

No se crean nuevos directorios estructurales sin necesidad justificada y, cuando afecten a la arquitectura, sin aprobación previa.

---

## 4. Archivo histórico de Antonino

Estado de incorporación: **46/46 PDF — COMPLETADO.**

- 46 documentos inventariados.
- 46 PDF incorporados.
- 0 pendientes.
- Nombres originales conservados.
- Material primario conservado íntegramente.
- Inventario: `assets/documents/historico/antonino/INVENTARIO_PLANOS_ANTONINO.md`.

El archivo histórico primario nunca se modifica para crear derivados.

### Regla histórica permanente

Los originales son la fuente primaria. Cualquier derivado deberá conservar trazabilidad con su `ANT-XX` y será creado únicamente cuando exista una necesidad real de utilización.

`ANT-02 → ANT-46` permanece en espera.

### ANT-01

**Barranco de la Mosca 1979.pdf** fue examinado y registrado como unidad histórica.

- Fecha indicada: 8-4-1979.
- Documento de 2 páginas.
- Naturaleza: documento histórico manuscrito / plano de organización de batida.
- Original localizado y conservado.
- Derivados conceptualmente aprobados: DER-01, DER-02, DER-03, DER-04 y DER-05.
- DER-06 fue excluido.
- Los derivados aprobados no tienen obligación de creación inmediata ni ruta definitiva prefijada.

Procedimiento general ANT-XX:

```text
INVENTARIO
↓
IDENTIFICACIÓN
↓
EXAMEN DEL ORIGINAL
↓
REGISTRO
↓
PROPUESTA DE DERIVADOS
↓
APROBACIÓN / EXCLUSIÓN
↓
ESPERA HASTA NECESIDAD REAL
↓
CREACIÓN
↓
RUTA DEFINIDA EN ESE MOMENTO
↓
VALIDACIÓN
↓
TRAZABILIDAD
↓
CIERRE
```

No se inventará, completará ni corregirá información histórica no verificable.

---

## 5. Navegación funcional aprobada

Las siete secciones principales son:

```text
INICIO · CAZA · COTOS · TARJETAS Y JORNADAS · GALERÍA · LA PEÑA · CONTACTO
```

La acción principal transversal es **RESERVAR / CONTACTAR**.

Jerarquías aprobadas:

- **CAZA:** caza menor / caza mayor; las modalidades se integran en las páginas correspondientes.
- **COTOS:** El Pozanco / Rambla del Conde.
- **TARJETAS Y JORNADAS:** tarjetas / jornadas / ofertas.
- **GALERÍA:** cotos / caza / fauna / jornadas / Peña Jabalí Hunters / histórico.
- **LA PEÑA:** quiénes somos / filosofía / actividad / territorio / historia.
- **CONTACTO:** contacto directo / reservas / formulario.

La Galería funciona además como apoyo transversal y la navegación contextual conecta contenidos relacionados.

---

## 6. Modelo de páginas aprobado

### Inicio

Presentación principal → Caza → Cotos → Tarjetas/Jornadas → Galería → La Peña → CTA → pie.

### Secciones

Título → introducción → contenido → destacados → enlaces relacionados → CTA.

### Coto

Identificación → presentación → territorio → especies → modalidades → temporada → galería → tarjetas/jornadas → reserva.

### Ficha comercial

Nombre → imagen → descripción → coto → modalidad → especies → fecha/periodo → precio → incluye → condiciones → reservar/consultar.

### Galería

Categoría → elementos visuales → información asociada → enlaces relacionados.

### La Peña

Quiénes somos → filosofía → actividad → territorio → historia → contacto.

### Contacto

Contacto directo → WhatsApp → teléfono → email → ubicación → reservas → formulario.

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

La información visual y funcional común debe mantenerse mediante componentes reutilizables.

---

## 9. Estado de construcción física de la web

La construcción física ya está iniciada y no se encuentra en el antiguo estado de “solo definición”.

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

La verificación visual de la web se realiza progresivamente y no se considera que una ejecución técnica sustituya a la revisión visual.

---

## 10. Bloques de componentes — estado actual

### 2A → 2D

**APROBADOS / CERRADOS** dentro del desarrollo de componentes y sistema visual.

### 2H

Bloques de apoyo y presentación:

- 2H.1 — Bloque editorial: **CERRADO**.
- 2H.2 — Datos técnicos: **CERRADO**.
- 2H.3 — CTA / acción final: **CERRADO**.
- 2H.4 — Aviso informativo: **CERRADO**.

### 2I.2 — Navegación contextual

**IMPLEMENTADO Y VALIDADO CONCEPTUALMENTE.**

Se ha aplicado navegación contextual a las páginas para facilitar el recorrido del usuario sin sustituir la navegación principal.

Aplicaciones registradas:

- **Caza:** enlaces hacia Cotos y Tarjetas y Jornadas.
- **Cotos:** enlaces hacia Tarjetas y Jornadas y contenidos relacionados.
- **Tarjetas y Jornadas:** enlaces hacia Cotos y contenidos relacionados.
- **Galería:** enlaces hacia Caza, La Peña y Cotos.
- **La Peña:** enlaces hacia Caza, Galería y Cotos.
- **Contacto:** enlaces hacia Cotos, Tarjetas y Jornadas y Caza.

### Corrección técnica reciente

`web/la-pena.html` presentó una omisión de cierres de `div` durante la aplicación de 2I.2. Se corrigió sin modificar el contenido ni el diseño previsto.

Commit de corrección:

`ae47516300f1a3ca8f2c78e68133c139fe9cbb1c`

---

## 11. Últimos cambios técnicos registrados

### Cotos — 2I.2

Commit:

`6ed09a2ecff2846895ae9ddf1e2548183abab938`

Content SHA registrado:

`12154483dd5f68c28ae2db9e30890bc636d30abb`

### Styles — 2I.2

Commit:

`2f2ac5d6a3e76b555f273cecc7654e992a456a5c`

Content SHA registrado:

`1f2eae12acc38582589fe6020e8bda5fec36ce40`

Antes de modificar de nuevo `styles.css` deberá recuperarse su SHA actual.

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

Bloques iniciales y 2H cerrados.

**2I.2 navegación contextual implementada.**

### PÁGINAS

Las siete páginas principales están creadas en `web/`.

### DESPLIEGUE

GitHub Pages mediante GitHub Actions operativo.

### CONTROL

Este documento queda sincronizado con el estado real de trabajo hasta **2I.2**.

---

## 16. Próximo paso obligatorio

Antes de realizar cualquier nuevo cambio funcional o visual:

### **2I.3 — ESTADOS INTERACTIVOS**

Implementar de forma global y coherente:

- hover;
- focus;
- active;
- transiciones discretas;
- foco visible y accesible;
- respuesta táctil adecuada.

La implementación deberá respetar C.14.5, C.14.8 y C.14.10.

**No se iniciará 2I.3 hasta considerar cerrado este control de proyecto.**

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
- 02/09/2026 — **Sincronización del CONTROL_PROYECTO.md con el estado real hasta 2I.2.**

---

**DOCUMENTO DE CONTROL INTERNO DEL PROYECTO.**

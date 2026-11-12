# JABALÍ HUNTERS SOCIAL
## Documento de Arquitectura Funcional
**Versión 1.0 — Documento de definición**

**Proyecto:** WEB Y APP PEÑA JABALÍ HUNTERS  
**Aplicación:** Jabalí Hunters Social  
**Titular:** Peña Jabalí Hunters  
**Estado:** Documento funcional aprobado  
**Cuota anual aprobada:** 19,90 €

---

# 1. OBJETO DEL PROYECTO

Jabalí Hunters Social será una comunidad social digital especializada en el ámbito cinegético, vinculada institucionalmente a Peña Jabalí Hunters.

Su finalidad es crear un espacio de encuentro entre cazadores donde puedan compartir experiencias, fotografías, vídeos, publicaciones y conocimientos, establecer relaciones y participar en una comunidad organizada.

La aplicación tendrá una orientación social y participativa.

No sustituirá a la web oficial de Peña Jabalí Hunters ni asumirá sus funciones comerciales, administrativas o de gestión cinegética.

# 2. RELACIÓN ENTRE LA WEB Y LA APLICACIÓN

Se establecen dos entornos complementarios:

**Web oficial de Peña Jabalí Hunters**

Mantendrá las funciones de información y servicios:
- Información institucional.
- Cotos y modalidades.
- Tarjetas y jornadas.
- Condiciones comerciales.
- Reservas y servicios.
- Información de contacto.

**Aplicación Jabalí Hunters Social**

Se ocupará de:
- Comunidad de usuarios.
- Perfiles personales.
- Publicaciones sociales.
- Fotografías y vídeos.
- Grupos oficiales.
- Mensajería.
- Notificaciones.
- Blog y JH TV.
- Participación y relaciones entre socios.

La aplicación utilizará la carpeta `app/` del repositorio existente.

No se contempla construir una segunda web independiente.

# 3. IDENTIDAD Y MODELO DE COMUNIDAD

Nombre oficial: **Jabalí Hunters Social**.

Identidad institucional: Peña Jabalí Hunters.

Modelo aprobado: comunidad mixta.

Se diferencian tres situaciones:
1. Visitante sin cuenta.
2. Usuario registrado.
3. Socio validado.

La zona pública permitirá conocer y descubrir la actividad de la comunidad. La participación completa estará reservada a los socios validados.

# 4. REGISTRO Y CONTROL DE ACCESO

## 4.1. Registro
El registro estará abierto a cualquier persona interesada. El usuario facilitará su identidad real durante el alta.

## 4.2. Identidad pública
Se permitirá utilizar un nombre público o identificador elegido por el usuario. La identidad real permanecerá en los registros privados de administración.

## 4.3. Fotografía de perfil
No se admitirán avatares, ilustraciones ni personajes ficticios. La fotografía de perfil deberá ser una fotografía real de la persona titular de la cuenta.

## 4.4. Niveles de acceso

**Visitante**
- Consulta publicaciones públicas.
- Consulta fotografías y vídeos públicos.
- Accede al blog y JH TV públicos.

**Usuario registrado**
- Consulta contenidos públicos.
- Dispone de perfil básico.
- Puede comentar publicaciones públicas.
- Puede reaccionar a contenidos públicos.
- Puede solicitar su incorporación como socio.

**Socio validado**
- Publica en el muro social.
- Publica fotografías y vídeos.
- Comenta y reacciona.
- Participa en grupos.
- Sigue a otros socios.
- Utiliza mensajes privados.
- Recibe notificaciones.
- Dispone de galería personal.
- Accede a las funciones privadas de la comunidad.

# 5. MEMBRESÍA Y CUOTA ANUAL

## 5.1. Precio aprobado
Cuota única anual: **19,90 €**. Se aplicará el mismo precio a todos los socios. No habrá tarifas especiales de fundador ni categorías de precio diferentes.

## 5.2. Duración
La membresía tendrá una duración de doce meses.

## 5.3. Proceso de incorporación
1. Registro gratuito.
2. Solicitud de incorporación como socio.
3. Validación por la administración.
4. Pago de la cuota mediante Stripe.
5. Confirmación fiable del pago.
6. Activación de la membresía.
7. Asignación de número de socio.
8. Generación del carnet digital.

## 5.4. Renovación
La renovación será manual.
- No se realizarán cargos automáticos.
- Se avisará al socio antes del vencimiento.
- El socio decidirá si desea continuar.
- El pago de renovación será de 19,90 €.
- Si no renueva, conservará su cuenta gratuita y perderá las funciones exclusivas de socio.

## 5.5. Carnet digital
Cada socio dispondrá de un carnet digital con:
- Número de socio.
- Nombre público.
- Fotografía.
- Fecha de alta.
- Fecha de vencimiento.
- Estado de membresía.

El carnet acreditará la pertenencia a la comunidad, no sustituirá documentación o licencias cinegéticas.

# 6. ESTRUCTURA PRINCIPAL DE LA APLICACIÓN

La navegación principal tendrá seis apartados:
1. Inicio.
2. Comunidad.
3. JH TV.
4. Blog.
5. Galería personal integrada en cada perfil.
6. Mi perfil.

Los mensajes, notificaciones y funciones de publicación estarán integrados en la navegación.

# 7. MURO SOCIAL

Será el núcleo de la aplicación.

## 7.1. Tipos de publicación
Los socios podrán publicar:
- Textos.
- Fotografías.
- Vídeos.
- Crónicas y experiencias.
- Publicaciones mixtas con texto, fotografías y vídeos.

## 7.2. Funciones sociales
- Me gusta y reacciones.
- Comentarios.
- Respuestas.
- Compartir publicaciones.
- Editar publicaciones propias.
- Eliminar publicaciones propias.
- Consultar fecha y autor.

## 7.3. Visibilidad
Las publicaciones podrán tener visibilidad pública o reservada a socios. La zona pública mostrará exclusivamente publicaciones autorizadas como públicas y que cumplan las normas de moderación.

## 7.4. Compartición externa
Las publicaciones públicas podrán compartirse mediante WhatsApp, Facebook, Telegram, otras redes sociales y enlaces directos. Cada publicación pública dispondrá de un enlace permanente y una vista previa. Los contenidos privados no podrán difundirse mediante enlaces públicos.

# 8. PORTADA PÚBLICA

La portada reproducirá el muro social con criterios de visibilidad y moderación. No existirán dos muros independientes.

**Vista pública**
- Publicaciones públicas.
- Contenidos autorizados.
- Publicaciones de socios validados.
- Contenidos moderados.

**Vista privada**
- Publicaciones públicas.
- Publicaciones reservadas a socios.
- Contenidos exclusivos de la comunidad.

## 8.1. Ordenación
- Muro cronológico, de más reciente a más antiguo.
- Sección de publicaciones destacadas.
- Selección de destacados realizada por la administración.

# 9. COMUNIDAD Y PERFILES

Cada usuario tendrá un perfil propio.

## 9.1. Información del perfil
- Fotografía real.
- Nombre público.
- Localidad, si desea mostrarla.
- Presentación personal.
- Modalidades cinegéticas favoritas.
- Fecha de incorporación.
- Publicaciones.
- Fotografías y vídeos.
- Seguidores y actividad.

## 9.2. Información privada
Permanecerán fuera del perfil público:
- Nombre y apellidos reales cuando no formen parte del nombre público elegido.
- Correo electrónico.
- Teléfono.
- Datos de facturación.
- Documentación de validación.
- Información de pagos.

## 9.3. Galería personal
Cada socio dispondrá de una galería integrada en su perfil. Podrá incorporar fotografías, crear álbumes personales, organizar sus imágenes, decidir su visibilidad y eliminar o sustituir fotografías.

No existirá una galería general independiente dentro de la aplicación.

# 10. CONTENIDOS GRÁFICOS Y RELACIÓN CON LA WEB

Las publicaciones gráficas de los socios podrán contribuir a ampliar el contenido visual de la web oficial.

Procedimiento:
1. El socio publica una fotografía o vídeo.
2. El contenido aparece en su perfil y en el muro, según su visibilidad.
3. La administración puede seleccionar contenidos.
4. Se solicita o comprueba la autorización necesaria para su utilización.
5. La Peña puede incorporar el material seleccionado a la web oficial.

La incorporación a la web no será automática. Se respetarán la autoría, los derechos de imagen, la privacidad y las autorizaciones correspondientes.

# 11. JH TV

Se creará una sección audiovisual propia.

## 11.1. Contenido público
- Reportajes oficiales.
- Vídeos destacados de socios.
- Naturaleza y fauna.
- Recopilaciones de jornadas.
- Entrevistas y experiencias.

## 11.2. Participación
Los socios podrán enviar vídeos, proponer reportajes, compartir vídeos, comentar y reaccionar.

Los vídeos enviados pasarán por revisión administrativa antes de su publicación pública. Se comprobarán los permisos de utilización y los derechos de las personas que aparezcan.

# 12. BLOG

El blog tendrá dos líneas editoriales.

**12.1. Blog oficial**
- Noticias.
- Reportajes.
- Cultura y tradición cinegética.
- Artículos.
- Entrevistas.
- Comunicaciones institucionales.

**12.2. Voces de los socios**
- Crónicas de jornadas.
- Experiencias.
- Relatos.
- Opinión.
- Historias personales.
- Reportajes fotográficos.

Los artículos serán públicos. Los socios podrán proponer contenidos, que serán revisados y aprobados por la administración antes de su publicación.

# 13. GRUPOS OFICIALES

Los grupos serán creados y administrados exclusivamente por Peña Jabalí Hunters. Los socios podrán participar, publicar y comentar, pero no crear grupos independientes.

Grupos iniciales propuestos:
- Caza mayor.
- Caza menor.
- Perros de caza.
- Recechos y aguardos.
- Fotografía y naturaleza.
- Conversaciones generales.

La administración tendrá capacidad para crear, modificar, cerrar y moderar los grupos.

# 14. MENSAJERÍA PRIVADA

Los socios validados podrán enviar y recibir mensajes, mantener conversaciones individuales, compartir fotografías y enlaces, consultar conversaciones anteriores, bloquear usuarios y denunciar comportamientos inapropiados.

La administración gestionará las denuncias y las incidencias conforme a las normas de convivencia y las garantías de privacidad.

# 15. NOTIFICACIONES

**Notificaciones internas**
- Comentarios y respuestas.
- Reacciones.
- Nuevos seguidores.
- Mensajes privados.
- Actividad en grupos.
- Comunicaciones oficiales.

**Correo electrónico**
- Avisos administrativos.
- Comunicaciones importantes.
- Avisos de vencimiento de membresía.

Las notificaciones móviles push podrán incorporarse posteriormente. El socio podrá configurar sus preferencias de notificación.

# 16. MODERACIÓN Y CONVIVENCIA

La comunidad tendrá normas obligatorias. Se incorporarán:
- Denuncia de publicaciones.
- Denuncia de comentarios.
- Denuncia de usuarios.
- Herramientas administrativas de moderación.
- Retirada de contenidos.
- Advertencias.
- Suspensiones temporales.
- Expulsión en casos graves o reincidentes.

Las actuaciones administrativas deberán quedar registradas para permitir su seguimiento.

# 17. BUSCADOR GENERAL

La aplicación incorporará un buscador para localizar:
- Socios por nombre público o localidad.
- Publicaciones por palabras clave.
- Fotografías.
- Vídeos.
- Grupos oficiales.
- Artículos del blog.

Dispondrá de filtros temáticos y cinegéticos:
- Caza mayor.
- Caza menor.
- Jabalí.
- Muflón.
- Perdiz.
- Conejo.
- Perros de caza.
- Recechos y aguardos.
- Fotografía y naturaleza.

Los resultados respetarán los permisos de acceso.

# 18. ADMINISTRACIÓN

Existirán cuatro perfiles administrativos.

**18.1. Administrador principal**
Control completo, configuración, gestión de permisos y supervisión general.

**18.2. Moderador**
Publicaciones, comentarios, denuncias, incidencias y medidas de moderación.

**18.3. Editor**
Blog, JH TV, contenidos destacados y selección editorial.

**18.4. Gestor de socios**
Altas, validaciones, membresías, pagos, renovaciones y carnets digitales.

Cada perfil tendrá permisos específicos y diferenciados.

# 19. ORGANIZACIÓN TÉCNICA Y DATOS

La aplicación deberá contemplar, como mínimo, las siguientes entidades de información:
- Usuarios.
- Perfiles.
- Socios.
- Membresías.
- Pagos.
- Publicaciones.
- Fotografías.
- Vídeos.
- Comentarios.
- Reacciones.
- Seguidores.
- Grupos.
- Participaciones en grupos.
- Mensajes.
- Notificaciones.
- Denuncias.
- Acciones de moderación.
- Artículos del blog.
- Contenidos de JH TV.
- Álbumes personales.

La arquitectura deberá separar:
- Código de la aplicación.
- Base de datos.
- Autenticación.
- Almacenamiento multimedia.
- Procesamiento y confirmación de pagos.
- Administración.

GitHub se utilizará para el código y control de versiones, no como almacenamiento masivo de fotografías y vídeos.

La web y la aplicación deberán poder compartir contenidos autorizados mediante mecanismos de integración que se definirán en el diseño técnico.

# 20. PRINCIPIOS DE SEGURIDAD Y PRIVACIDAD

El desarrollo deberá contemplar:
- Protección de datos personales.
- Gestión de permisos por niveles.
- Contraseñas y autenticación seguras.
- Protección de cuentas.
- Control de acceso a publicaciones privadas.
- Gestión segura de pagos.
- Consentimientos para fotografías y vídeos.
- Copias de seguridad.
- Registro de actuaciones administrativas.
- Procedimientos de denuncia y moderación.

Los datos personales y de pago no se expondrán públicamente.

# 21. FASES DE DESARROLLO PROPUESTAS

La implementación deberá realizarse por etapas, con pruebas y aprobación antes de avanzar.

**Etapa 1. Fundación**
- Estructura de aplicación.
- Base de datos.
- Registro y autenticación.
- Perfiles.
- Roles y permisos.
- Membresía y Stripe.

**Etapa 2. Comunidad social**
- Muro.
- Publicaciones multimedia.
- Comentarios.
- Reacciones.
- Seguidores.
- Compartición externa.

**Etapa 3. Contenidos**
- JH TV.
- Blog.
- Galerías personales.
- Integración editorial con la web.

**Etapa 4. Comunicación**
- Grupos.
- Mensajes privados.
- Notificaciones.

**Etapa 5. Administración**
- Panel administrativo.
- Moderación.
- Gestión de socios.
- Herramientas editoriales.

**Etapa 6. Pruebas y lanzamiento**
- Seguridad.
- Pruebas de permisos.
- Pruebas de pagos.
- Pruebas móviles.
- Validación general.
- Puesta en funcionamiento.

# 22. CUESTIONES PENDIENTES DE DEFINICIÓN TÉCNICA

Este documento recoge decisiones funcionales, pero no implica que todos los detalles técnicos estén aprobados.

Antes de programar los elementos correspondientes habrá que concretar:
- Tecnología de base de datos.
- Proveedor de autenticación.
- Servicio de almacenamiento multimedia.
- Alojamiento y distribución de vídeos.
- Límites de tamaño y formatos de archivos.
- Configuración de Stripe y confirmación de pagos.
- Política de conservación de datos.
- Condiciones legales y de privacidad.
- Procedimiento de verificación de identidad.
- Diseño visual definitivo.
- Sistema de copias de seguridad.
- Configuración de notificaciones push.

No se introducirán estos elementos por decisión unilateral ni se contratarán servicios sin estudiar previamente sus costes y necesidades.

# 23. CONTROL DE DECISIONES

Este documento deberá utilizarse como referencia de control durante el desarrollo.

Reglas de trabajo:
1. No modificar funcionalidades aprobadas sin autorización.
2. No incorporar nuevas funciones por iniciativa propia.
3. No alterar la separación de responsabilidades entre web y aplicación.
4. No desarrollar etapas posteriores sin cerrar y probar las anteriores.
5. Documentar los cambios y decisiones.
6. Mantener la coherencia con el repositorio existente.
7. Utilizar la carpeta `app/` como punto de partida de la implementación.

**Principio rector del proyecto:**

Jabalí Hunters Social será la comunidad digital de Peña Jabalí Hunters: un espacio cinegético social, participativo, organizado y abierto al crecimiento, donde la identidad de sus miembros y el intercambio de experiencias constituyen el núcleo de la aplicación.

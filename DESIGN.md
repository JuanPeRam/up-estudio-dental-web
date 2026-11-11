---
name: Up Estudio Dental y Estética
description: Clínica dental familiar en Móstoles; una web luminosa, cercana y serena que invita a entrar.
colors:
  turquesa-up: "#c1e4e2"
  turquesa-logo: "#9bd9dd"
  pino-profundo: "#1d4f4b"
  pino-medio: "#38918b"
  turquesa-acento: "#70cac5"
  turquesa-acento-hover: "#8fd3ce"
  sobre-acento: "#0e1413"
  arena: "#f3eee7"
  papel: "#fbfcfc"
  blanco: "#ffffff"
  bruma-turquesa: "#e4f3f2"
  linea: "#d5e3e1"
  borde-control: "#6f8582"
  tinta-texto: "#14201f"
  tinta-suave: "#3d4f4d"
  tinta-nocturna: "#111716"
  noche-elevada: "#1b2423"
  sobre-noche-fuerte: "#f2f5f4"
  sobre-noche: "#e3e3e3"
  sobre-noche-suave: "#a7b5b3"
  accion-hover: "#24645f"
  peligro: "#b42318"
  exito: "#2e7d4f"
typography:
  display:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "clamp(2.625rem, 6vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "clamp(2.125rem, 4.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline-section:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: "1.875rem"
  title-sans:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: "1.625rem"
  body:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.8125rem"
  lead:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: "1.875rem"
  small:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5625rem"
  label:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1rem"
    letterSpacing: "0.12em"
  caption:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.1875rem"
  control:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "1.4375rem"
  button-sm:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: "1.1875rem"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "24": "96px"
components:
  button-primary:
    backgroundColor: "{colors.tinta-texto}"
    textColor: "{colors.blanco}"
    typography: "{typography.title-sans}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accion-hover}"
    textColor: "{colors.blanco}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-texto}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-secondary-hover:
    textColor: "{colors.pino-profundo}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.pino-profundo}"
    rounded: "{rounded.pill}"
    padding: "12px 8px"
  button-ghost-hover:
    backgroundColor: "{colors.bruma-turquesa}"
  button-night:
    backgroundColor: "{colors.turquesa-acento}"
    textColor: "{colors.tinta-nocturna}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  badge:
    backgroundColor: "{colors.bruma-turquesa}"
    textColor: "{colors.pino-profundo}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  input:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta-texto}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "48px"
  panel:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta-texto}"
    rounded: "{rounded.md}"
    padding: "32px"
  notice:
    backgroundColor: "{colors.bruma-turquesa}"
    textColor: "{colors.tinta-texto}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  specialty-card:
    backgroundColor: "{colors.bruma-turquesa}"
    textColor: "{colors.tinta-texto}"
    rounded: "{rounded.lg}"
  nav:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta-texto}"
    height: "76px"
---

# Design System: Up Estudio Dental y Estética

## Overview

**Creative North Star: "La puerta abierta del barrio"**

La web es la entrada a una clínica a la que se llega andando. Las fotos reales de la clínica y de su equipo, enmarcadas con el mismo rectángulo suave, invitan a pasar; el turquesa pastel de la marca baña la primera banda como la luz de un local a pie de calle, y una banda de madera clara recuerda la recepción. Todo es luminoso, cercano y sereno: mucho aire, fotos reales de la clínica y de su gente, y nada que intimide a quien llega con un niño de la mano o con miedo al dentista.

La tipografía mezcla una serif de revista (Playfair Display) con una sans redonda y amable (Figtree). Cada titular guarda una sola palabra en cursiva verde pino, como un subrayado hablado: «Clínica dental *familiar*», «en la *misma* clínica». Los controles son suaves y acogedores: botones en píldora, esquinas generosas, nada anguloso. La web solo tiene tema claro (`color-scheme: light`).

**Key Characteristics:**
- Un solo marco de foto: rectángulo con esquinas de 20 px, el mismo en la foto principal, los retratos, las especialidades y el collage.
- Turquesa Up abre y cierra la portada (cabecera y banda final de cita); arena y tinta nocturna marcan el ritmo entre medias, y el pie es la única banda oscura del final.
- Una palabra en cursiva verde pino por titular, nunca más.
- Botones en píldora; el principal, en tinta, no en turquesa.
- Fotos reales siempre; nada de ilustraciones genéricas ni imágenes de banco.

## Colors

Una paleta de agua y madera: turquesas pastel de la marca, un verde pino profundo para lo que hay que leer y pulsar, y neutros fríos casi blancos.

### Primary
- **Turquesa Up** (`turquesa-up`): el turquesa pastel de la marca. Banda de firma de la portada, fondo de los marcos de retrato y de las cabeceras que presentan a la clínica. Es fondo, nunca texto.
- **Pino profundo** (`pino-profundo`): el color de lo que se lee como acento y se pulsa sin ser botón: enlaces, etiquetas de tarjeta, la palabra en cursiva de cada titular, iconos de apoyo, insignias y el anillo de foco. Contraste 6,8:1 sobre Turquesa Up.

### Secondary
- **Turquesa de acento** (`turquesa-acento`): el turquesa vivo de la web oficial. Solo sobre Tinta nocturna: etiquetas, cursivas y el botón principal de las bandas oscuras, con texto en **Sobre acento** (`sobre-acento`) y hover en **Turquesa de acento hover** (`turquesa-acento-hover`). Sobre fondo claro no llega a 2:1.
- **Pino medio** (`pino-medio`): para números grandes de acento sobre fondo claro (paradas de la visita guiada). 3,6:1 sobre papel; solo en tamaños grandes.
- **Turquesa del logo** (`turquesa-logo`): el azulejo del logotipo y detalles puntuales (el halo al pasar por la tarjeta de la nota de Google).

### Tertiary
- **Arena** (`arena`): la madera de la clínica. Banda cálida puntual (sección de familia, paradas alternas de la visita guiada) para romper el frío de los turquesas.

### Neutral
- **Papel** (`papel`): fondo de página.
- **Blanco** (`blanco`): tarjetas, paneles, formularios y el texto sobre botones en tinta.
- **Bruma turquesa** (`bruma-turquesa`): fondo de insignias, avisos, iconos en círculo y tarjetas sobre turquesa.
- **Línea** (`linea`): bordes de tarjetas y separadores.
- **Borde de control** (`borde-control`): borde de campos y botones secundarios; 3:1 o más sobre papel.
- **Tinta de texto** (`tinta-texto`): titulares, texto principal y fondo del botón principal.
- **Tinta suave** (`tinta-suave`): texto secundario, entradillas y pies.
- **Tinta nocturna** (`tinta-nocturna`): bandas oscuras (tecnología, llamada a la acción, pie), con **Sobre noche** (`sobre-noche`) y **Sobre noche suave** (`sobre-noche-suave`) para el texto encima, **Sobre noche fuerte** (`sobre-noche-fuerte`) para titulares y estados activos, y **Noche elevada** (`noche-elevada`) como reserva de las fotos.
- Estados: **Peligro** (`peligro`) y **Éxito** (`exito`) solo para errores y confirmaciones del formulario.

### Named Rules
**The Turquesa-Is-Light Rule.** Turquesa Up y Turquesa de acento son luz, no texto: sobre fondo claro, el texto de acento siempre va en Pino profundo. Turquesa de acento como texto solo sobre Tinta nocturna.

**The Ink Button Rule.** El botón principal es de tinta (`tinta-texto`) con texto blanco, como en la web oficial. El turquesa no se usa como fondo de botón sobre superficies claras.

**The Token-Only Rule.** Todo color sale de `src/styles/tokens.css` vía `var(--…)` o de las clases de Tailwind que apuntan a esos tokens. Nada de hex sueltos en componentes nuevos.

## Typography

**Display Font:** Playfair Display Variable (con Georgia, serif)
**Body Font:** Figtree Variable (con Segoe UI, system-ui, sans-serif)

**Character:** La serif de alto contraste da el aire editorial y cuidado de «Estética»; Figtree, redonda y abierta, pone la voz cercana de clínica de barrio. Juntas suenan a revista local amable, no a hospital.

### Hierarchy
- **Display** (`display`): solo el titular de la portada.
- **Headline** (`headline`): el titular de cada página interior.
- **Headline de sección** (`headline-section`): titulares de sección.
- **Title** (`title`): subtítulos en serif dentro de una sección (bloques del formulario, «Qué incluye», «Preguntas frecuentes»).
- **Title sans** (`title-sans`): nombres en tarjetas (equipo, pasos, especialidades) y títulos de elementos de lista.
- **Body** (`body`): texto corrido; ancho máximo de unos 74 caracteres (`--measure`, 34em).
- **Lead** (`lead`): entradillas bajo un titular, en Tinta suave, con el mismo ancho de lectura (`--measure`).
- **Small** (`small`): textos de apoyo en tarjetas y paneles.
- **Label** (`label`): mayúsculas espaciadas en Pino profundo (Turquesa de acento sobre noche) para etiquetar una tarjeta o un dato («Horario», «Dirección», «Parada 1 de 6»), nunca como antetítulo encima de un titular.
- **Caption** (`caption`): especialidades bajo un nombre, insignias y metadatos (el «Error 404» al pie de su página).
- **Control** (`control`): texto de campos de formulario y de los teléfonos destacados; 17 px para que el móvil no haga zoom al enfocar un campo.
- **Botón pequeño** (`button-sm`): botón compacto de la cabecera y etiquetas de las tarjetas de especialidad en móvil.

### Named Rules
**The One Italic Word Rule.** Cada titular en serif lleva como mucho una palabra en cursiva (`<em>`), en Pino profundo (Turquesa de acento sobre noche). Es el acento de la marca; repetirla lo apaga.

**The Rem Rule.** Tamaños de letra y alturas de línea en rem, nunca en px: así la web respeta el tamaño de letra que cada persona elige en su navegador. Los puntos de corte van en em por lo mismo (los px de este documento divididos entre 16, también en las clases `sm:`, `md:` y `lg:` de Tailwind): con la letra al doble, una pantalla de 1280 px se compone como una de 640 px y nada se sale. Por debajo de 20em de ancho, que solo se da con la letra ampliada en el móvil, las palabras largas pueden partirse y las rejillas de dos columnas pasan a una.

**The Heading Speaks Rule.** Sin antetítulos: el titular en serif abre la sección y se explica solo, con su palabra en cursiva. Si hace falta contexto, va en la entradilla (Lead), a la derecha en escritorio (cabecera partida 1,1fr / 1fr desde 900 px). Una etiqueta en Label solo encabeza una tarjeta o un dato, o indica una posición («Parada 1 de 6»).

## Layout

Contenedor de 1200 px con márgenes laterales de 16 px en móvil y 32 px desde 768 px (respetando las zonas seguras del móvil). Las secciones respiran: 64 px arriba y abajo en móvil y 96 px desde 900 px. El texto corrido no pasa de unos 74 caracteres por línea (`--measure: 34em`; se mide en em porque el `ch` de Figtree, el ancho del «0», es mayor que el de la letra media).

Las rejillas crecen por pasos: una columna en móvil, dos desde 640 px y tres o cuatro desde 900–1000 px. La rejilla de especialidades es un mosaico de 4 columnas con filas de 260 px y una tarjeta grande de 2×2; la última tarjeta se ensancha para cerrar su fila. Las rejillas de personas centran la última fila incompleta. Cabecera fija de 76 px con desenfoque; en móvil (menos de 768 px) aparece una barra inferior fija con «Llamar» y «WhatsApp» al bajar.

**The Breathing Room Rule.** Ante la duda, más aire: una sección nunca encaja más de un mensaje principal, y entre bloques se usan los pasos de 48, 64 o 96 px, no valores intermedios.

## Elevation & Depth

Decisión de noviembre de 2026: el sistema gana relieve. Tarjetas y paneles (paneles de tratamiento, horario, formulario, reseñas, tarjetas de servicio y de especialidad) llevan una sombra suave en reposo; las que son enlaces suben un nivel al pasar el ratón. La cabecera, al hacer scroll, y las tarjetas que flotan sobre una foto (la nota de Google) usan la sombra media. La profundidad se apoya también en las bandas de color (turquesa, arena, noche) y en bordes finos de Línea.

### Shadow Vocabulary
- **Reposo** (`box-shadow: 0 1px 2px rgba(20,32,31,.06), 0 1px 1px rgba(20,32,31,.04)`, token `--shadow-sm`): tarjetas, paneles y botón principal en reposo.
- **Elevada** (`box-shadow: 0 12px 32px -12px rgba(20,32,31,.18)`, token `--shadow-md`): hover de tarjetas y botones, cabecera con scroll, tarjetas flotantes sobre fotos.

### Named Rules
**The Soft Lift Rule.** Las sombras son siempre difusas y teñidas de tinta, nunca negras ni duras. Un elemento sube como mucho un nivel al interactuar, y solo si es clicable: una tarjeta informativa no se mueve al pasar el ratón.

## Shapes

Formas suaves y acogedoras: nada de esquinas vivas. Tres radios (6 px en campos, 12 px en paneles y avisos, 20 px en tarjetas de foto) y la píldora para todo lo pulsable o etiquetable (botones, insignias, chips de datos). Toda foto va en el mismo **marco**: rectángulo con 20 px en las cuatro esquinas (`.up-frame`, `.up-cutout-photo`, `.up-spec`, collage, fotos de tratamiento y de la visita guiada), sobre Bruma turquesa como reserva (Turquesa Up en los retratos, Noche elevada en la banda oscura). Decisión de noviembre de 2026: se retira el arco de medio punto, que leía como una ventana; un único radio para las fotos da un aire más sobrio y profesional. Una foto solo se amplía al pasar el ratón si es un enlace o un botón. Los iconos van en círculo de Bruma turquesa.

**The One Frame Rule.** Todas las fotos comparten el rectángulo de 20 px. Nada de arcos, círculos ni formas recortadas en fotos; el círculo queda para iconos y avatares.

## Motion

**Tesis: una entrada y respuestas.** El movimiento tiene un solo momento propio: la portada entra una vez al cargar. Nada aparece al hacer scroll (ni fotos, ni tarjetas, ni texto), salvo la línea de los pasos del tratamiento. Todo lo demás responde a la persona o explica un cambio de estado: hover, foco, capas, acordeón, envío. Las reglas están en `src/styles/motion.css`; los tiempos y la curva, en `src/styles/tokens.css`.

- **Momento principal:** al entrar en la portada, el titular, la entradilla, las ventajas y los botones suben 16 px en cascada (700 ms, 70 ms entre uno y otro) y la foto se desvela en 1,1 s: parte de un rectángulo un 5 % menor, con el mismo radio de 20 px, y se posa de un 106 % a su tamaño. La nota de Google entra a los 600 ms, cuando llega del servidor.
- **Hover:** las fotos que son enlace o botón se amplían un 3 % dentro de su marco (600 ms, `--ease-out`); las tarjetas enlace suben 2 px con la sombra elevada; los botones suben 1 px y vuelven al pulsar; la flecha de una tarjeta avanza 3 px; el subrayado de la navegación crece desde el centro.
- **Cambio de página:** fundido de 240 ms entre páginas (View Transitions, sin JavaScript). El retrato de una persona viaja de su tarjeta (portada y `/equipo`) a su ficha y vuelve, en 420 ms (`portraitTransition` en `src/constants/pages.ts`).
- **Capas:** el menú móvil y el visor de fotos entran con un fundido de 240 ms y salen en 160 ms; los enlaces del menú entran como lista. En el visor, la foto entra desde el lado hacia el que se avanza, cuando ya ha cargado; con el dedo se pasa de foto deslizando, y la foto acompaña al dedo.
- **Acordeón:** la respuesta se despliega en 420 ms.
- **Pasos del tratamiento:** la línea que une los pasos se dibuja con el scroll y cada número se activa al llegar a él. Es el único movimiento ligado al scroll, porque ahí el scroll es el recorrido.
- **Formulario:** los errores aparecen con un fundido; al enviar, el botón pasa a «Enviando…» con un indicador y no admite un segundo envío.

### Tiempos
- `--duration-fast` (160 ms): respuesta inmediata y salidas.
- `--duration-base` (240 ms): cambios de estado y entrada de capas.
- `--duration-slow` (420 ms): acordeón y viaje del retrato.
- `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`): todas las llegadas. Sin rebotes ni curvas elásticas.

### Named Rules
**The No Scroll Reveal Rule.** Nada entra al hacer scroll: ni fotos, ni tarjetas, ni titulares. La única pieza ligada al scroll es la línea de los pasos del tratamiento, porque ahí el scroll es el recorrido.

**The Visible By Default Rule.** El estado por defecto es el contenido visible. Una animación de entrada parte de ahí: si el CSS moderno o el script no están, la página se ve completa y quieta.

**The Less Motion Rule.** Con `prefers-reduced-motion` no hay entradas, desplazamientos ni escalados, y el retrato no viaja; quedan los fundidos y los cambios de color y sombra que confirman un estado (hover, foco, capa abierta, «Enviando…»). El indicador de envío no gira: late despacio con la opacidad (1,2 s).

## Components

Todos suaves y acogedores: redondeados, con estados que responden con calma (160–240 ms) y un foco siempre visible (contorno sólido de 2 px en Pino profundo, separado 2–3 px; en Turquesa de acento sobre noche).

### Buttons
- **Shape:** píldora completa, 48 px de alto (40 px en la variante pequeña; 44 px en pantallas táctiles, igual que las paradas de la visita guiada y los enlaces de la cabecera). Por debajo de 480 px el texto puede pasar a dos líneas en vez de salirse.
- **Primary:** fondo Tinta de texto, texto blanco, Figtree 600 16 px; al pasar, fondo Acción hover y sombra elevada; sube 1 px. «Pedir cita» abre WhatsApp con el mensaje ya escrito y lleva su icono; el formulario queda como alternativa secundaria.
- **Secondary:** transparente con borde de 1,5 px en Borde de control; al pasar, borde y texto en Pino profundo.
- **Ghost:** texto en Pino profundo, sin borde; al pasar, fondo Bruma turquesa. Para «Ver todos…» con flecha.
- **Night:** sobre bandas oscuras, fondo Turquesa de acento con texto en tinta; el secundario de noche es transparente con borde claro. La banda final de cita ya no es oscura: va en Turquesa Up con el botón principal en tinta.

### Chips
- **Insignia:** píldora en Bruma turquesa con texto Pino profundo (Caption): especialidades del equipo, «Sin coste».
- **Dato (fact chip):** píldora blanca con borde de Línea y un icono en círculo de Bruma turquesa; etiqueta pequeña en mayúsculas y valor en negrita («Precio · Presupuesto tras el estudio»).

### Cards / Containers
- **Corner Style:** 12 px en paneles y avisos, 20 px en tarjetas con foto.
- **Background:** Blanco sobre papel; Bruma turquesa como reserva de foto.
- **Shadow Strategy:** sombra de reposo y elevada al pasar (ver Elevation & Depth).
- **Border:** 1 px en Línea.
- **Internal Padding:** 32 px en paneles, 16–24 px en avisos.

### Inputs / Fields
- **Style:** fondo blanco, borde de 1,5 px en Borde de control, radio de 6 px, 48 px de alto, Figtree 17 px.
- **Focus:** contorno sólido de 2 px en Pino profundo separado 2 px; el borde también pasa a Pino.
- **Error:** borde en Peligro y mensaje con icono debajo, asociado al campo solo mientras se ve.

### Navigation
- **Escritorio:** logotipo en azulejo turquesa a la izquierda, enlaces Figtree 600 con un subrayado de 2 px que crece desde el centro (Pino profundo al pasar y en la página actual), teléfono y botón «Pedir cita» a la derecha.
- **Al hacer scroll:** fondo blanco translúcido, borde de Línea y sombra elevada.
- **Móvil:** botón de menú circular que abre un panel a pantalla completa con enlaces grandes y flecha; barra inferior fija «Llamar / WhatsApp».

### Tarjeta de especialidad (signature)
Foto a sangre con radio de 20 px y una etiqueta blanca translúcida que flota abajo (radio de 12 px) con el nombre, una línea de apoyo y una flecha en Pino que se desplaza 3 px al pasar; la foto escala un 3 % en 600 ms.

### Tarjetas informativas (signature)
Tarjetas blancas con sombra de reposo y radio de 12 px sobre un bloque en Bruma turquesa: un icono de 24 px en Pino profundo dentro de un círculo de 48 px en Bruma turquesa, el título (Title sans) y el texto (Small). Son informativas: no se elevan al pasar el ratón ni van numeradas. El icono se elige en Keystatic de una lista cerrada (`src/constants/iconosTarjeta.ts`): Lucide con trazo de 1,75 y un diente dibujado para la web con el mismo trazo.

### Pasos del tratamiento (signature)
Lista vertical con números en círculo de 40 px (serif 18 px en Pino, borde de 1,5 px en Turquesa de acento) unidos por una línea de 1,5 px en Línea.

## Do's and Don'ts

### Do:
- **Do** enmarcar todas las fotos en el rectángulo de 20 px sobre fondo Turquesa Up o Bruma turquesa.
- **Do** abrir cada sección directamente con el titular en serif, con una sola palabra en cursiva; el contexto, en la entradilla.
- **Do** usar el botón principal en tinta y el WhatsApp como acción más visible de cada llamada a la acción.
- **Do** usar fotos reales de la clínica, el equipo y los pacientes con permiso.
- **Do** mantener el foco visible: 2 px sólido en Pino profundo (Turquesa de acento sobre noche).
- **Do** respetar `prefers-reduced-motion`: sin entradas, escalados ni desplazamientos cuando se pide menos movimiento; los cambios de color, opacidad y sombra se mantienen.
- **Do** partir siempre del contenido visible: una animación de entrada es un añadido, nunca la condición para ver la página.

### Don't:
- **Don't** poner un antetítulo en mayúsculas encima de un titular: repite lo que el titular ya dice y aplana el ritmo de la página.
- **Don't** poner texto en Turquesa Up ni en Turquesa de acento sobre fondos claros.
- **Don't** usar esquinas vivas ni radios fuera de 6, 12, 20 px y píldora.
- **Don't** usar más de una palabra en cursiva por titular.
- **Don't** usar sombras negras, duras o de varios niveles; como mucho, reposo y elevada.
- **Don't** dar por hecho un tema oscuro: la web es solo clara.
- **Don't** animar la entrada de fotos, texto o tarjetas al hacer scroll, ni repetir la misma entrada en cada sección: el único momento es la entrada de la portada.
- **Don't** volver al arco de medio punto ni a otras formas recortadas en las fotos.
- **Don't** escribir colores en hex dentro de componentes; siempre tokens.

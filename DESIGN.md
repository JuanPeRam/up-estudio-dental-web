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
  tinta-suave: "#3d4f4b"
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

La web es la entrada a una clínica a la que se llega andando. Los arcos que coronan la foto principal, los retratos del equipo y el collage de la zona infantil son puertas que invitan a pasar; el turquesa pastel de la marca baña la primera banda como la luz de un local a pie de calle, y una banda de madera clara recuerda la recepción. Todo es luminoso, cercano y sereno: mucho aire, fotos reales de la clínica y de su gente, y nada que intimide a quien llega con un niño de la mano o con miedo al dentista.

La tipografía mezcla una serif de revista (Playfair Display) con una sans redonda y amable (Figtree). Cada titular guarda una sola palabra en cursiva verde pino, como un subrayado hablado: «Clínica dental *familiar*», «en la *misma* clínica». Los controles son suaves y acogedores: botones en píldora, esquinas generosas, nada anguloso. La web solo tiene tema claro (`color-scheme: light`).

**Key Characteristics:**
- Arcos (medio punto arriba, esquinas de 20 px abajo) como marco de las fotos de personas y espacios.
- Banda de firma en Turquesa Up al principio de la portada; bandas de arena y de tinta nocturna para ritmo.
- Una palabra en cursiva verde pino por titular, nunca más.
- Botones en píldora; el principal, en tinta, no en turquesa.
- Fotos reales siempre; nada de ilustraciones genéricas ni imágenes de banco.

## Colors

Una paleta de agua y madera: turquesas pastel de la marca, un verde pino profundo para lo que hay que leer y pulsar, y neutros fríos casi blancos.

### Primary
- **Turquesa Up** (`turquesa-up`): el turquesa pastel de la marca. Banda de firma de la portada, fondo de los arcos de retrato y de las cabeceras que presentan a la clínica. Es fondo, nunca texto.
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
- **Label** (`label`): mayúsculas espaciadas en Pino profundo (Turquesa de acento sobre noche) para etiquetar una tarjeta o un dato («Horario», «Dirección», «Parada 1 de 6», «Error 404»), nunca como antetítulo encima de un titular.
- **Caption** (`caption`): especialidades bajo un nombre, insignias y metadatos.
- **Control** (`control`): texto de campos de formulario y de los teléfonos destacados; 17 px para que el móvil no haga zoom al enfocar un campo.
- **Botón pequeño** (`button-sm`): botón compacto de la cabecera y etiquetas de las tarjetas de especialidad en móvil.

### Named Rules
**The One Italic Word Rule.** Cada titular en serif lleva como mucho una palabra en cursiva (`<em>`), en Pino profundo (Turquesa de acento sobre noche). Es el acento de la marca; repetirla lo apaga.

**The Rem Rule.** Tamaños de letra y alturas de línea en rem, nunca en px: así la web respeta el tamaño de letra que cada persona elige en su navegador.

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

Formas suaves y acogedoras: nada de esquinas vivas. Tres radios (6 px en campos, 12 px en paneles y avisos, 20 px en tarjetas de foto) y la píldora para todo lo pulsable o etiquetable (botones, insignias, chips de datos). La forma propia de la marca es el **arco**: medio punto arriba y 20 px abajo (`border-radius: 999px 999px 20px 20px`), reservado para fotos de personas y espacios: foto principal, retratos del equipo y foto grande del collage. Los iconos van en círculo de Bruma turquesa.

**The Arch Is For People Rule.** El arco enmarca personas y lugares de la clínica; no se usa en botones, tarjetas de texto ni iconos.

## Components

Todos suaves y acogedores: redondeados, con estados que responden con calma (160–240 ms) y un foco siempre visible (contorno sólido de 2 px en Pino profundo, separado 2–3 px; en Turquesa de acento sobre noche).

### Buttons
- **Shape:** píldora completa, 48 px de alto (40 px en la variante pequeña). Por debajo de 480 px el texto puede pasar a dos líneas en vez de salirse.
- **Primary:** fondo Tinta de texto, texto blanco, Figtree 600 16 px; al pasar, fondo Acción hover y sombra elevada; sube 1 px. «Pedir cita» abre WhatsApp con el mensaje ya escrito y lleva su icono; el formulario queda como alternativa secundaria.
- **Secondary:** transparente con borde de 1,5 px en Borde de control; al pasar, borde y texto en Pino profundo.
- **Ghost:** texto en Pino profundo, sin borde; al pasar, fondo Bruma turquesa. Para «Ver todos…» con flecha.
- **Night:** sobre bandas oscuras, fondo Turquesa de acento con texto en tinta; el secundario de noche es transparente con borde claro.

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

### Pasos del tratamiento (signature)
Lista vertical con números en círculo de 40 px (serif 18 px en Pino, borde de 1,5 px en Turquesa de acento) unidos por una línea de 1,5 px en Línea.

## Do's and Don'ts

### Do:
- **Do** enmarcar las fotos de personas y espacios en el arco (`999px 999px 20px 20px`) sobre fondo Turquesa Up o Bruma turquesa.
- **Do** abrir cada sección directamente con el titular en serif, con una sola palabra en cursiva; el contexto, en la entradilla.
- **Do** usar el botón principal en tinta y el WhatsApp como acción más visible de cada llamada a la acción.
- **Do** usar fotos reales de la clínica, el equipo y los pacientes con permiso.
- **Do** mantener el foco visible: 2 px sólido en Pino profundo (Turquesa de acento sobre noche).
- **Do** respetar `prefers-reduced-motion`: sin escalados ni desplazamientos suaves cuando se pide menos movimiento.

### Don't:
- **Don't** poner un antetítulo en mayúsculas encima de un titular: repite lo que el titular ya dice y aplana el ritmo de la página.
- **Don't** poner texto en Turquesa Up ni en Turquesa de acento sobre fondos claros.
- **Don't** usar esquinas vivas ni radios fuera de 6, 12, 20 px y píldora.
- **Don't** usar más de una palabra en cursiva por titular.
- **Don't** usar sombras negras, duras o de varios niveles; como mucho, reposo y elevada.
- **Don't** dar por hecho un tema oscuro: la web es solo clara.
- **Don't** escribir colores en hex dentro de componentes; siempre tokens.

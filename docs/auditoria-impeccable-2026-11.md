# Auditoría Impeccable: nueva web «La línea de la sonrisa»

11 de noviembre de 2026. Auditoría técnica (`/impeccable audit`) y revisión final de diseño (`impeccable-finish-reviewer`) del rediseño completo.

## Puntuación

| # | Dimensión | Nota | Hallazgo principal |
|---|-----------|------|--------------------|
| 1 | Accesibilidad | 3/4 | axe-core sin infracciones AA en 9 páginas a 390 y 1280 px tras las correcciones; falta una prueba con lector de pantalla real |
| 2 | Rendimiento | 3/4 | Imágenes de Astro en WebP con anchos adaptados y carga diferida; la línea se calcula una vez y se redibuja con `requestAnimationFrame`. No se ha pasado Lighthouse en producción |
| 3 | Temas | 3/4 | Todo color sale de `tokens.css`; solo tema claro (decisión de producto) |
| 4 | Adaptación | 4/4 | Sin desbordamiento horizontal a 320, 390, 768 y 1280 px; controles de 44 px; cortes en em |
| 5 | Integridad | 4/4 | El detector solo avisa del fondo crema, que es el crema real de la marca en sus publicaciones (decisión fijada) |
| **Total** | | **17/20** | **Bien** |

## Integridad de la implementación: aprobada

La web expresa un sistema propio de la clínica, no una plantilla: la línea de trazo fino de sus publicaciones recorre las etapas de la boca por edades, cambia de color según el campo que cruza (turquesa sobre crema, blanco sobre salvia, salvia sobre pino), rellena cada punto al llegar y termina en el corazón de la marca. Los listados son registros de dos columnas, no rejillas de tarjetas iguales.

## Revisión final de diseño

Primera revisión: veredicto **fix** con 8 correcciones materiales. Segunda revisión: el revisor dio las 8 por resueltas y señaló una regresión (dos secciones salvia seguidas en la ficha de tratamiento). Esa regresión se corrigió después pasando «Otros tratamientos» al campo madera; la comprobé con una captura, pero el revisor no ha vuelto a puntuarla.

1. Equipo real en la primera pantalla, en escritorio y en móvil.
2. La línea ya no cruza la banda de opiniones.
3. La línea pasa por detrás de la foto de la cabecera.
4. Fuera el antetítulo «01 · Parada N de M» de la visita guiada.
5. «Otros tratamientos»: registro de enlaces en lugar de tres tarjetas iguales.
6. Sin franja vacía de opiniones cuando Google no responde.
7. Revisión gratuita: registro sin números en lugar de tres columnas iguales.
8. Pie en el pino de la paleta; título del equipo que incluye al CEO con honestidad.

## Hallazgos abiertos

- **[P2] Reseñas de Google en vivo**: sin `GOOGLE_PLACES_API_KEY` en Vercel la portada solo enlaza a Google. Con la clave se muestran la nota y las reseñas (`TODO.md`).
- **[P2] Retratos del equipo**: los retratos tienen un fondo cian horneado en la foto, algo distinto del salvia. Pendiente la sesión de retratos con el mismo fondo y luz (`TODO.md`).
- **[P3] Lector de pantalla**: la estructura está revisada en el código (encabezados, `fieldset`/`legend` en el preparador, `aria-live` en el mensaje y línea decorativa con `aria-hidden`), pero falta una prueba real con VoiceOver o NVDA.
- **[P3] Lighthouse**: medir LCP y CLS en el despliegue de Vercel.

## Comprobaciones hechas

- `astro check`: 0 errores. `astro build`: correcto.
- axe-core 4.10 (wcag2a, wcag2aa, wcag21aa y buenas prácticas) en /, /tratamientos, /tratamientos/odontopediatria, /equipo, /equipo/cristina, /clinica, /contacto, /aviso-legal y la 404, a 390 y a 1280 px. Lo único que queda son excepciones de WCAG 2.5.8: la casilla de privacidad de /contacto (su `label` entera se puede pulsar) y un enlace dentro de una frase.
- Movimiento: con `prefers-reduced-motion` la línea aparece entera y quieta; sin él, 1 de 11 puntos marcados al cargar, 4 a mitad de página y 11 al final.
- Preparador de WhatsApp: el mensaje y el enlace `wa.me` cambian con ratón y con las flechas del teclado.
- Procedencia: todas las imágenes publicadas llevan su origen incrustado (`impeccable embed-prompt --scan`: 0 sin origen).

# Auditoría de rendimiento · noviembre de 2026

Auditoría de los 25 puntos de la skill `web-performance-audit` sobre la web pública de Up Estudio Dental, con las
correcciones aplicadas en la rama `feat/ecstatic-dirac-cgcxtm`. No cambia el diseño: solo cuándo y cómo se cargan las cosas.

## Stack

- **Astro 7** con `output: 'server'` y adaptador `@astrojs/vercel` 11. Todas las páginas públicas son estáticas
  (`prerender = true`); la nota y las reseñas de Google llegan como *server islands* cacheadas 24 h en la CDN.
  Solo `/contacto` (formulario sin JavaScript, patrón POST → redirección) y las rutas 410/301 van por función.
- Tailwind 3 (PostCSS), fuentes variables autoalojadas con Fontsource, imágenes con `astro:assets` (WebP, `srcset`).
- React solo está para el panel Keystatic (`/keystatic`, que en producción no se monta sin Keystatic Cloud). Ninguna
  página pública lleva islas de React.
- Sin base de datos: contenido en YAML (Keystatic), reseñas de Places API (New), correo con Resend.
- **Hosting:** Vercel. Vista previa en `upestudiodental.vercel.app`; `www.upestudiodental.es` sigue en Wix hasta apuntar
  el dominio (README). No hay `vercel.json`: las cabeceras las pone el adaptador.

## Cómo se ha medido

- `npm run build` (incluye `astro check`) antes y después: 0 errores, 0 avisos.
- Playwright con Chromium 157 contra `.vercel/output/static` servido en local (sin compresión; las islas dan 404 en ese
  servidor, por eso salen dos errores de consola en la portada que en Vercel no existen). Comprobado también con
  `astro dev`: portada, `/tratamientos`, `/equipo`, `/clinica` y `/contacto` cargan sin errores de consola.
- LCP con red Slow 4G simulada (150 ms de latencia, 1,6 Mbps) y CPU ×4, mediana de 3 cargas, en móvil (390 px, DPR 2) y
  escritorio (1366 px). El «antes» es el commit `482f598` compilado aparte con el mismo método.
- Producción (vista previa de Vercel) con `curl`: cabeceras reales de compresión, caché y región.

## Resultado

| Página | Móvil antes | Móvil después | Escritorio antes | Escritorio después |
|---|---|---|---|---|
| `/` | 2,17 s (texto) | **1,35 s** | 2,62 s (foto) | **1,50 s** |
| `/tratamientos` | 2,70 s (foto) | **1,64 s** | 1,75 s (foto) | **1,32 s** |
| `/equipo` | 1,15 s (texto) | 1,19 s (igual) | 1,62 s (retrato) | **1,24 s** |
| `/clinica` | 1,16 s (texto) | 1,18 s (igual) | 1,98 s (foto) | **1,33 s** |

Sin throttling, el LCP de la portada en local pasa de 1,08 s a 0,16 s en móvil y de 1,36 s a 0,18 s en escritorio. CLS
medido: 0 en todas las páginas, antes y después.

Lo que no cambia, porque ya estaba bien: JavaScript de cada página entre 0,9 y 4,5 kB sin comprimir (0,5–2,2 kB gzip),
un solo CSS de 62,7 kB (12,6 kB gzip), 256 variantes WebP bien dimensionadas (ninguna foto se descarga a más de 1,5 veces
el tamaño que ocupa en pantalla, salvo el logo, que va a 3× a propósito para pantallas retina).

## Cambios

1. **La entrada animada de la portada ya no retrasa el LCP** (`src/styles/motion.css`, commit `c35d050`). Las
   animaciones `up-rise` y `up-unveil` partían de opacidad 0, y Chrome no cuenta como pintado un elemento con opacidad 0:
   el LCP (la entradilla en móvil, la foto en escritorio) se apuntaba al final de la animación, 0,7–1,2 s después de
   pintarse. Parten de 0,01, que a la vista es lo mismo. Hay un comentario para que nadie lo vuelva a poner a 0.
2. **Las fotos que son el LCP se piden antes** (commit `d642a4a`).
   - `/tratamientos`: la primera tarjeta, que es el LCP en todos los anchos, iba con `loading="lazy"`. Ahora va con
     `loading="eager"` y `fetchpriority="high"` (prop `priority` de `ServiceCard`). Se probó a pedir la primera fila
     entera al cargar y era peor en móvil (2,2 s frente a 1,6 s): las tres fotos compiten por la red.
   - `/equipo` y `/clinica`: el primer retrato y la primera foto de la visita son el LCP desde 640 y 600 px, pero en
     móvil lo es el texto. Pedirlas siempre al cargar retrasaba ~350 ms el LCP del texto en móvil (compiten con las
     fuentes). Se precargan con `<link rel="preload" media="…">` solo en esos anchos (componente nuevo
     `src/components/UI/PreloadImage.astro`) y la foto sigue con carga diferida. Las opciones del retrato de `TeamCard`
     están en `src/constants/imagenes.ts` para que la tarjeta y la precarga pidan exactamente la misma foto (comprobado
     en el HTML generado).
3. **Favicon de 64 px** (`public/img/favicon-64.png`, commit `a3d5f41`). Cada primera visita descargaba como favicon el
   PNG del logo de 500 × 500 (69,5 kB). Ahora pesa 3,7 kB. El PNG grande se queda para el logo de los datos estructurados.
4. **Una sola llamada a Places para las dos islas de la portada** (`src/lib/googleReviews.ts`, commit `bd755f0`). La nota
   y las reseñas se piden a la vez; con la caché en memoria vacía, cada isla hacía su propia petición a Google (cada una
   se factura). Ahora comparten la petición en curso.

## Los 25 puntos

Ordenados por prioridad (impacto alto y esfuerzo bajo primero). ✅ cumple · ⚠️ parcial · ❌ falta · ➖ no aplica.

| # | Optimización | Estado | Impacto | Esfuerzo | Métrica | Evidencia / nota |
|---|---|---|---|---|---|---|
| 2 | Imágenes modernas | ✅ corregido | Alto | Bajo | LCP | Ya eran WebP con `srcset`/`sizes`, dimensiones y `lazy`; la foto del hero con `eager` + `fetchpriority="high"`. Faltaba: LCP de `/tratamientos` en `lazy`, LCP de `/equipo` y `/clinica` sin precarga en tableta y escritorio, y favicon de 70 kB. Corregido (cambios 2 y 3). AVIF no se ha activado: ver «Pendiente». |
| — | Animación de entrada y LCP | ✅ corregido | Alto | Bajo | LCP | No es un punto de la lista, pero era el mayor problema: cambio 1. |
| 19 | Proximidad de infraestructura | ❌ manual | Medio | Bajo | TTFB | Las funciones corren en `iad1` (Washington): `x-vercel-id: …::iad1::…` en `/contacto` y en `/_server-islands/*`. Los usuarios están en Madrid. Ver «Pasos manuales». |
| 15 | Caché de navegador | ✅ | Alto | — | Visitas repetidas | Verificado en la vista previa: `/_astro/*` con `public, max-age=31536000, immutable` (lo pone el adaptador); HTML con `public, max-age=0, must-revalidate`; islas con `s-maxage=86400, stale-while-revalidate` (`x-vercel-cache: HIT`); `/contacto` con `private, no-store` a propósito. |
| 13 | Compresión | ✅ | Alto | — | Transferencia | `content-encoding: br` en HTML, CSS e islas (vista previa de Vercel). |
| 14 | CDN | ✅ | Alto | — | TTFB | HTML estático y assets servidos por la CDN de Vercel (`x-vercel-cache: HIT`). |
| 3 | Estrategia de renderizado | ✅ | Alto | — | TTFB, LCP | Todo estático salvo `/contacto` (formulario sin JS que necesita el servidor en el POST) y las islas de Google. |
| 8 | Fuentes | ✅ | Medio | — | LCP, CLS | Autoalojadas (Fontsource), variables, `font-display: swap`, subconjuntos por `unicode-range`, precarga de las dos de latín (`Layout.astro`). Los archivos cirílico/vietnamita se generan pero nunca se descargan. |
| 4 | Terceros diferidos | ✅ | Medio | — | LCP, INP | Ningún script de terceros. Los avatares de las reseñas (Google) van con `lazy` y `no-referrer`. |
| 5 | Code splitting | ✅ | Medio | — | INP | 0,9–4,2 kB de JS por página, un script por componente. El `client.js` de React (141 kB) solo lo usa `/keystatic`. |
| 1 | Skeleton screens | ✅ | Bajo | — | CLS | Las reseñas (server island) tienen esqueleto con la forma de las tarjetas (`Opinions.astro`). El spinner del botón de envío es un estado, no una vista de datos. |
| 9 | Deduplicación de peticiones | ✅ corregido | Bajo | Bajo | Coste de Places | Islas cacheadas en la CDN; faltaba compartir la petición en curso: cambio 4. |
| 12 | Peticiones en paralelo | ✅ | Bajo | — | TTFB | Sin cascadas en tiempo de ejecución; las dos islas se piden en paralelo; `ClinicTour` usa `Promise.all` (en el build). |
| 20 | Columnas explícitas | ✅ | Bajo | — | Payload | Places se pide con `X-Goog-FieldMask: rating,userRatingCount,reviews`. |
| 24 | RUM | ❌ manual | Medio | Bajo | Todas | No hay métricas de usuarios reales. Ver «Pasos manuales» (afecta a la política de privacidad). |
| 25 | Pruebas adversas | ⚠️ | Bajo | Medio | Todas | No hay CI en el repo. Hecho a mano para este informe (Slow 4G + CPU ×4). Ver «Pendiente». |
| 22 | Escalado horizontal | ✅ | Bajo | — | Disponibilidad | Funciones sin estado salvo la caché de Places y el límite de envíos del formulario, en memoria por instancia y documentados como tales. Suficiente para una clínica. |
| 16 | Colas de trabajo | ➖ | — | — | — | Un único correo por envío (Resend, `AbortSignal.timeout(8000)`); la persona necesita saber en el momento si salió. Una cola sería sobreingeniería. |
| 23 | Trazabilidad (OpenTelemetry) | ➖ | — | — | — | Sobreingeniería para una web estática con dos funciones. Basta con los logs de Vercel (`console.error` en Places y Resend). |
| 11 | Paginación | ➖ | — | — | — | Colecciones de 5–9 entradas; Places devuelve como mucho 5 reseñas. |
| 6 | Virtualización | ➖ | — | — | — | No hay listas largas. |
| 7 | Re-renderizados | ➖ | — | — | — | No hay componentes de framework en el cliente. |
| 10 | Debounce | ➖ | — | — | — | No hay búsquedas ni autocompletado. |
| 17 | N+1 | ➖ | — | — | — | Sin base de datos. |
| 18 | Índices | ➖ | — | — | — | Sin base de datos. |
| 21 | Connection pooling | ➖ | — | — | — | Sin base de datos. |

## Pasos manuales

Nada de esto se puede hacer desde el repositorio. Ninguno toca la base de datos (no hay).

1. **Llevar los cambios a producción.** Revisar y fusionar esta rama en `master` (Vercel despliega desde ahí). No hay
   cambios de cabeceras ni de variables de entorno.
   - Comprobar después: PageSpeed Insights de `https://upestudiodental.vercel.app/` (o del dominio cuando apunte a
     Vercel); el LCP de laboratorio de la portada debería bajar del orden de 1 s en móvil.
2. **Región de las funciones: de `iad1` (Washington) a `cdg1` (París) o `fra1` (Fráncfort).** En Vercel → proyecto →
   Settings → Functions → *Function Region*, y volver a desplegar. El adaptador de Astro no tiene opción para esto.
   - Afecta a `/contacto` (se genera en cada visita, `no-store`), a las islas de Google cuando la CDN no las tiene, a
     `/api/estado-resenas` y a `/services`. Desde España ahorra un viaje transatlántico (~90 ms) en cada una.
   - Contrapartida: la llamada a Resend (en EE. UU.) del envío del formulario tarda ~80 ms más. Compensa, porque cada
     visita a `/contacto` es un GET y pocas acaban en envío.
   - Riesgo bajo; para deshacerlo, volver a poner `iad1` y redesplegar.
   - Verificar: `curl -sI https://upestudiodental.vercel.app/contacto | grep x-vercel-id` debe mostrar `cdg1` (o `fra1`)
     en lugar de `iad1`.
3. **(Opcional) Métricas de usuarios reales.** Activar Vercel Speed Insights (Vercel → proyecto → Speed Insights) y
   añadir su componente a `Layout.astro` (paquete `@vercel/speed-insights`). No usa cookies, pero envía datos de
   navegación a Vercel: antes, que la clínica lo incluya en la política de privacidad (la revisión de «Destinatarios» ya
   está pendiente en `TODO.md`). Por eso no se ha añadido en código.

## Pendiente

Por prioridad:

1. **Región de las funciones** (paso manual 2).
2. **RUM** (paso manual 3), cuando la clínica dé el visto bueno a la política de privacidad.
3. **AVIF.** `<Picture formats={['avif', 'webp']}>` ahorraría ~20–30 % del peso de las fotos (la portada completa en móvil
   descarga ~1 MB de fotos al bajar hasta el final, aunque solo una parte antes del primer scroll). No se ha hecho: cambia
   `<img>` por `<picture>` en todas las fotos (riesgo con los selectores de CSS de los marcos y las animaciones) y
   multiplica el tiempo de build (hoy 250 variantes en ~30 s). Merece la pena si las métricas reales muestran LCP lento
   en móvil.
4. **Presupuesto de rendimiento en CI.** No hay CI en el repo. Si se añade, un paso que falle si el JS de una página
   pasa de ~10 kB o el CSS de ~20 kB gzip, y Lighthouse CI sobre la portada con throttling de móvil.
5. **`/contacto` estática.** Se podría prerenderizar el GET y mover el POST a un endpoint aparte, pero obliga a
   rehacer el formulario sin JavaScript (errores y valores rellenados en el servidor). Con la región en Europa
   (paso 2) no compensa.

## Segunda ronda (diagnóstico)

Correcciones del diagnóstico del 22/11/2026: vulnerabilidades de `npm audit` y cabeceras de seguridad (hasta ahora
solo había HSTS, que pone Vercel). No cambia nada de lo de la primera ronda: las cabeceras de caché (`/_astro/*`
inmutable, HTML `must-revalidate`, islas `s-maxage`, `/contacto` `no-store`) siguen saliendo igual.
El paso manual de la región ya está hecho: `/contacto` responde con `x-vercel-id: …::cdg1::…`.

### Dependencias (commit `8d3230f`)

`npm audit fix` sin `--force`, dentro de los rangos de `package.json`: `@keystatic/core` 0.6.9 → 0.6.10 y
`@vercel/nft` 1.11.1 → 1.11.11, que arrastran `minimatch` 11.0.9 y `glob` 14.0.6. Ninguna llegaba al navegador.

| | Total | Moderadas | `--omit=dev` |
|---|---|---|---|
| Antes | 4 | 4 | 4 |
| Después | **0** | 0 | **0** |

Comprobado: `npm run build` (con `astro check`) sin errores y el panel `/keystatic` en `astro dev` (portada, lista de
servicios y ficha del equipo) sin errores de consola.

### Cabeceras de seguridad (commit `081572c`)

| Cabecera | Dónde | Valor |
|---|---|---|
| `Content-Security-Policy` | Astro (`security.csp` en `astro.config.mjs`) | `default-src 'self'; img-src 'self' data: https://lh3.googleusercontent.com; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; script-src 'self' 'sha256-…' (14 hashes); style-src 'self' 'unsafe-inline'` |
| `X-Content-Type-Options` | `vercel.json` | `nosniff` |
| `X-Frame-Options` | `vercel.json` | `DENY` |
| `Referrer-Policy` | `vercel.json` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `vercel.json` | `camera=(), microphone=(), geolocation=(), payment=()` |
| `Strict-Transport-Security` | Vercel (sin cambios) | `max-age=63072000; includeSubDomains; preload` |

Por qué así:

- **La CSP la genera Astro y no `vercel.json`.** La web tiene `<script>` en línea: los pequeños de los componentes y,
  sobre todo, los cargadores de las server islands, que llevan una clave cifrada distinta en cada build. Un hash fijo
  en `vercel.json` se rompería en el siguiente despliegue, y `'unsafe-inline'` en `script-src` dejaría la CSP sin
  efecto contra XSS. Astro calcula los hashes al compilar; con `staticHeaders` del adaptador los escribe como cabecera
  de cada página estática en `.vercel/output/config.json`, y en lo que genera la función (`/contacto`, islas) los pone
  en la respuesta.
- **`scripts/fix-vercel-csp-routes.mjs`** (en `vercel-build`): el adaptador escribe esas rutas sin anclar y sin
  `continue` (`"src": "/"`). Como en Vercel `src` es una expresión regular, `/` podría casar con cualquier dirección y
  cortar el enrutado. El script las deja como las de `vercel.json` (`^/$`, `continue: true`). Comprobado con
  `vercel build` (CLI 66.6) en una copia: las cabeceras de `vercel.json` se fusionan con la salida del adaptador.
- **`style-src 'unsafe-inline'`**: hay atributos `style` (variables CSS, `object-position`, `view-transition-name`).
  No hay `<style>` en línea; el riesgo de inyectar estilos es bajo.
- **Avatares de las reseñas**: Places devuelve fotos de `lh3.googleusercontent.com` que carga el navegador. El
  `onerror="…"` que ponía la inicial si fallaba la foto lo habría bloqueado la CSP; ahora lo hace un listener en
  `Opinions.astro` (fase de captura).
- **Sin iframes ni mapas** (Google Maps va por enlace), **sin fuentes externas** (Fontsource), **sin analítica** y
  **sin peticiones a terceros desde el navegador** (Places y Resend van desde el servidor): `frame-src 'none'`,
  `connect-src 'self'`.
- **`/keystatic`** (Keystatic Cloud en producción) no lleva la CSP estricta: es una aplicación de React que inyecta
  estilos, pide la fuente Inter a Google Fonts y habla con `api.keystatic.cloud`, y sin una cuenta con acceso no se
  puede comprobar el panel por dentro. `src/middleware.ts` le pone solo lo que no puede romper nada
  (`frame-ancestors 'none'; object-src 'none'; base-uri 'self'`) y la política completa en
  `Content-Security-Policy-Report-Only`, que solo avisa en la consola.
- **HSTS** no se toca: Vercel ya lo envía con `preload`. Ponerlo a mano con `includeSubDomains` afectaría a todos los
  subdominios de `upestudiodental.es` cuando se apunte el dominio, que hoy siguen en Wix/Arsys.
- `markdown.syntaxHighlight: false`: no hay Markdown y Astro avisaba de que Shiki no es compatible con la CSP.

Cómo se ha probado (Playwright, Chromium, móvil 390 px y escritorio 1366 px, 25 rutas: portada con menú móvil y
«Ver más» de las reseñas, `/tratamientos` y sus 9 fichas, `/equipo` y sus 5 fichas, `/clinica` con el visor de fotos,
`/contacto` con envío, textos legales, 404, una redirección 301 y `/keystatic`), recogiendo errores de consola y
eventos `securitypolicyviolation`:

1. **Local**: salida de `vercel build` (con `PUBLIC_KEYSTATIC_CLOUD_PROJECT` de prueba para que exista `/keystatic`)
   servida con un emulador de las rutas de `config.json` y la función de Astro. **0 violaciones**. Errores de consola
   solo los esperados: el 503 del envío del formulario sin `RESEND_API_KEY` (la página muestra el aviso), el 404 de la
   página 404 y el de un avatar roto creado a propósito (se sustituye por las iniciales). Comprobado también que la
   CSP bloquea un `<script>` en línea y una imagen de otro dominio.
2. **Producción** (`upestudiodental.vercel.app`) interceptando las respuestas e inyectando las cabeceras nuevas (la
   CSP con los hashes de los scripts de ese HTML, que es lo que hará Astro al compilar; en las islas se quita el
   `onerror` que esta rama elimina): **0 violaciones**, con las 3 reseñas reales y sus 3 avatares de Google, la nota
   y el visor de la clínica. El formulario no se envió en producción (mandaría un correo a la clínica).

Coste: la cabecera CSP ocupa ~1 kB por página HTML (sin efecto medible en LCP/CLS; las páginas no cambian).

### Pasos manuales tras fusionar

1. Fusionar en `master` (Vercel despliega). Ninguna variable de entorno nueva.
2. Comprobar las cabeceras:
   ```sh
   curl -sI https://upestudiodental.vercel.app/ | grep -iE 'content-security|x-frame|x-content|referrer|permissions|strict-transport'
   curl -sI https://upestudiodental.vercel.app/tratamientos/endodoncia | grep -i content-security
   curl -sI https://upestudiodental.vercel.app/contacto | grep -iE 'content-security|cache-control'
   curl -sI https://upestudiodental.vercel.app/keystatic | grep -i content-security
   ```
   La portada y las fichas deben traer `script-src 'self' 'sha256-…'`; `/contacto`, la misma política y
   `private, no-store`; `/keystatic`, la política corta y la `-Report-Only`.
3. Abrir la portada con las herramientas del navegador: la consola sin errores de CSP y las reseñas con sus fotos.
4. Entrar en `/keystatic` con una cuenta de Keystatic Cloud, editar algo y mirar la consola. Si no hay avisos
   `[Report Only]`, se puede pasar esa política a obligatoria en `src/middleware.ts`; si los hay, añadir el origen que
   indiquen.
5. Vuelta atrás: revertir el commit `081572c` (o quitar `security: { csp }` de `astro.config.mjs` si solo falla la CSP).

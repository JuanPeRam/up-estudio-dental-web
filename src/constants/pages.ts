/** Rutas públicas de la web. Si cambias una, añade la redirección 301 en astro.config.mjs. */
const paths = {
  "Inicio": "/",
  "Clínica": "/clinica",
  "Tratamientos": "/tratamientos",
  "Equipo": "/equipo",
  "Contacto": "/contacto"
}

const politicsPaths = {
  "Política de privacidad": "/politica-privacidad",
  "Política de cookies": "/politica-cookies",
  "Aviso legal": "/aviso-legal"
}

/** Ficha de un tratamiento: /tratamientos/<slug> */
const treatmentPath = (slug: string) => `/tratamientos/${slug}`
/** Ficha de una persona del equipo: /equipo/<slug> */
const memberPath = (slug: string) => `/equipo/${slug}`

/**
 * Nombre de la transición del retrato de una persona (view-transition-name): la tarjeta y la ficha
 * comparten nombre y el navegador lleva la foto de una a otra al cambiar de página. Va como
 * `style={portraitTransition(id)}` en el marco .up-cutout-photo; cada nombre, una sola vez por página.
 */
const portraitTransition = (slug: string) => `--vt: retrato-${slug.replace(/[^a-zA-Z0-9_-]/g, "-")}`

export {
  paths, politicsPaths, treatmentPath, memberPath, portraitTransition
}

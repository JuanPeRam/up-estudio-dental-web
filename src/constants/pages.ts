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

export {
  paths, politicsPaths, treatmentPath, memberPath
}

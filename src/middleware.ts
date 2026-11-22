import { defineMiddleware } from "astro:middleware";

/**
 * CSP propia del panel /keystatic (Keystatic Cloud en producción).
 *
 * Astro pone a todas las páginas la CSP estricta de astro.config.mjs, pero el panel es una aplicación de
 * React que inyecta estilos y habla con Keystatic Cloud y GitHub, y sin una cuenta con acceso no se puede
 * comprobar todo lo que carga una vez dentro. Por eso aquí:
 * - se aplica solo lo que no puede romper nada (que no se meta en un iframe, nada de <object>, <base> propio);
 * - y la política completa va en modo Report-Only: no bloquea, solo avisa en la consola del navegador.
 *   Si tras unos días usándolo la consola no muestra avisos «[Report Only]», se puede pasar a obligatoria.
 *
 * El middleware solo corre en las rutas que genera la función; /keystatic lo es (no se prerenderiza).
 */
const KEYSTATIC_CSP = "frame-ancestors 'none'; object-src 'none'; base-uri 'self'";
const KEYSTATIC_CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  // Keystatic pide la fuente Inter a Google Fonts.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  // Imágenes subidas a Keystatic Cloud y avatares de GitHub.
  "img-src 'self' data: blob: https://api.keystatic.cloud https://avatars.githubusercontent.com",
  "connect-src 'self' https://api.keystatic.cloud https://keystatic.cloud",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
].join("; ");

const esPanel = (pathname: string) => pathname === "/keystatic" || pathname.startsWith("/keystatic/");

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!esPanel(context.url.pathname)) return response;

  // Las respuestas de redirección (Response.redirect) tienen las cabeceras inmutables: se copian.
  const headers = new Headers(response.headers);
  headers.set("Content-Security-Policy", KEYSTATIC_CSP);
  headers.set("Content-Security-Policy-Report-Only", KEYSTATIC_CSP_REPORT_ONLY);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
});

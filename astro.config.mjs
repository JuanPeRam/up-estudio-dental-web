import { defineConfig, envField } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import keystatic from "@keystatic/astro";

/**
 * Redirecciones permanentes (301) para no perder posicionamiento:
 * - las direcciones de la web anterior en Wix, que Google tiene indexadas;
 * - las primeras rutas en inglés de esta web (/clinic, /team…). /services está en src/pages/services.ts
 *   porque conserva el tratamiento elegido (?servicio=…).
 * Las páginas de Wix sin equivalente (tienda de ejemplo, eventos…) responden 410 desde src/pages.
 */
const permanent = (destination) => ({ status: 301, destination });
const redirects = {
  // Web anterior (Wix)
  '/blank-1': permanent('/clinica'),
  '/blank-2': permanent('/#opiniones'),
  '/blank-3': permanent('/tratamientos'),
  '/blank-4': permanent('/contacto'),
  '/blank-5': permanent('/equipo'),
  '/book-online': permanent('/contacto'),
  '/service-page/revisiones-dentales-gratuitas': permanent('/tratamientos/revisiones-dentales'),
  '/service-page/limpieza-bucal': permanent('/tratamientos/limpieza-bucal'),
  '/service-page/blanqueamiento-philips-zoom': permanent('/tratamientos/blanqueamiento-dental'),
  '/booking-calendar/limpieza-bucal': permanent('/tratamientos/limpieza-bucal'),
  '/booking-calendar/blanqueamiento-philips-zoom': permanent('/tratamientos/blanqueamiento-dental'),
  '/booking-calendar/revisiones-dentales-gratuitas': permanent('/tratamientos/revisiones-dentales'),
  // Primeras rutas en inglés
  '/clinic': permanent('/clinica'),
  '/team': permanent('/equipo'),
  '/member/[id]': permanent('/equipo/[id]'),
  '/contact': permanent('/contacto'),
  '/privacy-policy': permanent('/politica-privacidad'),
  '/cookies-policy': permanent('/politica-cookies'),
  '/legal-disclaimer': permanent('/aviso-legal'),
};

// Tailwind 3 se aplica con PostCSS (postcss.config.mjs) sobre src/styles/tailwind.css.
// https://astro.build/config
export default defineConfig({
  // Dominio oficial: canonical, sitemap, Open Graph y datos estructurados salen de aquí.
  site: 'https://www.upestudiodental.es',
  trailingSlash: 'never',
  redirects,
  env: {
    schema: {
      // Clave de Places API (New) para las reseñas de Google. Se guarda en Vercel, nunca en el repo.
      GOOGLE_PLACES_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [react({
    experimentalReactChildren: true
  }), icon(), keystatic(), sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/keystatic'),
  })],
  output: 'server',
  adapter: vercel()
});

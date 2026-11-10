import { defineConfig, envField } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import keystatic from "@keystatic/astro";
import { loadEnv } from "vite";

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

/**
 * El panel /keystatic solo se monta en `astro dev` o cuando hay proyecto de Keystatic Cloud.
 * Sin Cloud usa almacenamiento local, que no pide contraseña: en producción dejaría el panel
 * (y su API) abierto a cualquiera. Con esto, sin la variable, /keystatic responde 404.
 */
const { PUBLIC_KEYSTATIC_CLOUD_PROJECT } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const keystaticPanel = () => {
  const integration = keystatic();
  const setup = integration.hooks["astro:config:setup"];
  return {
    ...integration,
    hooks: {
      "astro:config:setup": (options) => {
        if (options.command === "dev" || PUBLIC_KEYSTATIC_CLOUD_PROJECT?.trim()) return setup(options);
      },
    },
  };
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
      // Opcional: si no está, se usa el Place ID de src/constants/personal.ts.
      GOOGLE_PLACE_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Token para consultar /api/estado-resenas (diagnóstico de Places). Sin él, la ruta responde 404.
      DIAGNOSTICO_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Clave de Resend para enviar el formulario de contacto por correo. Se guarda en Vercel.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Opcionales: buzón que recibe los mensajes (por defecto el de src/constants/personal.ts)
      // y remitente, que debe ser del dominio verificado en Resend.
      CONTACT_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [react({
    experimentalReactChildren: true
  }), icon(), keystaticPanel(), sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/keystatic'),
  })],
  output: 'server',
  adapter: vercel()
});

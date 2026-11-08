# Oficial Up Studio Dental Website 🦷


## 🚀 How to install
### 1. Clone the project
```sh
git clone https://github.dev/JuanPeRam/up-estudio-dental-web
```
### 2. Install the dependencies
```sh
npm install
```

### 3. Run the local server
```sh
npm run dev
```
or
```sh
yarn dev
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✏️ Panel de administración (Keystatic)

Los servicios, la rejilla de especialidades de la portada y el equipo se editan desde **`/keystatic`**.

- Los datos están en `src/content/{servicios,especialidades,equipo}/*.yaml` y las fotos en `src/assets/cms/<colección>/<entrada>/`.
- El esquema del panel está en `keystatic.config.ts` y el que valida la web en `src/content.config.ts`. Si añades un campo, añádelo en los dos.
- **En local** (`npm run dev`) el panel guarda directamente en los ficheros del proyecto.
- **En producción** usa Keystatic Cloud: cada cambio se guarda como un commit en GitHub y Vercel republica la web en uno o dos minutos.

### Puesta en marcha de Keystatic Cloud (una vez)

1. Entra en [keystatic.cloud](https://keystatic.cloud) con GitHub, crea un equipo y un proyecto y conéctalo al repositorio `JuanPeRam/up-estudio-dental-web` (rama `master`).
2. En Vercel, añade la variable de entorno `PUBLIC_KEYSTATIC_CLOUD_PROJECT` con el valor `equipo/proyecto` que muestra Keystatic Cloud y vuelve a desplegar.
3. En Keystatic Cloud, invita a los propietarios por correo. El plan gratuito admite hasta 3 usuarios.
4. Los propietarios entran en `https://<tu-dominio>/keystatic` con su correo.

## 🔎 SEO y migración desde Wix

- **Dominio oficial:** `https://www.upestudiodental.es` (campo `site` de `astro.config.mjs`). De ahí salen el canonical, el sitemap, Open Graph y los datos estructurados.
- **Rutas en español y sin barra final:** `/clinica`, `/tratamientos`, `/tratamientos/<slug>`, `/equipo`, `/equipo/<slug>`, `/contacto`, `/politica-privacidad`, `/politica-cookies`, `/aviso-legal`. Están centralizadas en `src/constants/pages.ts`.
- **Redirecciones 301** de la web de Wix (`/blank-1`…`/blank-5`, `/service-page/*`, `/booking-calendar/*`, `/book-online`) y de las rutas antiguas en inglés: en `astro.config.mjs`. Las páginas de Wix sin equivalente (tienda de ejemplo, eventos, referidos) responden **410** desde `src/pages`.
- Si cambias una ruta, añade su redirección 301.

### Al apuntar el dominio a Vercel

1. En Vercel → Domains, añade `www.upestudiodental.es` como dominio principal y `upestudiodental.es` con redirección a `www`.
2. Redirige también `upestudiodental.vercel.app` a `www.upestudiodental.es` para que Google no indexe el subdominio de Vercel.
3. En Google Search Console, la propiedad `https://www.upestudiodental.es` sigue verificada: la web nueva lleva la misma etiqueta `google-site-verification` que Wix (en `src/layouts/Layout.astro`). Envía `https://www.upestudiodental.es/sitemap-index.xml` y, si puedes, añade también la propiedad de dominio verificada por DNS.
4. Comprueba que la web de la ficha de Google Business Profile apunta a `https://www.upestudiodental.es` y que el teléfono coincide con el de la web.

### Datos de la clínica

Nombre, NIF, dirección, teléfonos, horario y el aviso de «Urgencias 24 h» están en `src/constants/personal.ts`. De ahí salen la web, los textos legales y los datos estructurados para Google. Si la clínica deja de atender urgencias 24 h, pon `emergencies` a `null` y el aviso desaparece de toda la web (revisa también el texto de la ficha de endodoncia).

### Reseñas de Google

Las reseñas y la nota media se leen en vivo de la ficha de Google (Places API (New), Place ID en `src/constants/personal.ts`) desde `src/components/Comments/GoogleReviews.astro`. Es un *server island*: la portada sigue siendo estática y ese bloque lo genera el servidor, con la respuesta cacheada 24 h en la CDN de Vercel (unas 30 consultas al mes, dentro de la cuota gratuita).

- Necesita la variable de entorno `GOOGLE_PLACES_API_KEY` en Vercel (Settings → Environment Variables), con una clave restringida a Places API (New). Para probarlo en local, ponla en `.env`.
- Sin clave, o si Google no responde, la sección muestra solo los botones «Leer todas en Google» y «Escribir una reseña».
- Google devuelve como máximo 5 reseñas; se muestran las 3 más recientes de 4 o más estrellas.

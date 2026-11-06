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

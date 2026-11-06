import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import keystatic from "@keystatic/astro";

// Tailwind 3 se aplica con PostCSS (postcss.config.mjs) sobre src/styles/tailwind.css.
// https://astro.build/config
export default defineConfig({
  site: 'https://upestudiodental.vercel.app',
  integrations: [react({
    experimentalReactChildren: true
  }), icon(), keystatic(), sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/keystatic'),
  })],
  output: 'server',
  adapter: vercel()
});

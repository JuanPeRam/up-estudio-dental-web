import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://upestudiodental.vercel.app',
  integrations: [react({
    experimentalReactChildren: true
  }), icon(), sitemap({
    filter: (page) => !page.includes('/404'),
  })],
  output: 'server',
  adapter: vercel()
});
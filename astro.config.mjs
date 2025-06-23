import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';  // o serverless si prefieres
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danielgomezfullstack.vercel.app',
  output: 'static',    // o 'server' si usas serverless
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),         // aunque vayamos a exponerlo manualmente
  ],
});

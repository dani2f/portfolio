import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danielgomezfullstack.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({
      filter: page => !page.includes('/secret/'),
      changefreq: 'daily',
      priority: 0.8,
    }),
  ],
});

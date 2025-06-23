import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';  // o serverless si prefieres
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danielgomezfullstack.vercel.app',
  output: 'server',    // o 'server' si usas serverless
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(
		{
			changefreq: 'daily',
			priority: 0.8,
			filter: (page) => !page.includes('/secret/'),
		}		
	),         // aunque vayamos a exponerlo manualmente
  ],
});

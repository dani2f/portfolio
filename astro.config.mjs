
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// ...
	site: 'https://danielgomezfullstack.vercel.app',
	integrations: [
		tailwind(),
		sitemap({
			filter: (page) => !page.includes('/secret/'),  // opcional: excluir rutas
			changefreq: 'daily',
			priority: 0.8,
		  }),
	],
	output: 'server',
	adapter: vercel(),
});
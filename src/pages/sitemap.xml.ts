import { getSiteMap } from '@astrojs/sitemap';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const xml = await getSiteMap({
    filter: (page) => !page.includes('/secret/'),
    changefreq: 'daily',
    priority: 0.8,
  });
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

// src/pages/sitemap.xml.ts
// Sitemap statique généré par Astro — pas de plugin externe
import type { APIRoute } from 'astro';

const site = 'https://www.psycho-sante74.com';

const pages = [
  { url: '/',                  priority: '1.0', changefreq: 'monthly' },
  { url: '/emdr/',             priority: '0.8', changefreq: 'yearly'  },
  { url: '/tcc/',              priority: '0.8', changefreq: 'yearly'  },
  { url: '/pnl/',              priority: '0.8', changefreq: 'yearly'  },
  { url: '/sexologie/',        priority: '0.8', changefreq: 'yearly'  },
  { url: '/dietetique/',       priority: '0.8', changefreq: 'yearly'  },
  { url: '/kinesiologie/',     priority: '0.8', changefreq: 'yearly'  },
  { url: '/sabine-accorsini/', priority: '0.7', changefreq: 'yearly'  },
  { url: '/marie-koeberle/',   priority: '0.7', changefreq: 'yearly'  },
  { url: '/sophie-durand/',    priority: '0.7', changefreq: 'yearly'  },
  { url: '/anne-berthion/',    priority: '0.7', changefreq: 'yearly'  },
  { url: '/mentions-legales/', priority: '0.3', changefreq: 'yearly'  },
];

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ url, priority, changefreq }) => `  <url>
    <loc>${site}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () =>
  new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });

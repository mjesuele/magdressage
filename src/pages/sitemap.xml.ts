import type { APIRoute } from 'astro';
import { pages } from '../content/site';

export const GET: APIRoute = ({ site }) => {
  const urls = Object.values(pages).map(({ href }) => `  <url><loc>${new URL(href, site).href}</loc></url>`);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

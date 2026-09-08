import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { render, pages } from '../.ssr/entry-server.js';

const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const origin = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : null;
for (const page of pages) {
  const output = page.path === '/' ? 'dist/index.html' : `dist${page.path}.html`;
  let html = template.replace('<!--app-html-->', render(page.path));
  html = html.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*/, `$1${escape(page.description)}`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(page.title)}`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(page.description)}`);
  html = html.replace('<!--page-meta-->', page.path === '/404' ? '<meta name="robots" content="noindex" />' : origin ? `<link rel="canonical" href="${escape(origin + page.path)}" />` : '');
  await mkdir(dirname(output), {recursive: true});
  await writeFile(output, html);
}
await copyFile('static.vercel.json', 'dist/vercel.json');
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nDisallow: /404\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`);
if (origin) await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.filter(p=>p.path !== '/404').map(p=>`<url><loc>${escape(origin+p.path)}</loc></url>`).join('')}</urlset>`);
console.log(`Prerendered ${pages.length} pages with working direct project URLs.`);

import { access, readFile } from 'node:fs/promises';
import { extname, resolve } from 'node:path';

const publicPages = [
  'index.html',
  'selectatool.html',
  'selectacrates.html',
  'selectasoundfx.html',
  'privacy.html',
  'terms.html',
  'news-selecta-tool.html',
  'news-serato-5-beta.html',
  'news-kartel-mavado-tour.html',
  'news-selecta-crates.html'
];

const failures = [];

for (const page of publicPages) {
  const html = await readFile(page, 'utf8');
  const titleCount = (html.match(/<title\b/gi) || []).length;
  const mainCount = (html.match(/<main\b/gi) || []).length;
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];

  if (titleCount !== 1) failures.push(`${page}: expected one <title>, found ${titleCount}`);
  if (mainCount !== 1) failures.push(`${page}: expected one <main>, found ${mainCount}`);
  if (!/rel=["']canonical["']/i.test(html)) failures.push(`${page}: missing canonical URL`);
  if (duplicateIds.length) failures.push(`${page}: duplicate IDs: ${duplicateIds.join(', ')}`);

  const references = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:[a-z]+:|#|\/\/|data:)/i.test(reference)) continue;
    const pathname = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
    if (!pathname || !extname(pathname)) continue;
    try {
      await access(resolve(pathname));
    } catch {
      failures.push(`${page}: missing local asset ${pathname}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${publicPages.length} public pages: no structural or local-link errors.`);
}

import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const distIndexPath = path.join(projectRoot, 'dist', 'index.html');
const serverEntryPath = path.join(projectRoot, 'dist', 'server', 'entry-server.js');
const rootMarker = '<div id="root"></div>';

const template = await readFile(distIndexPath, 'utf8');
const { render } = await import(pathToFileURL(serverEntryPath).href);
const appHtml = await render();

if (!template.includes(rootMarker)) {
  throw new Error('Unable to find the root marker in dist/index.html');
}

const html = template.replace(rootMarker, `<div id="root">${appHtml}</div>`);

await writeFile(distIndexPath, html);
await rm(path.dirname(serverEntryPath), { recursive: true, force: true });

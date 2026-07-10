import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('dist/index.html', 'utf8');
html = html.replace(/ crossorigin/g, '').replace(/ type="module"/g, '');
// Add defer so script runs after DOM is parsed
html = html.replace('<script src="/assets/', '<script defer src="/assets/');
writeFileSync('dist/index.html', html);
console.log('✅ Cleaned HTML + added defer');

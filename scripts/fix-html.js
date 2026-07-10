import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('dist/index.html', 'utf8');
html = html.replace(/ crossorigin/g, '').replace(/ type="module"/g, '');
writeFileSync('dist/index.html', html);
console.log('✅ Cleaned HTML');

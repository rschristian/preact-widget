import { readFile, writeFile } from 'fs/promises';

let htmlTemplate = await readFile(new URL('../src/index.html', import.meta.url), 'utf-8');

// Update <script>
htmlTemplate = htmlTemplate.replace(/widget-mount.js/g, 'preact-widget.modern.js');

// Add in stylesheet link
const position = htmlTemplate.indexOf('<style>');
const styleTag = `<link rel="stylesheet" href="/preact-widget.css" />\n`;
htmlTemplate = [htmlTemplate.slice(0, position), styleTag, htmlTemplate.slice(position)].join('');

// Write to dist/
await writeFile(new URL('../dist/index.html', import.meta.url), htmlTemplate);

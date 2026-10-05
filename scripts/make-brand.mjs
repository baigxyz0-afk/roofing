// Renders the Ridgewise logo to public/brand/logo.png and the favicon bundle, then run `npm run icons` for favicon.ico.
import sharp from "sharp";
import fs from "fs";

const MARK = '<rect width="40" height="40" rx="9" fill="#16232e"/><path d="M6 22 20 9l14 13" fill="none" stroke="#f08a4b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.5v-2L20 14l8 6.5v2z" fill="#9fd6db"/><path d="M9 29h22M13 32.5h14" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>';
const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 40 40">${MARK}</svg>`;

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="160" viewBox="0 0 600 160">
<g transform="translate(10 10) scale(3.5)">${MARK}</g>
<text x="170" y="92" font-family="Georgia, serif" font-size="62" font-weight="600" fill="#16232e">Ridgewise</text>
<text x="173" y="130" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="9" fill="#134f56">ROOFING</text></svg>`;

fs.mkdirSync("public/brand", { recursive: true });
await sharp(Buffer.from(logo)).png().toFile("public/brand/logo.png");
for (const [f, s] of [["favicon-16x16.png", 16], ["favicon-32x32.png", 32], ["android-chrome-192x192.png", 192], ["android-chrome-512x512.png", 512], ["apple-touch-icon.png", 180]]) {
  await sharp(Buffer.from(mark(s))).png().toFile(`public/${f}`);
}
fs.rmSync("public/favicon.ico", { force: true });
console.log("brand assets written");

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const projects = [
  { slug: "swag-bank", name: "Swag Bank", type: "Цифровой банкинг", accent: "#9B4DFF", from: "#1a0533", to: "#0d0a2e" },
  { slug: "beauty-studio", name: "glo", type: "Студия красоты", accent: "#00E67A", from: "#05331a", to: "#0a2e1a" },
  { slug: "amber-restaurant", name: "AKARI", type: "Ресторан", accent: "#FF5225", from: "#331005", to: "#2e0a0a" },
  { slug: "iphone-revive", name: "iPhone Revive", type: "Магазин техники", accent: "#00D4E8", from: "#053033", to: "#0a1a2e" },
  { slug: "mc-accounts", name: "MC Accounts", type: "Магазин аккаунтов", accent: "#FFB347", from: "#332505", to: "#2e1a0a" },
  { slug: "beauty-bot", name: "Beauty Bot", type: "Telegram-бот", accent: "#00D4E8", from: "#053033", to: "#0a1a2e" },
  { slug: "language-school", name: "Языковая школа", type: "Онлайн-обучение", accent: "#9B4DFF", from: "#1a0533", to: "#0d0a2e" },
];

async function main() {
  for (const p of projects) {
    const svg = Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${p.from}"/>
            <stop offset="100%" stop-color="${p.to}"/>
          </linearGradient>
          <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="${p.accent}"/>
            <stop offset="100%" stop-color="${p.accent}" stop-opacity="0.6"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#bg)"/>
        <circle cx="1000" cy="100" r="250" fill="${p.accent}" opacity="0.04"/>
        <circle cx="200" cy="500" r="200" fill="${p.accent}" opacity="0.03"/>
        <rect x="60" y="60" width="1080" height="510" rx="20" fill="none" stroke="${p.accent}" stroke-opacity="0.06" stroke-width="1"/>
        <text x="600" y="240" text-anchor="middle" font-family="Inter, sans-serif" font-size="52" font-weight="700" fill="white">${p.name}</text>
        <text x="600" y="290" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" fill="#4D5E88">${p.type}</text>
        <rect x="420" y="320" width="360" height="1" fill="${p.accent}" opacity="0.15"/>
        <text x="600" y="360" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="#2C3558">Демо-проект Rocketly</text>
        <rect x="460" y="460" width="280" height="40" rx="20" fill="${p.accent}" fill-opacity="0.1" stroke="${p.accent}" stroke-opacity="0.2" stroke-width="1"/>
        <text x="600" y="487" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" fill="${p.accent}">Демо-проект</text>
      </svg>
    `);

    const bg = await sharp({
      create: { width: 1200, height: 630, channels: 3, background: { r: 6, g: 10, b: 30 } },
    }).jpeg({ quality: 92 }).toBuffer();

    await sharp(bg)
      .composite([{ input: svg, top: 0, left: 0 }])
      .jpeg({ quality: 92 })
      .toFile(path.resolve(root, `public/projects/${p.slug}.jpg`));

    console.log(`✓ ${p.slug}.jpg`);
  }
}

main().catch(console.error);

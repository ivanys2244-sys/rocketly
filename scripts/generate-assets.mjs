import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

async function main() {
  // Favicon from icon.png
  await sharp(path.resolve(root, "public/icon.png"))
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve(root, "public/favicon.png"));
  console.log("✓ favicon.png");

  // OG image 1200x630 from horizontal-logo.png
  const logoBuf = await sharp(path.resolve(root, "public/horizontal-logo.png"))
    .resize(500, 143, { fit: "inside" })
    .png()
    .toBuffer();
  const logMeta = await sharp(logoBuf).metadata();
  const logoX = Math.floor((1200 - logMeta.width) / 2);
  const logoY = 140;

  const textSvg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#00D4E8"/>
          <stop offset="100%" stop-color="#9B4DFF"/>
        </linearGradient>
      </defs>
      <text x="600" y="370" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#4D5E88">Сайты · Telegram-боты · Автоматизация</text>
      <text x="600" y="410" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="#2C3558">Современные цифровые решения для бизнеса</text>
    </svg>
  `);

  const bg = await sharp({
    create: {
      width: 1200, height: 630, channels: 3,
      background: { r: 6, g: 10, b: 30 },
    },
  })
    .jpeg({ quality: 95 })
    .toBuffer();

  await sharp(bg)
    .composite([
      { input: logoBuf, top: logoY, left: logoX },
      { input: textSvg, top: 0, left: 0 },
    ])
    .jpeg({ quality: 95 })
    .toFile(path.resolve(root, "public/og-image.jpg"));
  console.log("✓ og-image.jpg");
}

main().catch(console.error);

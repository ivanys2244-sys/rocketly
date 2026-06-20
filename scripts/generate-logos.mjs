import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

async function main() {
  // --- icon.png (rocket emoji as SVG) ---
  const iconSvg = Buffer.from(`
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#00D4E8"/>
          <stop offset="100%" stop-color="#9B4DFF"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="40" fill="#0C1230"/>
      <g transform="translate(100,100)">
        <path d="M-8,-50 L8,-50 L12,-30 L-12,-30 Z" fill="url(#g)"/>
        <path d="M0,-50 L-6,-35 L0,40 L6,-35 Z" fill="url(#g)" fill-opacity="0.6"/>
        <rect x="-3" y="-10" width="6" height="50" rx="2" fill="url(#g)"/>
        <path d="M-20,30 Q0,45 20,30" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="0" cy="-18" r="4" fill="white" opacity="0.3"/>
      </g>
    </svg>
  `);

  const iconPng = await sharp(iconSvg).resize(193, 193).png().toBuffer();
  await sharp(iconPng).toFile(path.resolve(root, "public/icon.png"));
  console.log("✓ icon.png");

  // --- horizontal-logo.png ---
  const logoSvg = Buffer.from(`
    <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#00D4E8"/>
          <stop offset="100%" stop-color="#9B4DFF"/>
        </linearGradient>
      </defs>
      <g transform="translate(20,20)">
        <polygon points="0,40 12,10 24,40" fill="url(#g)"/>
        <polygon points="12,10 6,25 18,25 12,10" fill="url(#g)" fill-opacity="0.5"/>
        <rect x="6" y="24" width="12" height="36" rx="3" fill="url(#g)"/>
      </g>
      <text x="60" y="76" font-family="Inter, sans-serif" font-size="52" font-weight="700" fill="white">Rocketly</text>
    </svg>
  `);

  await sharp(logoSvg)
    .resize(400, 120, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve(root, "public/horizontal-logo.png"));
  console.log("✓ horizontal-logo.png");
}

main().catch(console.error);

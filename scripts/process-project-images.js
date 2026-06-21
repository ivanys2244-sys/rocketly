const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const sourceDir = path.resolve(
  "C:/Users/fvckxd/PycharmProjects/work_site/image_demosite"
);
const targetDir = path.resolve(
  "C:/Users/fvckxd/PycharmProjects/work_site/buildflow/public/projects"
);

const mapping = [
  { from: "glo-beauty-studio.png", to: "beauty-studio.jpg" },
  { from: "iphone-revive.png", to: "iphone-revive.jpg" },
  { from: "mc-accounts.png", to: "mc-accounts.jpg" },
  { from: "swag_bank.png", to: "swag-bank.jpg" },
  { from: "tg-bot.png", to: "beauty-bot.jpg" },
];

async function process() {
  for (const { from, to } of mapping) {
    const src = path.join(sourceDir, from);
    const dst = path.join(targetDir, to);

    const srcStat = fs.statSync(src);
    const srcSize = srcStat.size;

    await sharp(src)
      .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(dst);

    const dstSize = fs.statSync(dst).size;
    const ratio = ((1 - dstSize / srcSize) * 100).toFixed(1);
    console.log(
      `${from} -> ${to}  (${(srcSize / 1024).toFixed(0)}KB -> ${(dstSize / 1024).toFixed(0)}KB, -${ratio}%)`
    );
  }
}

process().catch((err) => {
  console.error(err);
  process.exit(1);
});

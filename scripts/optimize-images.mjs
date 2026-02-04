import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/optimized');

const tasks = [
  {
    input: 'public/images/La Scompagnia collage sito.png',
    base: 'la-scompagnia-collage-sito',
    widths: [480, 960, 1440, 1600],
  },
  {
    input: 'public/images/La Scompagnia - Locandina coppia aperta quasi spalancata.jpeg',
    base: 'locandina-coppia-aperta',
    widths: [480, 960, 1440, 1600],
  },
  {
    input: 'public/images/Il Dio del Massacro - La Scompagnia Bruxelles - locandina semplificata.jpg',
    base: 'locandina-dio-massacro',
    widths: [480, 960, 1440],
  },
  {
    input: 'public/images/La-Tesi-di-Ernesto-2019-La-Scompagnia-Locandina-completa.jpg',
    base: 'locandina-tesi-ernesto',
    widths: [480, 960, 1440],
  },
  {
    input: 'public/images/cast/antonella.jpg',
    base: 'cast-antonella',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/cast/antonio.jpg',
    base: 'cast-antonio',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/cast/chiara.jpg',
    base: 'cast-chiara',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/cast/daniele.jpg',
    base: 'cast-daniele',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/cast/giulio.jpg',
    base: 'cast-giulio',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/cast/marco.jpg',
    base: 'cast-marco',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/cast/valeria.jpg',
    base: 'cast-valeria',
    widths: [320, 640, 960],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_7187.jpg',
    base: 'gallery-dio-7187',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_7174.jpg',
    base: 'gallery-dio-7174',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_7107.jpg',
    base: 'gallery-dio-7107',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_7101.jpg',
    base: 'gallery-dio-7101',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_7077.jpg',
    base: 'gallery-dio-7077',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_6954.jpg',
    base: 'gallery-dio-6954',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/il-dio-del-massacro/IMG_6982.jpg',
    base: 'gallery-dio-6982',
    widths: [320, 640, 960, 1440, 2000],
  },
  {
    input: 'public/images/gallery/La Tesi di Ernesto collage La Scompagnia.jpg',
    base: 'gallery-tesi-collage',
    widths: [320, 640, 960, 1440],
  },
  {
    input: 'public/images/gallery/77328431_134499161301190_8024187601256710144_n.jpg',
    base: 'gallery-77328431',
    widths: [320, 640, 960, 1440],
  },
  {
    input: 'public/images/gallery/79003044_134499571301149_8659359551474106368_n.jpg',
    base: 'gallery-79003044',
    widths: [320, 640, 960, 1440],
  },
  {
    input: 'public/images/gallery/79449961_135515351199571_3332786667693015040_n.jpg',
    base: 'gallery-79449961',
    widths: [320, 640, 960, 1440],
  },
  {
    input: 'public/images/gallery/79692414_137400397677733_902456492421021696_n (1).jpg',
    base: 'gallery-79692414',
    widths: [320, 640, 960, 1440],
  },
  {
    input: 'public/images/gallery/80002972_137699140981192_1167939755405475840_n.jpg',
    base: 'gallery-80002972',
    widths: [320, 640, 960, 1440],
  },
];

const ensureOutputDir = async () => {
  await fs.mkdir(outputDir, { recursive: true });
};

const renderVariants = async ({ input, base, widths }) => {
  const image = sharp(input).rotate();
  const metadata = await image.metadata();
  if (!metadata.width) {
    throw new Error(`Unable to read width for ${input}`);
  }
  const allowedWidths = widths.filter((width) => width <= metadata.width);
  if (allowedWidths.length === 0) {
    allowedWidths.push(metadata.width);
  }

  for (const width of allowedWidths) {
    const resized = sharp(input).rotate().resize({ width });
    const outBase = path.join(outputDir, `${base}-${width}`);
    await Promise.all([
      resized.clone().webp({ quality: 72 }).toFile(`${outBase}.webp`),
      resized.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(`${outBase}.jpg`),
    ]);
  }
};

const run = async () => {
  await ensureOutputDir();
  for (const task of tasks) {
    await renderVariants(task);
  }
  console.log(`Optimized images written to ${outputDir}`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

/**
 * Tối ưu ảnh cho website: resize + chuyển sang WebP (nhẹ hơn 80–95% so với JPG/PNG gốc).
 *
 * Cách dùng:
 *   node scripts/optimize-images.mjs <thư-mục-ảnh-gốc>
 *
 * Thư mục ảnh gốc cần có cấu trúc giống `JOBS` bên dưới (đường dẫn tương đối).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SRC = process.argv[2];
const OUT = path.resolve('public/images');

if (!SRC) {
  console.error('Thiếu tham số: node scripts/optimize-images.mjs <thư-mục-ảnh-gốc>');
  process.exit(1);
}

/** [input tương đối, output tương đối, width, height?] */
const JOBS = [
  ['profile-photo.jpg', 'profile-photo.webp', 520, 520],
  ['profile-photo.jpg', 'og-cover.jpg', 600, 600],
  ['techstore_hero.png', 'projects/techstore.webp', 960, 540],
  ['firefly_clean_lofi_1776563244287.png', 'lofi-bg.webp', 1600],
  ['thumbs/hyperglot.jpg', 'projects/hyperglot.webp', 960, 540],
  ['thumbs/pomi.jpg', 'projects/pomi.webp', 960, 540],
  ['thumbs/kb-harvest.jpg', 'projects/kb-harvest.webp', 960, 540],
  ['thumbs/svm-credit.jpg', 'projects/svm-credit.webp', 960, 540],
  ['thumbs/charity.jpg', 'projects/charity.webp', 960, 540],
  ['thumbs/anime-social.jpg', 'projects/anime-social.webp', 960, 540],
  ['thumbs/ai-exam.jpg', 'projects/ai-exam.webp', 960, 540],
  ['certificates/degree/the-degree-of-engineering.jpg', 'certificates/degree.webp', 900],
  ['certificates/degree/university-transcript.jpg', 'certificates/transcript.webp', 900],
  ['certificates/english/CEFR-b1.jpg', 'certificates/cefr-b1.webp', 900],
  ['certificates/web_developer/the-complete-full-stack-web-development-bootcamp.jpg', 'certificates/fullstack-bootcamp.webp', 900],
  ['certificates/web_developer/the-complete-flutter-development-bootcamp-with-dart.jpg', 'certificates/flutter-bootcamp.webp', 900],
  ['certificates/web_developer/100-days-of-code-python-pro-bootcamp.jpg', 'certificates/python-bootcamp.webp', 900],
  ['certificates/web_developer/succeed-in-the-age-of-ai.jpg', 'certificates/age-of-ai.webp', 900],
  ['certificates/skills/communication-and-teamwork-skills.jpg', 'certificates/teamwork.webp', 900],
];

for (const [input, output, width, height] of JOBS) {
  const src = path.join(SRC, input);
  if (!existsSync(src)) {
    console.warn(`⚠️  Bỏ qua (không tìm thấy): ${input}`);
    continue;
  }
  const dest = path.join(OUT, output);
  await mkdir(path.dirname(dest), { recursive: true });
  const pipeline = sharp(src).resize({ width, height, fit: 'cover', position: 'attention', withoutEnlargement: true });
  const info = output.endsWith('.jpg')
    ? await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(dest)
    : await pipeline.webp({ quality: 74, effort: 6 }).toFile(dest);
  console.log(`✅ ${output.padEnd(36)} ${(info.size / 1024).toFixed(1)} KB`);
}

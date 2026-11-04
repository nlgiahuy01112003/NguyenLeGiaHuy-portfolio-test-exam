import sharp from 'sharp';
import path from 'node:path';

const photoPath = path.resolve('public/images/profile-photo.webp');
const publicDir = path.resolve('public');

async function makeFavicons() {
  const size = 180;
  // Tạo mask hình tròn
  const circleSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#fff"/></svg>`
  );

  const circularBuffer = await sharp(photoPath)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: circleSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 1. apple-touch-icon.png (180x180)
  await sharp(circularBuffer)
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 2. favicon-32x32.png
  await sharp(circularBuffer)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // 3. favicon.png (64x64)
  await sharp(circularBuffer)
    .resize(64, 64)
    .toFile(path.join(publicDir, 'favicon.png'));

  // 4. SVG favicon chứa ảnh profile dạng data URI
  const base64Png = circularBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <defs>
    <clipPath id="circleView">
      <circle cx="90" cy="90" r="90"/>
    </clipPath>
  </defs>
  <image width="180" height="180" clip-path="url(#circleView)" href="data:image/png;base64,${base64Png}"/>
</svg>`;

  const fs = await import('node:fs/promises');
  await fs.writeFile(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');

  console.log('✅ Generated real profile-photo favicons: favicon.svg, favicon-32x32.png, apple-touch-icon.png');
}

makeFavicons().catch(console.error);


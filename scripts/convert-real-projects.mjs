import sharp from 'sharp';
import path from 'node:path';
import { existsSync } from 'node:fs';

const REAL_PROJECT_IMAGES = [
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/real_ai_exam.png',
    dest: 'public/images/projects/ai-exam.webp',
    name: 'ai-exam (Chụp từ mã nguồn Next.js đang chạy)',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/real_pomi.png',
    dest: 'public/images/projects/pomi.webp',
    name: 'pomi (Chụp từ mã nguồn Next.js client đang chạy)',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/real_anime_social.png',
    dest: 'public/images/projects/anime-social.webp',
    name: 'anime-social (Chụp từ mã nguồn React Vite đang chạy)',
  },
  {
    src: 'E:/Project/projects/HyperGlot/apps/web/tests/screenshots/homepage-initial.png',
    dest: 'public/images/projects/hyperglot.webp',
    name: 'hyperglot (Ảnh chụp màn hình thực tế từ bộ test E2E Playwright của dự án)',
  },
  {
    src: 'E:/Project/projects/kb-harvest/screenshots/youtube-answer.png',
    dest: 'public/images/projects/kb-harvest.webp',
    name: 'kb-harvest (Ảnh chụp màn hình thực tế truy vấn CLI Gemini RAG)',
  },
  {
    src: 'E:/Project/projects/animated-portfolio/public/techstore_hero.png',
    dest: 'public/images/projects/techstore.webp',
    name: 'techstore (Ảnh chụp màn hình thực tế storefront TMĐT)',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/charity_slider.png',
    dest: 'public/images/projects/charity.webp',
    name: 'charity (Ảnh slider giao diện thực tế từ repository)',
  },
  {
    src: 'E:/Project/education/ai-coursework/svm-project-temp/chart/train_data_chart.png',
    dest: 'public/images/projects/svm-credit.webp',
    name: 'svm-credit (Biểu đồ huấn luyện SVM thực tế từ Matplotlib)',
  },
];

async function convertRealImages() {
  for (const item of REAL_PROJECT_IMAGES) {
    if (!existsSync(item.src)) {
      console.warn(`⚠️  Không tìm thấy: ${item.src}`);
      continue;
    }
    const info = await sharp(item.src)
      .resize(960, 540, { fit: 'cover', position: 'attention' })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.resolve(item.dest));

    console.log(`✅ ${item.name} -> ${item.dest} (${(info.size / 1024).toFixed(1)} KB)`);
  }
}

convertRealImages().catch(console.error);


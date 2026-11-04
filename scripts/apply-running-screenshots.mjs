import sharp from 'sharp';
import path from 'node:path';
import { existsSync } from 'node:fs';

const JOBS = [
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/running_techstore.png',
    dest: 'public/images/projects/techstore.webp',
    name: 'TechStore (Vanfio) — Đang chạy trên Next.js 16 localhost:3006',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/running_aiexam.png',
    dest: 'public/images/projects/ai-exam.webp',
    name: 'AI Mock Exam Platform — Đang chạy trên Next.js 14 localhost:3001',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/running_pomi.png',
    dest: 'public/images/projects/pomi.webp',
    name: 'POMI Milk Tea — Đang chạy trên Next.js 16 localhost:3003',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/running_hyperglot.png',
    dest: 'public/images/projects/hyperglot.webp',
    name: 'HyperGlot — Đang chạy trên Next.js 15 localhost:3008',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/running_portfolio.png',
    dest: 'public/images/lofi-bg.webp',
    name: 'Animated Portfolio Lofi — Đang chạy trên Vite localhost:3007',
  },
  {
    src: 'E:/Project/projects/kb-harvest/screenshots/youtube-answer.png',
    dest: 'public/images/projects/kb-harvest.webp',
    name: 'KB-Harvest OptiBot — Ảnh chụp thực tế kết quả truy vấn CLI Gemini RAG',
  },
  {
    src: 'E:/Project/education/ai-coursework/svm-project-temp/chart/train_data_chart.png',
    dest: 'public/images/projects/svm-credit.webp',
    name: 'SVM Credit — Biểu đồ huấn luyện Matplotlib thực tế',
  },
  {
    src: 'C:/Users/GIGABYTE/.gemini/antigravity/brain/1ec482b0-edfe-475c-a245-f28057e4af1f/scratch/charity_slider.png',
    dest: 'public/images/projects/charity.webp',
    name: 'Charity Management — Slider giao diện thực tế từ repository',
  },
];

async function run() {
  for (const job of JOBS) {
    if (!existsSync(job.src)) {
      console.warn('⚠️  Bỏ qua không tìm thấy:', job.src);
      continue;
    }
    const destPath = path.resolve(job.dest);
    const info = await sharp(job.src)
      .resize(960, 540, { fit: 'cover', position: 'attention' })
      .webp({ quality: 82, effort: 6 })
      .toFile(destPath);

    console.log(`✅ ${job.name} -> ${job.dest} (${(info.size / 1024).toFixed(1)} KB)`);
  }
}

run().catch(console.error);

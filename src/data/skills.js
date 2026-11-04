/** Mức thành thạo: 1–5 (hiển thị dạng progress bar + rating dots) */
export const LEVEL_LABELS = {
  5: 'Thành thạo',
  4: 'Vững',
  3: 'Khá',
  2: 'Cơ bản',
  1: 'Đang học',
};

export const SKILL_GROUPS = [
  {
    id: 'languages',
    title: 'Ngôn ngữ lập trình',
    icon: 'code',
    skills: [
      { name: 'HTML5 / CSS3', level: 5, percent: 92 },
      { name: 'JavaScript (ES2023+)', level: 4, percent: 85 },
      { name: 'TypeScript', level: 4, percent: 78 },
      { name: 'Dart', level: 3, percent: 65 },
      { name: 'Python', level: 3, percent: 62 },
      { name: 'SQL', level: 3, percent: 60 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Framework / Library',
    icon: 'layers',
    skills: [
      { name: 'React 19', level: 4, percent: 85 },
      { name: 'Next.js 15/16 (App Router)', level: 4, percent: 78 },
      { name: 'React Router v6+', level: 4, percent: 80 },
      { name: 'Zustand / TanStack Query', level: 4, percent: 75 },
      { name: 'Flutter + Riverpod', level: 3, percent: 65 },
      { name: 'Node.js / Express', level: 3, percent: 62 },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & Animation',
    icon: 'sparkles',
    skills: [
      { name: 'Responsive / Flexbox / Grid', level: 5, percent: 90 },
      { name: 'Tailwind CSS', level: 4, percent: 82 },
      { name: 'SCSS / CSS Modules', level: 4, percent: 80 },
      { name: 'Framer Motion', level: 4, percent: 78 },
      { name: 'CSS Animation / View Transitions', level: 4, percent: 76 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Testing',
    icon: 'tools',
    skills: [
      { name: 'Git / GitHub', level: 4, percent: 82 },
      { name: 'Vite / ESLint', level: 4, percent: 78 },
      { name: 'Chrome DevTools / Lighthouse', level: 4, percent: 78 },
      { name: 'Figma', level: 3, percent: 65 },
      { name: 'Playwright E2E / Jest', level: 3, percent: 62 },
      { name: 'Vercel / Firebase Hosting', level: 4, percent: 75 },
    ],
  },
];

export const SOFT_SKILLS = [
  {
    name: 'Giao tiếp & làm việc nhóm',
    icon: 'team',
    detail: 'Có chứng chỉ HUTECH; trưởng nhóm nhiều đồ án, phối hợp tốt với Dev/QA khi lập ticket lỗi.',
  },
  {
    name: 'Giải quyết vấn đề',
    icon: 'bulb',
    detail: 'Truy vết nguyên nhân gốc (VD: ghost orders do reconnect WebSocket) và đưa ra giải pháp bền vững.',
  },
  {
    name: 'Tự học & thích nghi',
    icon: 'book',
    detail: 'Hoàn thành 3 bootcamp Udemy (148+ giờ), liên tục cập nhật React 19, Next.js 16, Edge AI.',
  },
  {
    name: 'Tư duy hướng người dùng',
    icon: 'heart',
    detail: 'Kinh nghiệm IT Helpdesk giúp hiểu rõ nỗi đau thực tế của người dùng cuối khi thiết kế UI.',
  },
  {
    name: 'Quản lý thời gian',
    icon: 'clock',
    detail: 'Cân bằng giữa học tập, công việc và hoạt động Đoàn; áp dụng Pomodoro & chia nhỏ task.',
  },
];

export const LANGUAGES = [
  { name: 'Tiếng Việt', level: 'Bản ngữ', percent: 100 },
  { name: 'Tiếng Anh', level: 'CEFR B1 — Đọc hiểu tài liệu kỹ thuật tốt', percent: 65 },
];

/** Dải công nghệ chạy ngang (marquee) ở trang chủ */
export const TECH_MARQUEE = [
  'React 19',
  'Next.js 16',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Framer Motion',
  'Tailwind CSS',
  'SCSS',
  'Zustand',
  'TanStack Query',
  'React Router',
  'Vite',
  'Flutter',
  'Playwright',
  'Figma',
  'Git',
  'Vercel',
];


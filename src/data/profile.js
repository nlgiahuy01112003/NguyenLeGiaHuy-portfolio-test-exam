/**
 * Thông tin cá nhân — nguồn duy nhất (single source of truth) cho toàn site.
 * Nội dung tổng hợp từ portfolio gốc: github.com/nlgiahuy01112003/portfolio
 */
export const PROFILE = {
  fullName: 'Nguyễn Lê Gia Huy',
  shortName: 'Gia Huy',
  initials: 'GH',
  role: 'Frontend Developer Intern',
  roles: ['Frontend Developer Intern', 'React & UI Animation Lover', 'Software Engineer (HUTECH)'],
  intro:
    'Kỹ sư Công nghệ phần mềm mới tốt nghiệp HUTECH, đam mê xây dựng giao diện web mượt mà, dễ tiếp cận và hiệu năng cao với React, Next.js & TypeScript.',
  availability: 'Sẵn sàng thực tập / làm việc toàn thời gian',
  avatar: '/images/profile-photo.webp',
  avatarFallback: '/images/og-cover.jpg',
  birthDate: '01/11/2003',
  gender: 'Nam',
  location: 'TP. Hồ Chí Minh',
  email: 'Job.nlgiahuy@gmail.com',
  phone: '0934 893 967',
  phoneHref: 'tel:+84934893967',
  website: 'https://nguyenlegiahuy-portfolio.vercel.app',
};

export const CV_FILES = [
  { label: 'Tải CV (Tiếng Việt)', href: '/cv/Nguyen-Le-Gia-Huy-CV-Frontend-Intern-VI.pdf', lang: 'VI' },
  { label: 'Download CV (English)', href: '/cv/Nguyen-Le-Gia-Huy-CV-Frontend-Intern-EN.pdf', lang: 'EN' },
];

export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', handle: 'nlgiahuy01112003', href: 'https://github.com/nlgiahuy01112003' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/nlgiahuy', href: 'https://linkedin.com/in/nlgiahuy' },
  { id: 'facebook', label: 'Facebook', handle: 'CIRTDARK', href: 'https://facebook.com/CIRTDARK' },
];

export const HOME_STATS = [
  { value: 9, suffix: '+', label: 'Dự án đã xây dựng' },
  { value: 2, suffix: '', label: 'Kinh nghiệm thực tế' },
  { value: 95, suffix: '+', label: 'Điểm Lighthouse (TechStore)' },
  { value: 8, suffix: '', label: 'Chứng chỉ & bằng cấp' },
];

export const HOME_HIGHLIGHTS = [
  {
    to: '/resume',
    icon: 'resume',
    title: 'Hồ sơ chi tiết',
    text: 'Học vấn HUTECH, kinh nghiệm tại EMPOWER SC & DXCENTER, hoạt động ngoại khóa.',
  },
  {
    to: '/skills',
    icon: 'skills',
    title: 'Kỹ năng',
    text: 'React 19, Next.js, TypeScript, Framer Motion, Tailwind/SCSS, kiểm thử Playwright.',
  },
  {
    to: '/projects',
    icon: 'projects',
    title: 'Dự án',
    text: 'HyperGlot, TechStore (Vanfio), POMI Milk Tea, AI Mock Exam… có filter & search.',
  },
];


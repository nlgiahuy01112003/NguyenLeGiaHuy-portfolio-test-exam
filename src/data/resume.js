export const CAREER_OBJECTIVE = [
  'Trở thành Frontend Developer có nền tảng vững chắc, tạo ra những giao diện web nhanh, đẹp, dễ tiếp cận (WCAG 2.1 AA) và mang lại trải nghiệm thật sự hữu ích cho người dùng.',
  'Trong 6–12 tháng tới: hòa nhập quy trình làm việc chuyên nghiệp (Git flow, code review, Agile/Scrum), làm chủ React/Next.js, TypeScript và các kỹ thuật tối ưu Core Web Vitals.',
  'Đóng góp vào sản phẩm thực tế của công ty bằng code sạch, component tái sử dụng tốt và animation tinh tế, đồng thời chủ động học hỏi từ các anh chị đi trước.',
  'Định hướng dài hạn: phát triển thành Frontend Engineer có thể đảm nhận kiến trúc UI, design system và kiểm thử E2E cho các dự án quy mô lớn.',
];

export const EDUCATION = [
  {
    id: 'hutech',
    school: 'Đại học Công nghệ TP.HCM (HUTECH)',
    degree: 'Kỹ sư Công nghệ Thông tin',
    major: 'Chuyên ngành Công nghệ Phần mềm',
    gpa: '2.86 / 4.0',
    start: '09/2021',
    end: '03/2026',
    bullets: [
      'Nền tảng: Cấu trúc dữ liệu & giải thuật, OOP, cơ sở dữ liệu, hệ điều hành, mạng máy tính, kiến trúc phần mềm và kiểm thử tự động.',
      'Thực hành Frontend theo nhóm: nhiều giao diện web/mobile responsive, tích hợp API, kiểm thử giao diện và quản lý phiên bản bằng Git.',
      'Đã nhận bằng Kỹ sư Công nghệ phần mềm (03/2026).',
    ],
  },
];

export const EXPERIENCE = [
  {
    id: 'empower',
    company: 'EMPOWER SC',
    position: 'IT Helpdesk / Kiểm thử thủ công & Triển khai hệ thống',
    start: '12/2025',
    end: '06/2026',
    bullets: [
      'Vận hành & hỗ trợ hệ sinh thái Dimchan All-in-One cho doanh nghiệp F&B/bán lẻ (POS, in ấn, quản lý vận hành).',
      'Tiếp nhận, phân loại sự cố phần mềm/thiết bị với tỷ lệ giải quyết thành công > 95%.',
      'Kiểm thử thủ công end-to-end trên Web/App; ghi nhận bước tái hiện và lập ticket có cấu trúc cho đội Dev.',
      'Trực tiếp cấu hình thiết bị, cài đặt phần mềm và bàn giao hệ thống tại khách hàng.',
    ],
  },
  {
    id: 'dxcenter',
    company: 'Trung tâm Chuyển đổi số TP.HCM (DXCENTER)',
    position: 'Thực tập sinh IT Support / IT Helpdesk & Tester',
    start: '08/2025',
    end: '10/2025',
    bullets: [
      'Xử lý 50+ ticket/tuần trên Cổng Dịch vụ công & Cổng Quản lý văn bản (motcua.tphcm.gov.vn, qlvb.tphcm.gov.vn).',
      'Tỷ lệ giải quyết ngay lần đầu (FCR) đạt trên 92%.',
      'Kiểm thử luồng chức năng thực tế, phát hiện edge case trên môi trường production phục vụ hàng nghìn cán bộ.',
    ],
  },
];

export const ACTIVITIES = [
  {
    id: 'union',
    organization: 'Đoàn khoa Công nghệ Thông tin — HUTECH',
    role: 'Cán bộ Đoàn khoa',
    start: '09/2021',
    end: '03/2026',
    bullets: [
      'Tham gia tổ chức các hoạt động phong trào và sự kiện dành cho sinh viên khoa.',
      'Rèn luyện kỹ năng giao tiếp, làm việc nhóm và quản lý thời gian song song với việc học.',
    ],
  },
  {
    id: 'volunteer',
    organization: 'Các chương trình tình nguyện phi lợi nhuận (lớp & khoa)',
    role: 'Tổ chức & điều phối',
    start: '09/2021',
    end: '03/2026',
    bullets: [
      'Tổ chức, điều phối nhiều chương trình tình nguyện với sự tham gia của sinh viên lớp và khoa.',
      'Xây dựng website quản lý hoạt động từ thiện (Spring Boot + MySQL) như một dự án học thuật gắn với hoạt động thực tế.',
    ],
  },
  {
    id: 'class',
    organization: 'Lớp chuyên ngành Công nghệ Phần mềm — HUTECH',
    role: 'Cán bộ lớp · Trưởng nhóm dự án môn học',
    start: '09/2021',
    end: '03/2026',
    bullets: [
      'Trưởng nhóm trong nhiều đồ án môn học: phân chia công việc, review code và quản lý tiến độ bằng Git.',
      'Hỗ trợ kết nối thông tin giữa giảng viên và sinh viên trong lớp.',
    ],
  },
];

export const CERTIFICATES = [
  { id: 'degree', title: 'Bằng Kỹ sư Công nghệ phần mềm', issuer: 'HUTECH · 03/2026', image: '/images/certificates/degree.webp' },
  { id: 'cefr', title: 'Tiếng Anh CEFR B1', issuer: 'HUTECH · 12/2025', image: '/images/certificates/cefr-b1.webp' },
  {
    id: 'fullstack',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy · Dr. Angela Yu · 62 giờ',
    image: '/images/certificates/fullstack-bootcamp.webp',
  },
  {
    id: 'flutter',
    title: 'The Complete Flutter Development Bootcamp with Dart',
    issuer: 'Udemy · Dr. Angela Yu · 29 giờ',
    image: '/images/certificates/flutter-bootcamp.webp',
  },
  {
    id: 'python',
    title: '100 Days of Code™: The Complete Python Pro Bootcamp',
    issuer: 'Udemy · Dr. Angela Yu · 57 giờ',
    image: '/images/certificates/python-bootcamp.webp',
  },
  { id: 'ai', title: 'Succeed in the Age of AI', issuer: 'Udemy', image: '/images/certificates/age-of-ai.webp' },
  { id: 'teamwork', title: 'Kỹ năng Giao tiếp & Làm việc nhóm', issuer: 'HUTECH · 04/2025', image: '/images/certificates/teamwork.webp' },
  { id: 'transcript', title: 'Bảng điểm đại học', issuer: 'HUTECH', image: '/images/certificates/transcript.webp' },
];

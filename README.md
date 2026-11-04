# Website CV Cá Nhân (Personal Portfolio) — Nguyễn Lê Gia Huy

> **Bài Test Kỹ Năng Vòng 2 — Thực Tập Sinh Frontend**  
> **Ứng viên:** Nguyễn Lê Gia Huy  
> **Vị trí ứng tuyển:** Frontend Developer Intern  
> **Đơn vị tuyển dụng:** CÔNG TY TNHH CÔNG NGHỆ & GIÁO DỤC PKS  
> **Live Demo (Vercel):** [https://nguyenlegiahuy-portfolio-test-exam.vercel.app](https://nguyenlegiahuy-portfolio-test-exam.vercel.app)  
> **Portfolio Lofi cá nhân:** [https://nguyenlegiahuy-portfolio.vercel.app](https://nguyenlegiahuy-portfolio.vercel.app)  
> **Source Code:** [https://github.com/nlgiahuy01112003/portfolio](https://github.com/nlgiahuy01112003/portfolio)

---

## 1. Tech Stack

- **Core & Framework:** React 19, Vite 8, React Router v7 (`react-router-dom`)
- **Animation Engine:** Framer Motion 14 (Route transitions đa dạng, Layout animations, Hover micro-interactions, Stagger)
- **Styling & Design System:** Pure CSS Modules + Custom Design Tokens (CSS Variables), không dùng framework UI cồng kềnh, tối ưu 100% Core Web Vitals
- **Code Quality & Tooling:** ESLint 10 (Strict React Hooks rules), Sharp (nén WebP tự động)
- **Kiểm thử E2E & Automation:** Playwright Chromium (tự động kiểm thử chuyển trang, responsive 375px/1280px, validate form)

---

## 2. Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu cầu môi trường
- Node.js >= 18.x (khuyến nghị Node 20+)
- Trình quản lý gói `npm` (hoặc `pnpm` / `yarn`)

### Các bước chạy
```bash
# 1. Cài đặt toàn bộ dependencies
npm install

# 2. Khởi chạy môi trường phát triển (Development Server)
npm run dev

# 3. Kiểm tra chất lượng code với ESLint
npm run lint

# 4. Đóng gói production
npm run build

# 5. Xem trước bản build production (Preview)
npm run preview
```

---

## 3. Danh Sách Tính Năng & Tiêu Chí Đạt Được

### A. Nội Dung Các Trang
- **Trang Chủ (Homepage):**
  - Hero section với ảnh đại diện cá nhân thật (`profile-photo.webp`).
  - Tên đầy đủ: **Nguyễn Lê Gia Huy**, chức danh ứng tuyển: **Frontend Developer Intern**.
  - Hiệu ứng gõ chữ (Typewriter) mượt mà lặp qua các định hướng kỹ thuật.
  - Các nút Call-to-Action rõ ràng: *Xem Hồ Sơ Chi Tiết*, *Tải CV (PDF Tiếng Việt & Tiếng Anh)*, *Xem Dự Án*.
  - Thẻ 3D Avatar Tilt tương tác theo con trỏ chuột.
  - Dải băng công nghệ chạy vô tận (Endless Tech Marquee) và bộ đếm thống kê.
- **Trang Hồ Sơ Chi Tiết / CV (Resume):**
  - Đầy đủ thông tin cá nhân: Ngày sinh (01/11/2003), Giới tính (Nam), Địa chỉ (TP. Hồ Chí Minh), Email, SĐT.
  - Mục tiêu nghề nghiệp (Career Objective) 4 đoạn rõ ràng theo lộ trình ngắn & dài hạn.
  - Học vấn: Bằng Kỹ sư Công nghệ thông tin (Chuyên ngành Công nghệ phần mềm), Đại học HUTECH (GPA: 2.86/4.0, 09/2021 – 03/2026).
  - Kinh nghiệm làm việc: EMPOWER SC (12/2025 – 06/2026) & DXCENTER (08/2025 – 10/2025) dạng bullet points có cấu trúc.
  - Hoạt động ngoại khóa & Tình nguyện: Cán bộ Đoàn khoa CNTT HUTECH, cán bộ lớp, điều phối viên tình nguyện.
  - **Tabs chuyển đổi nội dung mượt mà:** Chuyển nhanh giữa *Tất cả*, *Kinh nghiệm*, *Học vấn*, *Hoạt động*, *Chứng chỉ*.
  - Thư viện 8 chứng chỉ đại học & bootcamp có modal xem phóng to.
- **Trang Kỹ Năng & Năng Lực (Skills):**
  - Technical Skills phân nhóm rõ ràng: Ngôn ngữ, Framework/Library, Styling & Animation, Tools & Testing.
  - Thể hiện mức độ thành thạo đa dạng: Progress bar animation cuộn tới đâu lấp đầy tới đó, điểm rating 5 sao, phần trăm (%) và nhãn phân cấp (*Thành thạo*, *Vững*, *Khá*).
  - 5 kỹ năng mềm (Soft skills) cốt lõi kèm icon và minh chứng thực tế.
  - Trình độ ngoại ngữ: Tiếng Việt (Bản ngữ), Tiếng Anh (CEFR B1 — đọc hiểu tài liệu kỹ thuật tốt).
- **Trang Dự Án (Projects):**
  - **Data-driven:** Dữ liệu chuẩn hóa trong `src/data/projects.js`, render bằng `.map()`.
  - Toàn bộ ảnh dự án là **ảnh chụp màn hình thực tế** lấy từ mã nguồn các dự án đã chạy (TechStore, HyperGlot, AI Exam, POMI Milk Tea, Lofi Portfolio, KB-Harvest, SVM Credit).
  - **Filter & Search realtime:** Lọc theo danh mục (Frontend, Full-Stack, Mobile, AI, Học thuật) kết hợp ô tìm kiếm tức thì có kỹ thuật Debounce chống lag giật.
  - **Xử lý thiếu link Demo:** Đối với các dự án chưa deploy web, nút Demo hiển thị trạng thái `disabled` kèm tooltip/ghi chú *“Chưa triển khai”* đúng 100% yêu cầu đề bài.
  - Modal xem chi tiết kiến trúc, khó khăn kỹ thuật đã giải quyết và liên kết GitHub.
- **Trang Liên Hệ (Contact):**
  - Biểu mẫu gồm 4 trường bắt buộc: `name`, `email`, `subject`, `message`.
  - **Validate chuyên nghiệp:** Bắt buộc nhập tất cả field, email chuẩn regex, message tối thiểu 20 ký tự (có bộ đếm ký tự trực tiếp).
  - **UX states hoàn chỉnh:** Hiển thị lỗi đỏ dưới từng field, nút gửi có trạng thái loading xoay tròn và vô hiệu hóa nút submit; hiển thị màn hình chúc mừng (Success state) giả lập độ trễ mạng 1.5s; **tuyệt đối không dùng alert()**.
  - Hiển thị đầy đủ thông tin Email, SĐT, LinkedIn, GitHub kèm nút bấm 1-click sao chép vào bộ nhớ tạm (kèm Toast notification).
- **Trang 404:**
  - Giao diện 404 thân thiện khi người dùng gõ sai đường dẫn, có nút quay về trang chủ.

---

### B. Điểm Nhấn Animation (Vượt Trội So Với Đề Bài Yêu Cầu)

Website đáp ứng yêu cầu bắt buộc và cung cấp **Transition Lab** trực tiếp trên Header cho phép nhà tuyển dụng chuyển đổi 7 chế độ chuyển trang khác nhau:
1. **Auto (Tự động):** Mỗi trang có một hiệu ứng chuyển cảnh riêng biệt (Fade, Slide, Zoom, Circle Reveal, 3D Flip).
2. **Fade + Blur:** Chuyển cảnh mờ dần và làm nét hiện đại.
3. **Slide:** Trượt theo hướng điều hướng (trái sang phải hoặc phải sang trái dựa theo thứ tự trang trên Navbar).
4. **Zoom:** Phóng to / thu nhỏ không gian 3D.
5. **Circle Reveal (Clip-path):** Vòng tròn mở rộng dần từ tâm màn hình.
6. **3D Flip:** Hiệu ứng lật trang 3D với góc nghiêng và phối cảnh `transformPerspective`.
7. **Accessibility Reduced Motion:** Tự động tắt hoạt ảnh phức tạp nếu người dùng bật chế độ giảm chuyển động trong hệ điều hành.

Ngoài ra còn có:
- **Dark / Light Mode Toggle** với hiệu ứng vòng tròn lan tỏa (*View Transitions API*).
- **Custom Cursor** (vòng tròn theo sau con trỏ mượt mà, tự động hút nam châm vào các nút bấm trên Desktop).
- **Parallax 3D Card Tilt** trên ảnh đại diện Hero.
- **Animated Nav Pill Indicator** chuyển động mềm mại giữa các tab navbar.
- **Back to Top Button** tự động xuất hiện khi cuộn trang > 350px.

---

### C. Khả Năng Tiếp Cận (Accessibility) & Tối Ưu Tải Trang
- Cấu trúc HTML5 ngữ nghĩa chuẩn mực: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Các input form đều có `<label>` gắn đúng thuộc tính `htmlFor` và `id`.
- Thẻ `<img>` đều có `alt`, kích thước `width`/`height` để chống layout shift (CLS = 0).
- Hỗ trợ đầy đủ phím bấm bàn phím (Tab, Enter, Space, Escape để đóng modal).
- Định dạng ảnh hiện đại WebP tối ưu dung lượng (chỉ 10–40 KB / ảnh) giúp trang tải tức thì trên thiết bị di động.

---

## 4. Hình Ảnh Thực Tế (Screenshots)

Dưới đây là một số hình ảnh chụp thực tế từ hệ thống:

1. **Trang Chủ & Hero Section:**  
   `screenshots-demo/1-home.png`
2. **Trang Hồ Sơ Chi Tiết & Tabs:**  
   `screenshots-demo/2-resume.png`
3. **Trang Kỹ Năng & Thước Đo Thành Thạo:**  
   `screenshots-demo/3-skills.png`
4. **Trang Dự Án & Tìm Kiếm Tức Thì:**  
   `screenshots-demo/4-projects-search.png`
5. **Form Liên Hệ — Trạng Thái Lỗi Validation:**  
   `screenshots-demo/5-contact-errors.png`
6. **Form Liên Hệ — Trạng Thái Gửi Thành Công:**  
   `screenshots-demo/6-contact-success.png`
7. **Giao Diện Mobile (375px):**  
   `screenshots-demo/8-mobile-menu.png`

---

## 5. Thông Tin Liên Hệ Ứng Viên

- **Họ và tên:** Nguyễn Lê Gia Huy
- **Vị trí ứng tuyển:** Thực tập sinh Frontend Developer (Frontend Developer Intern)
- **Số điện thoại:** 0934 893 967
- **Email:** Job.nlgiahuy@gmail.com
- **LinkedIn:** [linkedin.com/in/nlgiahuy](https://linkedin.com/in/nlgiahuy)
- **GitHub:** [github.com/nlgiahuy01112003](https://github.com/nlgiahuy01112003)


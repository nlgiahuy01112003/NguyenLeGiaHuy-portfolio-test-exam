# Website CV Cá Nhân (Personal Portfolio) — Nguyễn Lê Gia Huy

> **Bài Test Kỹ Năng Vòng 2 — Thực Tập Sinh Frontend (Frontend Developer Intern)**  
> **Ứng viên:** Nguyễn Lê Gia Huy  
> **Vị trí ứng tuyển:** Frontend Developer Intern  
> **Đơn vị tuyển dụng:** CÔNG TY TNHH CÔNG NGHỆ & GIÁO DỤC PKS  
> **Live Demo (Vercel):** [https://nguyenlegiahuy-portfolio-test-exam.vercel.app](https://nguyenlegiahuy-portfolio-test-exam.vercel.app)  
> **Source Code (GitHub):** [https://github.com/nlgiahuy01112003/NguyenLeGiaHuy-portfolio-test-exam](https://github.com/nlgiahuy01112003/NguyenLeGiaHuy-portfolio-test-exam)  
> **Portfolio Lofi cá nhân:** [https://nguyenlegiahuy-portfolio.vercel.app](https://nguyenlegiahuy-portfolio.vercel.app)  

---

## 📌 BẢNG CHECKLIST ĐỐI SOÁT 100% YÊU CẦU ĐỀ BÀI (PKS TEST)

Dưới đây là bảng đối soát chi tiết giữa **toàn bộ yêu cầu trong tài liệu phỏng vấn** của CÔNG TY TNHH CÔNG NGHỆ & GIÁO DỤC PKS và **kết quả triển khai thực tế**:

| Mục trong đề bài | Tiêu chí yêu cầu | Trạng thái | Chi tiết triển khai trong mã nguồn |
|---|---|:---:|---|
| **Yêu cầu chung** | Website CV cá nhân hoàn chỉnh | ✅ Hoàn thành | Đầy đủ 5 routes chính + trang 404, responsive đa nền tảng |
| **Yêu cầu bắt buộc** | Ít nhất 2 animation chuyển cảnh (Route Transitions) | ⭐ Vượt yêu cầu | Tích hợp **Transition Lab** với **7 chế độ hoạt ảnh**: Auto, Fade+Blur, Slide, Zoom, Circle Reveal (View Transitions API), 3D Flip, Reduced Motion |
| **A.1. Trang Chủ** | Hero section ấn tượng | ✅ Hoàn thành | Gõ chữ Typewriter, thẻ 3D Avatar Tilt tương tác chuột, status availability pill |
| **A.1. Trang Chủ** | Ảnh cá nhân thật (avatar) | ✅ Hoàn thành | Ảnh chân dung thật `profile-photo.webp`, favicon tạo từ ảnh chân dung |
| **A.1. Trang Chủ** | Tên đầy đủ & chức danh ứng tuyển | ✅ Hoàn thành | Tên: **Nguyễn Lê Gia Huy** — Chức danh: **Frontend Developer Intern** |
| **A.1. Trang Chủ** | Đoạn giới thiệu ngắn 1–2 dòng | ✅ Hoàn thành | Trích xuất chuẩn xác từ profile cá nhân, hiển thị rõ ràng trên Hero |
| **A.1. Trang Chủ** | Nút Call-to-Action rõ ràng | ✅ Hoàn thành | *"Xem Hồ Sơ Chi Tiết"* (`/resume`), *"Xem Dự Án"* (`/projects`), *"Tải CV"* (PDF VI & EN) |
| **A.2. Trang CV/Hồ Sơ** | Thông tin cá nhân | ✅ Hoàn thành | Ngày sinh: 01/11/2003, Giới tính: Nam, Địa chỉ: TP. HCM, Email: `Job.nlgiahuy@gmail.com`, SĐT: `0934 893 967` |
| **A.2. Trang CV/Hồ Sơ** | Mục tiêu nghề nghiệp (3–5 dòng) | ✅ Hoàn thành | 4 đoạn lộ trình rõ ràng (mục tiêu ngắn hạn & dài hạn) |
| **A.2. Trang CV/Hồ Sơ** | Học vấn (Trường, ngành, GPA, thời gian) | ✅ Hoàn thành | Đại học HUTECH, Kỹ sư CNTT (Công nghệ phần mềm), GPA 2.86/4.0 (09/2021 – 03/2026) |
| **A.2. Trang CV/Hồ Sơ** | Kinh nghiệm làm việc (bullet points) | ✅ Hoàn thành | EMPOWER SC (12/2025 – 06/2026) & DXCENTER (08/2025 – 10/2025) dạng bullet points chuẩn |
| **A.2. Trang CV/Hồ Sơ** | Hoạt động ngoại khóa / Tình nguyện | ✅ Hoàn thành | Cán bộ Đoàn khoa CNTT HUTECH, Cán bộ lớp, Tình nguyện viên |
| **A.2. Trang CV/Hồ Sơ** | Tabs chuyển đổi nội dung | ✅ Hoàn thành | 5 tabs lọc mượt mà: *Tất cả*, *Kinh nghiệm*, *Học vấn*, *Hoạt động*, *Chứng chỉ* (8 chứng chỉ có modal phóng to) |
| **A.3. Trang Kỹ Năng** | Phân loại Technical Skills | ✅ Hoàn thành | 4 nhóm: Ngôn ngữ, Framework & Thư viện, Styling & Animation, Công cụ & Testing |
| **A.3. Trang Kỹ Năng** | Thể hiện mức độ thành thạo | ✅ Hoàn thành | Animated progress bar cuộn tới đâu chạy tới đó, chấm rating 5 sao, %, nhãn phân cấp |
| **A.3. Trang Kỹ Năng** | Soft Skills (3–5 kỹ năng) | ✅ Hoàn thành | 5 kỹ năng mềm kèm icon và giải thích minh chứng thực tế |
| **A.3. Trang Kỹ Năng** | Ngoại ngữ | ✅ Hoàn thành | Tiếng Việt (Bản ngữ), Tiếng Anh (CEFR B1 — đọc hiểu tài liệu kỹ thuật tốt) |
| **A.4. Trang Dự Án** | Hiển thị ít nhất 2–3 dự án | ⭐ Vượt yêu cầu | **7 dự án thực tế**: TechStore, HyperGlot, AI Exam, POMI, Lofi Portfolio, KB-Harvest, SVM Credit |
| **A.4. Trang Dự Án** | Thông tin từng dự án | ✅ Hoàn thành | Thumbnail chụp thật, tên, mô tả ngắn, tags công nghệ, link GitHub + Demo |
| **A.4. Trang Dự Án** | Xử lý thiếu link Demo | ✅ Hoàn thành | Hiển thị nút `disabled` kèm tooltip *"Chưa triển khai"* đúng 100% đề bài |
| **A.4. Trang Dự Án** | Data-driven & Filter / Search | ✅ Hoàn thành | Render `.map()` từ `src/data/projects.js`, Tabs danh mục + Live Search Debounced 300ms |
| **A.5. Trang Liên Hệ** | Form liên hệ (4 trường) | ✅ Hoàn thành | `name`, `email`, `subject`, `message` |
| **A.5. Trang Liên Hệ** | Validate form chuyên nghiệp | ✅ Hoàn thành | Bắt buộc tất cả field, regex email chuẩn, message $\ge$ 20 ký tự (có đếm ký tự realtime) |
| **A.5. Trang Liên Hệ** | UX states (Lỗi, Loading, Success) | ✅ Hoàn thành | Báo lỗi đỏ từng field, nút gửi loading spinner + disable, success state giả lập 1.5s |
| **A.5. Trang Liên Hệ** | Không dùng alert() | ✅ Hoàn thành | 100% dùng Toast UI và Success Banner mềm mại, tuyệt đối không dùng `alert()` |
| **A.5. Trang Liên Hệ** | Các kênh liên lạc khác | ✅ Hoàn thành | Email, SĐT, LinkedIn, Facebook, GitHub kèm nút 1-click copy vào bộ nhớ tạm |
| **B.1. Công nghệ** | Ưu tiên React.js | ✅ Hoàn thành | React 19 + Vite 8 + React Router v7 |
| **B.2. HTML Semantic** | Cấu trúc ngữ nghĩa chuẩn | ✅ Hoàn thành | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>` |
| **B.3. CSS / UI** | Giao diện nhất quán, sạch sẽ | ✅ Hoàn thành | Pure CSS Tokens, Spacing 4px scale, Typography Modular scale |
| **B.4. Responsive** | Mobile, Tablet, Desktop | ✅ Hoàn thành | Tối ưu hoàn hảo <768px (Mobile 375/390px), 768–1024px (Tablet), >1024px (Desktop) |
| **B.5. Tương tác JS** | Menu mobile, BackToTop, Tabs | ✅ Hoàn thành | Hamburger drawer, nút Back to Top nổi, Custom cursor căn chuẩn tâm |
| **C.1. Cấu trúc code** | Thư mục chuẩn modular | ✅ Hoàn thành | `src/pages`, `src/components`, `src/data`, `src/hooks`, `src/context`, `src/styles` |
| **C.2. Routing** | React Router v6+, 5 routes, 404 | ✅ Hoàn thành | React Router v7, 5 routes + Trang 404, ScrollToTop khi chuyển trang, Animated Pill |
| **C.6. Clean Code** | ESLint & chất lượng code | ✅ Hoàn thành | ESLint 10 thông qua **0 errors, 0 warnings**, không hardcode |
| **C.7. Accessibility** | Chuẩn a11y tối thiểu | ✅ Hoàn thành | Đầy đủ `alt`, `htmlFor`, keyboard navigation (Tab/Enter/Space/Escape), focus ring rõ |
| **D. Điểm cộng** | Dark mode & Tối ưu | ⭐ Vượt yêu cầu | Dark/Light mode View Transitions API, WebP nén siêu nhẹ (10–40KB), an toàn iOS Safari |
| **E. Cách thức nộp** | Link GitHub & Link Demo Vercel | ✅ Hoàn thành | Repo GitHub Public + Live Demo Vercel sẵn sàng |

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

# 3. Kiểm tra chất lượng code với ESLint (0 errors, 0 warnings)
npm run lint

# 4. Đóng gói production
npm run build

# 5. Xem trước bản build production (Preview)
npm run preview
```

---

## 3. Danh Sách Tính Năng & Kiến Trúc Dự Án

### A. Nội Dung Các Trang
- **Trang Chủ (Homepage — `/`):**
  - Hero section với ảnh đại diện cá nhân thật (`profile-photo.webp`).
  - Tên đầy đủ: **Nguyễn Lê Gia Huy**, chức danh ứng tuyển: **Frontend Developer Intern**.
  - Hiệu ứng gõ chữ (Typewriter) mượt mà lặp qua các định hướng kỹ thuật.
  - Các nút Call-to-Action rõ ràng: *Xem Hồ Sơ Chi Tiết*, *Tải CV (PDF Tiếng Việt & Tiếng Anh)*, *Xem Dự Án*.
  - Thẻ 3D Avatar Tilt tương tác theo con trỏ chuột.
  - Dải băng công nghệ chạy vô tận (Endless Tech Marquee) và bộ đếm thống kê.
- **Trang Hồ Sơ Chi Tiết / CV (Resume — `/resume`):**
  - Đầy đủ thông tin cá nhân: Ngày sinh (01/11/2003), Giới tính (Nam), Địa chỉ (TP. Hồ Chí Minh), Email, SĐT.
  - Mục tiêu nghề nghiệp (Career Objective) 4 đoạn rõ ràng theo lộ trình ngắn & dài hạn.
  - Học vấn: Bằng Kỹ sư Công nghệ thông tin (Chuyên ngành Công nghệ phần mềm), Đại học HUTECH (GPA: 2.86/4.0, 09/2021 – 03/2026).
  - Kinh nghiệm làm việc: EMPOWER SC (12/2025 – 06/2026) & DXCENTER (08/2025 – 10/2025) dạng bullet points có cấu trúc.
  - Hoạt động ngoại khóa & Tình nguyện: Cán bộ Đoàn khoa CNTT HUTECH, cán bộ lớp, điều phối viên tình nguyện.
  - **Tabs chuyển đổi nội dung mượt mà:** Chuyển nhanh giữa *Tất cả*, *Kinh nghiệm*, *Học vấn*, *Hoạt động*, *Chứng chỉ*.
  - Thư viện 8 chứng chỉ đại học & bootcamp có modal xem phóng to.
- **Trang Kỹ Năng & Năng Lực (Skills — `/skills`):**
  - Technical Skills phân nhóm rõ ràng: Ngôn ngữ, Framework/Library, Styling & Animation, Tools & Testing.
  - Thể hiện mức độ thành thạo đa dạng: Progress bar animation cuộn tới đâu lấp đầy tới đó, điểm rating 5 sao, phần trăm (%) và nhãn phân cấp (*Thành thạo*, *Vững*, *Khá*).
  - 5 kỹ năng mềm (Soft skills) cốt lõi kèm icon và minh chứng thực tế.
  - Trình độ ngoại ngữ: Tiếng Việt (Bản ngữ), Tiếng Anh (CEFR B1 — đọc hiểu tài liệu kỹ thuật tốt).
- **Trang Dự Án (Projects — `/projects`):**
  - **Data-driven:** Dữ liệu chuẩn hóa trong `src/data/projects.js`, render bằng `.map()`.
  - Toàn bộ ảnh dự án là **ảnh chụp màn hình thực tế** lấy từ mã nguồn các dự án đã chạy (TechStore, HyperGlot, AI Exam, POMI Milk Tea, Lofi Portfolio, KB-Harvest, SVM Credit GUI).
  - **Filter & Search realtime:** Lọc theo danh mục (Frontend, Full-Stack, Mobile, AI, Học thuật) kết hợp ô tìm kiếm tức thì có kỹ thuật Debounce chống lag giật.
  - **Xử lý thiếu link Demo:** Đối với các dự án chưa deploy web, nút Demo hiển thị trạng thái `disabled` kèm tooltip/ghi chú *“Chưa triển khai”* đúng 100% yêu cầu đề bài.
  - Modal xem chi tiết kiến trúc, khó khăn kỹ thuật đã giải quyết và liên kết GitHub.
- **Trang Liên Hệ (Contact — `/contact`):**
  - Biểu mẫu gồm 4 trường bắt buộc: `name`, `email`, `subject`, `message`.
  - **Validate chuyên nghiệp:** Bắt buộc nhập tất cả field, email chuẩn regex, message tối thiểu 20 ký tự (có bộ đếm ký tự trực tiếp).
  - **UX states hoàn chỉnh:** Hiển thị lỗi đỏ dưới từng field, nút gửi có trạng thái loading xoay tròn và vô hiệu hóa nút submit; hiển thị màn hình chúc mừng (Success state) giả lập độ trễ mạng 1.5s; **tuyệt đối không dùng alert()**.
  - Hiển thị đầy đủ thông tin Email, SĐT, LinkedIn, GitHub kèm nút bấm 1-click sao chép vào bộ nhớ tạm (kèm Toast notification).
- **Trang 404 (`*`):**
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

Ngoài ra:
- **Dark / Light Mode Toggle** với hiệu ứng vòng tròn lan tỏa (*View Transitions API*).
- **Custom Cursor căn chuẩn tâm:** Vòng tròn theo sau con trỏ mượt mà, căn đúng tâm mũi nhọn con trỏ chuột, tự động mở rộng khi hover vào các phần tử tương tác.
- **Parallax 3D Card Tilt** trên ảnh đại diện Hero.
- **Animated Nav Pill Indicator** chuyển động mềm mại giữa các tab navbar.
- **Back to Top Button** tự động xuất hiện khi cuộn trang > 350px.

---

### C. Khả Năng Tiếp Cận (Accessibility) & Tối Ưu Mobile / iOS Safari
- Cấu trúc HTML5 ngữ nghĩa chuẩn mực: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Các input form đều có `<label>` gắn đúng thuộc tính `htmlFor` và `id`.
- Thẻ `<img>` đều có `alt`, kích thước `width`/`height` để chống layout shift (CLS = 0).
- Hỗ trợ đầy đủ phím bấm bàn phím (Tab, Enter, Space, Escape để đóng modal).
- Định dạng ảnh hiện đại WebP tối ưu dung lượng (chỉ 10–40 KB / ảnh) giúp trang tải tức thì trên thiết bị di động.
- **Tương thích toàn diện iOS Safari:** Sử dụng `100dvh` chống co giãn thanh URL bar, `font-size: 16px` cho inputs chống auto-zoom màn hình iPhone, `viewport-fit=cover` và safe-area insets cho tai thỏ/dynamic island.

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

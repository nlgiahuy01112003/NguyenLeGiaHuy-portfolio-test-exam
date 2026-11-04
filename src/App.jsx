import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import RouteTransitionLayout from './components/layout/RouteTransitionLayout.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';
import BackToTop from './components/ui/BackToTop.jsx';
import {
  HomePage,
  ResumePage,
  SkillsPage,
  ProjectsPage,
  ContactPage,
  NotFoundPage,
} from './constants/routes.js';

function PageFallback() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '12px',
        color: 'var(--c-accent)',
        fontWeight: 600,
      }}
    >
      <span className="btn__spinner" style={{ width: 24, height: 24 }} />
      <span>Đang tải nội dung...</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      {/* Hỗ trợ accessibility: Nhảy tới nội dung chính khi nhấn Tab */}
      <a href="#main-content" className="skip-link">
        Chuyển đến nội dung chính
      </a>

      {/* Hiệu ứng con trỏ chuột tùy biến (chỉ desktop) */}
      <CustomCursor />

      {/* Tự động cuộn lên đầu khi đổi route */}
      <ScrollToTop />

      {/* Thanh điều hướng chính */}
      <Header />

      {/* Vùng nội dung chuyển trang có hiệu ứng Animation Framer Motion */}
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<RouteTransitionLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>

      {/* Chân trang */}
      <Footer />

      {/* Nút cuộn lên đầu trang */}
      <BackToTop />
    </div>
  );
}

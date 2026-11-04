import { motion } from 'framer-motion';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import Button from '../../components/ui/Button.jsx';
import Icon from '../../components/ui/Icon.jsx';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useDocumentTitle('404 — Không tìm thấy trang');

  return (
    <main className="page not-found-page" id="main-content">
      <div className="container not-found-container">
        <motion.div
          className="not-found-card card"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="not-found-code gradient-text">404</div>

          <h1 className="not-found-title">Trang không tồn tại</h1>

          <p className="not-found-text">
            Đường dẫn bạn truy cập có thể đã bị thay đổi hoặc không tồn tại trên website CV cá nhân của Nguyễn Lê Gia Huy.
          </p>

          <div className="not-found-actions">
            <Button to="/" variant="primary" size="lg" icon="home">
              Quay lại Trang Chủ
            </Button>
            <Button to="/projects" variant="outline" size="lg" icon="projects">
              Xem Các Dự Án
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}


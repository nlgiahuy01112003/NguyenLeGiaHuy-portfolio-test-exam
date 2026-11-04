import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROFILE, CV_FILES, HOME_STATS, HOME_HIGHLIGHTS, SOCIAL_LINKS } from '../../data/profile.js';
import { TECH_MARQUEE } from '../../data/skills.js';
import { useTypewriter } from '../../hooks/useTypewriter.js';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import Button from '../../components/ui/Button.jsx';
import Card from '../../components/ui/Card.jsx';
import Icon from '../../components/ui/Icon.jsx';
import './HomePage.css';

export default function HomePage() {
  useDocumentTitle('Trang chủ — Giới thiệu');
  const typedRole = useTypewriter(PROFILE.roles, { typeSpeed: 60, deleteSpeed: 30, pause: 2000 });
  const [cvMenuOpen, setCvMenuOpen] = useState(false);

  // 3D Parallax Tilt cho Avatar Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });
  const rotateX = useTransform(springY, [-150, 150], [12, -12]);
  const rotateY = useTransform(springX, [-150, 150], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main className="page home-page" id="main-content">
      {/* Ambient background glow elements */}
      <div className="home-ambient home-ambient--1" aria-hidden="true" />
      <div className="home-ambient home-ambient--2" aria-hidden="true" />

      {/* Hero Section */}
      <section className="container hero-section" aria-label="Giới thiệu bản thân">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="status-indicator" />
              <span>{PROFILE.availability}</span>
            </div>

            <h1 className="hero-heading">
              <span className="hero-greeting">Xin chào, tôi là</span>
              <span className="hero-name gradient-text">{PROFILE.fullName}</span>
              <span className="hero-role-wrap">
                <span className="hero-role-static">Chức danh: </span>
                <span className="hero-role-typed">{typedRole}</span>
                <span className="typewriter-cursor" aria-hidden="true">|</span>
              </span>
            </h1>

            <p className="hero-intro">{PROFILE.intro}</p>

            {/* CTAs rõ ràng theo đề bài: "Xem Hồ Sơ Chi Tiết" / "Tải CV" / "Xem Dự Án" */}
            <div className="hero-ctas">
              <Button to="/resume" variant="primary" size="lg" iconRight="arrowRight">
                Xem Hồ Sơ Chi Tiết
              </Button>

              <Button to="/projects" variant="secondary" size="lg" icon="projects">
                Xem Dự Án
              </Button>

              {/* Dropdown Tải CV (VI / EN) */}
              <div className="hero-cv-dropdown">
                <Button
                  variant="outline"
                  size="lg"
                  icon="download"
                  onClick={() => setCvMenuOpen(!cvMenuOpen)}
                  aria-expanded={cvMenuOpen}
                >
                  Tải CV
                </Button>

                {cvMenuOpen && (
                  <motion.div
                    className="hero-cv-menu card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                  >
                    {CV_FILES.map((file) => (
                      <a
                        key={file.lang}
                        href={file.href}
                        download
                        className="hero-cv-link"
                        onClick={() => setCvMenuOpen(false)}
                      >
                        <span className="hero-cv-lang">{file.lang}</span>
                        <span>{file.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Social quick links */}
            <div className="hero-socials">
              <span className="hero-socials-label">Kênh kết nối:</span>
              <div className="hero-socials-list">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                    aria-label={item.label}
                  >
                    <Icon name={item.id} size={18} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Avatar Card */}
          <motion.div
            className="hero-avatar-col"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <motion.div
              className="hero-avatar-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
            >
              <div className="hero-avatar-frame">
                <img
                  src={PROFILE.avatar}
                  alt={`Chân dung ${PROFILE.fullName}`}
                  width="460"
                  height="460"
                  className="hero-avatar-img"
                  fetchPriority="high"
                />
                <div className="hero-avatar-overlay" />
              </div>

              {/* Floating badges around avatar */}
              <motion.div
                className="floating-badge floating-badge--top-right card"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <Icon name="rocket" size={18} />
                <div>
                  <strong>React 19 & Next.js</strong>
                  <span>App Router / Zustand</span>
                </div>
              </motion.div>

              <motion.div
                className="floating-badge floating-badge--bottom-left card"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <Icon name="award" size={18} />
                <div>
                  <strong>Kỹ sư CNTT</strong>
                  <span>HUTECH 03/2026</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Tech Banner */}
      <section className="tech-marquee-section" aria-label="Công nghệ sử dụng">
        <div className="tech-marquee-track">
          <div className="tech-marquee-inner">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, idx) => (
              <span key={`${tech}-${idx}`} className="tech-marquee-pill">
                <span className="marquee-dot" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="container section stats-section" aria-label="Thống kê nổi bật">
        <div className="stats-grid">
          {HOME_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="stat-number gradient-text">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights 3 Columns: Hồ sơ, Kỹ năng, Dự án */}
      <section className="container section highlights-section" aria-label="Các mục chính">
        <div className="section-head">
          <span className="section-subtitle">Khám phá</span>
          <h2 className="section-title">Nội dung portfolio</h2>
        </div>

        <div className="highlights-grid">
          {HOME_HIGHLIGHTS.map((item, i) => (
            <Card
              key={item.to}
              className="highlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="highlight-icon-wrap">
                <Icon name={item.icon} size={24} />
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-text">{item.text}</p>
              <Link to={item.to} className="highlight-link">
                <span>Xem chi tiết</span>
                <Icon name="arrowRight" size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Project Showcase: TechStore (Vanfio) */}
      <section className="container section featured-section" aria-label="Dự án tiêu biểu">
        <div className="featured-card card">
          <div className="featured-grid">
            <div className="featured-content">
              <div className="featured-tag">
                <Icon name="star" size={14} /> Tiêu điểm nổi bật
              </div>
              <h2 className="featured-title">TechStore (Vanfio) E-Commerce</h2>
              <p className="featured-desc">
                Storefront thương mại điện tử thiết bị công nghệ hiện đại với 27 routes responsive, Spotlight Search (Ctrl+K),
                quản trị trạng thái Zustand mượt mà và luồng thanh toán MoMo an toàn.
              </p>
              <div className="featured-metrics">
                <div className="featured-metric">
                  <strong>95+</strong>
                  <span>Lighthouse Mobile</span>
                </div>
                <div className="featured-metric">
                  <strong>CLS = 0</strong>
                  <span>Không giật layout</span>
                </div>
                <div className="featured-metric">
                  <strong>&lt; 50ms</strong>
                  <span>Tìm kiếm tức thì</span>
                </div>
              </div>
              <div className="featured-actions">
                <Button to="/projects" variant="primary" iconRight="arrowRight">
                  Khám phá toàn bộ 8 dự án
                </Button>
                <Button href="https://website-for-aunt.vercel.app" target="_blank" variant="outline" iconRight="external">
                  Trải nghiệm trực tiếp
                </Button>
              </div>
            </div>

            <div className="featured-media">
              <img
                src="/images/projects/techstore.webp"
                alt="TechStore storefront screenshot"
                width="640"
                height="360"
                loading="lazy"
                className="featured-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


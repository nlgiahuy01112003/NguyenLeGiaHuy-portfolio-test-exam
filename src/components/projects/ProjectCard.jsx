import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';
import Modal from '../ui/Modal.jsx';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.article
        className="project-card card"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Thumbnail with overlay & badge */}
        <div className="project-card__thumb-wrap">
          <img
            src={project.thumbnail}
            alt={`Ảnh chụp dự án ${project.title}`}
            width="480"
            height="270"
            loading="lazy"
            className="project-card__thumb"
          />
          <div className="project-card__badges">
            <span className="project-card__badge-year">{project.year}</span>
            {project.featured && (
              <span className="project-card__badge-featured">
                <Icon name="star" size={12} /> Tiêu biểu
              </span>
            )}
          </div>
          <button
            type="button"
            className="project-card__quick-view"
            onClick={() => setModalOpen(true)}
            aria-label={`Xem chi tiết dự án ${project.title}`}
          >
            <Icon name="eye" size={16} /> Xem chi tiết
          </button>
        </div>

        {/* Content */}
        <div className="project-card__content">
          <div className="project-card__meta">
            <span className="project-card__role">{project.role}</span>
          </div>

          <h3 className="project-card__title">
            <button
              type="button"
              className="project-card__title-btn"
              onClick={() => setModalOpen(true)}
            >
              {project.title}
            </button>
          </h3>

          <p className="project-card__summary">{project.summary}</p>

          {/* Tech stack tags rendered with .map() */}
          <ul className="project-card__tags" aria-label="Công nghệ sử dụng">
            {project.tech.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>

          {/* Action Links */}
          <div className="project-card__actions">
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                href={project.github}
                target="_blank"
                icon="github"
                aria-label={`Mã nguồn GitHub của ${project.title}`}
              >
                GitHub
              </Button>
            )}

            {/* Đề bài: Nếu thiếu link Demo, hiển thị trạng thái disabled + tooltip/ghi chú "Chưa triển khai" */}
            {project.demo ? (
              <Button
                variant="primary"
                size="sm"
                href={project.demo}
                target="_blank"
                iconRight="external"
                aria-label={`Xem demo trực tiếp ${project.title}`}
              >
                Trực tiếp
              </Button>
            ) : (
              <div className="project-card__disabled-wrap" title="Chưa triển khai bản live demo cho dự án này">
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  iconRight="external"
                  aria-disabled="true"
                >
                  Demo
                </Button>
                <span className="project-card__disabled-tip">Chưa triển khai</span>
              </div>
            )}
          </div>
        </div>
      </motion.article>

      {/* Modal chi tiết dự án */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={project.title}
        maxWidth="720px"
      >
        <div className="project-detail">
          <div className="project-detail__thumb-wrap">
            <img
              src={project.thumbnail}
              alt={project.title}
              width="720"
              height="405"
              className="project-detail__thumb"
            />
          </div>

          <div className="project-detail__meta">
            <div>
              <span className="project-detail__label">Vai trò:</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span className="project-detail__label">Thời gian:</span>
              <strong>{project.year}</strong>
            </div>
          </div>

          <p className="project-detail__desc">{project.summary}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="project-detail__section">
              <h4 className="project-detail__sub">Điểm nổi bật & Kỹ thuật cốt lõi</h4>
              <ul className="project-detail__list">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-detail__tech">
            <h4 className="project-detail__sub">Công nghệ</h4>
            <div className="project-card__tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="project-detail__footer">
            {project.github && (
              <Button variant="outline" href={project.github} target="_blank" icon="github">
                Xem mã nguồn GitHub
              </Button>
            )}
            {project.demo && (
              <Button variant="primary" href={project.demo} target="_blank" iconRight="external">
                Mở Live Demo
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}


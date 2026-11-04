import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE, CV_FILES } from '../../data/profile.js';
import { EDUCATION, EXPERIENCE, ACTIVITIES, CERTIFICATES, CAREER_OBJECTIVE } from '../../data/resume.js';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import Button from '../../components/ui/Button.jsx';
import Card from '../../components/ui/Card.jsx';
import Icon from '../../components/ui/Icon.jsx';
import Modal from '../../components/ui/Modal.jsx';
import './ResumePage.css';

const TABS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'experience', label: 'Kinh nghiệm làm việc' },
  { id: 'education', label: 'Học vấn' },
  { id: 'activities', label: 'Hoạt động & Tình nguyện' },
  { id: 'certificates', label: 'Chứng chỉ & Bằng cấp' },
];

export default function ResumePage() {
  useDocumentTitle('Hồ sơ chi tiết — CV');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main className="page resume-page" id="main-content">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header__meta">
            <span className="section-subtitle">Resume / Profile</span>
            <h1 className="page-title">Hồ Sơ Năng Lực Chi Tiết</h1>
            <p className="page-description">
              Tổng quan về học vấn, kinh nghiệm thực chiến, hoạt động ngoại khóa và mục tiêu nghề nghiệp của tôi.
            </p>
          </div>

          <div className="page-header__actions">
            {CV_FILES.map((cv) => (
              <Button key={cv.lang} href={cv.href} download variant="primary" icon="download">
                {cv.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Personal Details Card */}
        <section className="resume-personal card" aria-label="Thông tin cá nhân">
          <div className="personal-grid">
            <div className="personal-avatar-wrap">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.fullName}
                width="140"
                height="140"
                className="personal-avatar"
              />
            </div>

            <div className="personal-info">
              <h2 className="personal-name">{PROFILE.fullName}</h2>
              <span className="tag personal-role">{PROFILE.role}</span>

              <div className="personal-details-grid">
                <div className="detail-item">
                  <Icon name="calendar" size={16} />
                  <span>Ngày sinh:</span>
                  <strong>{PROFILE.birthDate}</strong>
                </div>

                <div className="detail-item">
                  <Icon name="user" size={16} />
                  <span>Giới tính:</span>
                  <strong>{PROFILE.gender}</strong>
                </div>

                <div className="detail-item">
                  <Icon name="pin" size={16} />
                  <span>Địa chỉ:</span>
                  <strong>{PROFILE.location}</strong>
                </div>

                <div className="detail-item">
                  <Icon name="mail" size={16} />
                  <span>Email:</span>
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </div>

                <div className="detail-item">
                  <Icon name="phone" size={16} />
                  <span>SĐT:</span>
                  <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Objective Section */}
        <section className="resume-objective card section" aria-label="Mục tiêu nghề nghiệp">
          <div className="objective-head">
            <div className="objective-icon">
              <Icon name="rocket" size={24} />
            </div>
            <div>
              <h2 className="section-title">Mục Tiêu Nghề Nghiệp</h2>
              <span className="objective-sub">Định hướng phát triển kỹ sư Frontend</span>
            </div>
          </div>
          <div className="objective-content">
            {CAREER_OBJECTIVE.map((para, i) => (
              <p key={i} className="objective-para">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Interactive Tabs (Requirement 5 & C.2) */}
        <div className="resume-tabs-wrap section" role="tablist" aria-label="Chuyển đổi phân mục hồ sơ">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`resume-tab-btn ${activeTab === tab.id ? 'resume-tab-btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="active-resume-tab"
                  className="resume-tab-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="resume-content section">
          {/* 1. Kinh nghiệm làm việc */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <section className="resume-block" aria-label="Kinh nghiệm làm việc">
              <div className="block-head">
                <Icon name="briefcase" size={22} />
                <h2 className="block-title">Kinh Nghiệm Thực Tế</h2>
              </div>

              <div className="timeline">
                {EXPERIENCE.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="timeline-item card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{exp.position}</h3>
                        <span className="timeline-company">{exp.company}</span>
                      </div>
                      <span className="timeline-date">
                        {exp.start} – {exp.end}
                      </span>
                    </div>

                    <ul className="timeline-bullets">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* 2. Học vấn */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <section className="resume-block" aria-label="Học vấn">
              <div className="block-head">
                <Icon name="graduation" size={22} />
                <h2 className="block-title">Học Vấn</h2>
              </div>

              <div className="timeline">
                {EDUCATION.map((edu) => (
                  <motion.div
                    key={edu.id}
                    className="timeline-item card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{edu.degree}</h3>
                        <span className="timeline-company">{edu.school}</span>
                        <div className="timeline-submeta">
                          <span className="tag">{edu.major}</span>
                          <span className="tag">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                      <span className="timeline-date">
                        {edu.start} – {edu.end}
                      </span>
                    </div>

                    <ul className="timeline-bullets">
                      {edu.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Hoạt động ngoại khóa / Tình nguyện */}
          {(activeTab === 'all' || activeTab === 'activities') && (
            <section className="resume-block" aria-label="Hoạt động ngoại khóa">
              <div className="block-head">
                <Icon name="heart" size={22} />
                <h2 className="block-title">Hoạt Động Ngoại Khóa & Tình Nguyện</h2>
              </div>

              <div className="timeline">
                {ACTIVITIES.map((act) => (
                  <motion.div
                    key={act.id}
                    className="timeline-item card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{act.role}</h3>
                        <span className="timeline-company">{act.organization}</span>
                      </div>
                      <span className="timeline-date">
                        {act.start} – {act.end}
                      </span>
                    </div>

                    <ul className="timeline-bullets">
                      {act.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Chứng chỉ & Bằng cấp */}
          {(activeTab === 'all' || activeTab === 'certificates') && (
            <section className="resume-block" aria-label="Chứng chỉ & Bằng cấp">
              <div className="block-head">
                <Icon name="award" size={22} />
                <h2 className="block-title">Chứng Chỉ & Văn Bằng</h2>
              </div>

              <div className="certs-grid">
                {CERTIFICATES.map((cert) => (
                  <Card
                    key={cert.id}
                    className="cert-card interactive"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="cert-img-wrap">
                      <img
                        src={cert.image}
                        alt={`Chứng chỉ ${cert.title}`}
                        width="360"
                        height="240"
                        loading="lazy"
                        className="cert-img"
                      />
                      <div className="cert-overlay">
                        <Icon name="eye" size={20} />
                        <span>Xem chứng chỉ</span>
                      </div>
                    </div>
                    <div className="cert-info">
                      <h3 className="cert-title">{cert.title}</h3>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Modal xem trước chứng chỉ */}
      <Modal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || 'Chứng chỉ'}
        maxWidth="800px"
      >
        {selectedCert && (
          <div className="cert-modal-body">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              width="800"
              height="550"
              className="cert-modal-img"
            />
            <p className="cert-modal-issuer">{selectedCert.issuer}</p>
          </div>
        )}
      </Modal>
    </main>
  );
}


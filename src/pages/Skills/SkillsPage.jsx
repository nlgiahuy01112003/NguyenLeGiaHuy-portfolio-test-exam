import { motion } from 'framer-motion';
import { SKILL_GROUPS, SOFT_SKILLS, LANGUAGES } from '../../data/skills.js';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import SkillBar from '../../components/skills/SkillBar.jsx';
import Card from '../../components/ui/Card.jsx';
import Icon from '../../components/ui/Icon.jsx';
import './SkillsPage.css';

export default function SkillsPage() {
  useDocumentTitle('Kỹ năng & Năng lực — Skills');

  return (
    <main className="page skills-page" id="main-content">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header__meta">
            <span className="section-subtitle">Skills & Competencies</span>
            <h1 className="page-title">Kỹ Năng & Năng Lực Kỹ Thuật</h1>
            <p className="page-description">
              Phân loại chuyên môn kỹ thuật, mức độ thành thạo, kỹ năng mềm và trình độ ngoại ngữ.
            </p>
          </div>
        </div>

        {/* Philosophy Card */}
        <section className="skills-philosophy card" aria-label="Triết lý kỹ thuật">
          <div className="philosophy-icon">
            <Icon name="bulb" size={24} />
          </div>
          <div className="philosophy-content">
            <h2 className="philosophy-title">Triết lý kỹ thuật của tôi</h2>
            <blockquote className="philosophy-quote">
              &ldquo;Một giao diện tốt không chỉ dừng lại ở giao diện đẹp, mà phải tải nhanh (Core Web Vitals), dễ tiếp cận cho mọi người (WCAG),
              có kiến trúc component rõ ràng, có thể mở rộng và mang lại sự tin cậy tuyệt đối cho người dùng.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* 1. Technical Skills theo từng nhóm */}
        <section className="skills-section section" aria-label="Kỹ năng chuyên môn">
          <div className="section-head">
            <span className="section-subtitle">Phân loại chuyên sâu</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>

          <div className="skill-groups-grid">
            {SKILL_GROUPS.map((group, groupIdx) => (
              <motion.div
                key={group.id}
                className="skill-group-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
              >
                <div className="group-head">
                  <div className="group-icon">
                    <Icon name={group.icon} size={20} />
                  </div>
                  <h3 className="group-title">{group.title}</h3>
                </div>

                <div className="group-skills-list">
                  {group.skills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Soft Skills (3–5 kỹ năng) */}
        <section className="soft-skills-section section" aria-label="Kỹ năng mềm">
          <div className="section-head">
            <span className="section-subtitle">Phối hợp & Thái độ</span>
            <h2 className="section-title">Soft Skills (Kỹ Năng Mềm)</h2>
          </div>

          <div className="soft-skills-grid">
            {SOFT_SKILLS.map((soft, i) => (
              <Card
                key={soft.name}
                className="soft-skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="soft-skill-icon">
                  <Icon name={soft.icon} size={22} />
                </div>
                <h3 className="soft-skill-name">{soft.name}</h3>
                <p className="soft-skill-detail">{soft.detail}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Ngoại ngữ */}
        <section className="languages-section section" aria-label="Ngoại ngữ">
          <div className="section-head">
            <span className="section-subtitle">Khả năng giao tiếp quốc tế</span>
            <h2 className="section-title">Ngoại Ngữ</h2>
          </div>

          <div className="languages-grid">
            {LANGUAGES.map((lang, i) => (
              <Card
                key={lang.name}
                className="language-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="language-head">
                  <Icon name="globe" size={24} />
                  <div>
                    <h3 className="language-name">{lang.name}</h3>
                    <span className="language-level">{lang.level}</span>
                  </div>
                </div>

                <div className="skill-bar__track" style={{ marginTop: 'var(--sp-3)' }}>
                  <motion.div
                    className="skill-bar__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}


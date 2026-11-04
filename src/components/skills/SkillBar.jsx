import { motion } from 'framer-motion';
import { LEVEL_LABELS } from '../../data/skills.js';
import './SkillBar.css';

export default function SkillBar({ skill, index = 0 }) {
  const { name, level, percent } = skill;
  const levelLabel = LEVEL_LABELS[level] || 'Khá';

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <div className="skill-bar__meta">
          <span className="skill-bar__badge">{levelLabel}</span>
          <div className="skill-bar__dots" aria-label={`Đánh giá: ${level}/5`}>
            {[1, 2, 3, 4, 5].map((dot) => (
              <span
                key={dot}
                className={`skill-bar__dot ${dot <= level ? 'skill-bar__dot--filled' : ''}`}
              />
            ))}
          </div>
          <span className="skill-bar__percent">{percent}%</span>
        </div>
      </div>

      <div className="skill-bar__track" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

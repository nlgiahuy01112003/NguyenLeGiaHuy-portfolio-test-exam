import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouteTransition } from '../../hooks/useAppContext.js';
import { TRANSITION_MODES } from '../../constants/transitions.js';
import Icon from '../ui/Icon.jsx';
import './TransitionLab.css';

export default function TransitionLab() {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useRouteTransition();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentMode = TRANSITION_MODES.find((m) => m.id === mode) || TRANSITION_MODES[0];

  return (
    <div className="transition-lab" ref={ref}>
      <button
        type="button"
        className="transition-lab__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Chọn hiệu ứng chuyển trang (Transition Lab)"
        title="Chọn hiệu ứng chuyển cảnh giữa các trang"
      >
        <Icon name="wand" size={16} />
        <span className="transition-lab__trigger-label">{currentMode.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="transition-lab__dropdown card"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="transition-lab__header">
              <span className="transition-lab__title">Hiệu ứng chuyển trang</span>
              <span className="transition-lab__badge">Framer Motion</span>
            </div>
            <ul className="transition-lab__list">
              {TRANSITION_MODES.map((m) => (
                <li key={m.id}>
                  <button
                    type="button"
                    className={`transition-lab__item ${m.id === mode ? 'transition-lab__item--active' : ''}`}
                    onClick={() => {
                      setMode(m.id);
                      setOpen(false);
                    }}
                  >
                    <div className="transition-lab__item-info">
                      <span className="transition-lab__item-name">{m.label}</span>
                      <span className="transition-lab__item-hint">{m.hint}</span>
                    </div>
                    {m.id === mode && <Icon name="check" size={16} />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

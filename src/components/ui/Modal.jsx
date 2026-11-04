import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon.jsx';
import './Modal.css';

export default function Modal({ isOpen, onClose, title, children, maxWidth = '650px' }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="modal-container">
            <motion.div
              className="modal-card card"
              style={{ maxWidth }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              <div className="modal-header">
                <h3 id="modal-title" className="modal-title">
                  {title}
                </h3>
                <button
                  type="button"
                  className="modal-close"
                  onClick={onClose}
                  aria-label="Đóng cửa sổ"
                >
                  <Icon name="close" size={20} />
                </button>
              </div>
              <div className="modal-body">{children}</div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}


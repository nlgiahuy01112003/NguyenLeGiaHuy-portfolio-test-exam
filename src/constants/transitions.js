/**
 * Thư viện route transitions (Framer Motion variants).
 * Mỗi variant nhận `custom = direction` (1: đi tới, -1: quay lại) để tạo
 * chuyển động có hướng, khớp với vị trí tab trên navbar.
 */
const EASE_OUT = [0.22, 1, 0.36, 1];
const EASE_IN = [0.64, 0, 0.78, 0];

export const TRANSITION_MODES = [
  { id: 'auto', label: 'Tự động', hint: 'Mỗi trang một hiệu ứng riêng' },
  { id: 'fade', label: 'Fade + Blur', hint: 'Mờ dần, nhẹ nhàng' },
  { id: 'slide', label: 'Slide', hint: 'Trượt theo hướng điều hướng' },
  { id: 'zoom', label: 'Zoom', hint: 'Phóng to / thu nhỏ' },
  { id: 'clip', label: 'Circle Reveal', hint: 'Mở ra từ hình tròn (clip-path)' },
  { id: 'flip', label: '3D Flip', hint: 'Lật trang 3D' },
  { id: 'curtain', label: 'Curtain', hint: 'Màn che nhiều cột (stagger)' },
];

export const PAGE_VARIANTS = {
  fade: {
    initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: EASE_OUT },
      transitionEnd: { filter: 'none' },
    },
    exit: { opacity: 0, y: -16, filter: 'blur(8px)', transition: { duration: 0.3, ease: EASE_IN } },
  },

  slide: {
    initial: (direction) => ({ opacity: 0, x: direction > 0 ? '12%' : '-12%' }),
    animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 220, damping: 30 } },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '-12%' : '12%',
      transition: { duration: 0.3, ease: EASE_IN },
    }),
  },

  zoom: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
    exit: { opacity: 0, scale: 1.06, transition: { duration: 0.28, ease: EASE_IN } },
  },

  clip: {
    initial: { clipPath: 'circle(0% at 50% 30vh)', opacity: 0.6 },
    animate: {
      clipPath: 'circle(150% at 50% 30vh)',
      opacity: 1,
      transition: { duration: 0.75, ease: EASE_OUT },
      transitionEnd: { clipPath: 'none' },
    },
    exit: { opacity: 0, y: 12, transition: { duration: 0.25, ease: EASE_IN } },
  },

  flip: {
    initial: (direction) => ({ opacity: 0, rotateY: direction > 0 ? 14 : -14, x: direction > 0 ? 60 : -60, transformPerspective: 1400 }),
    animate: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transformPerspective: 1400,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
    exit: (direction) => ({
      opacity: 0,
      rotateY: direction > 0 ? -14 : 14,
      x: direction > 0 ? -60 : 60,
      transformPerspective: 1400,
      transition: { duration: 0.32, ease: EASE_IN },
    }),
  },

  glitch: {
    initial: { opacity: 0, skewX: 12, x: -30 },
    animate: {
      opacity: [0, 1, 0.4, 1],
      skewX: [12, -6, 3, 0],
      x: [-30, 12, -4, 0],
      transition: { duration: 0.6, times: [0, 0.4, 0.7, 1] },
    },
    exit: { opacity: 0, skewX: -10, transition: { duration: 0.25 } },
  },

  /* Trang giữ nguyên, phần chuyển cảnh do <Curtain /> đảm nhiệm */
  curtain: {
    initial: { opacity: 1 },
    animate: { opacity: 1, transition: { duration: 0.9 } },
    exit: { opacity: 1, transition: { duration: 0.9 } },
  },

  reduced: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  },
};

/* Stagger tiện dụng cho danh sách / nhóm phần tử */
export const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const FADE_UP_ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};


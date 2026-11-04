import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { getRouteIndex, ROUTES } from '../../constants/routes.js';
import { PAGE_VARIANTS } from '../../constants/transitions.js';
import { useRouteTransition } from '../../hooks/useAppContext.js';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import './RouteTransition.css';

export default function RouteTransitionLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const { mode } = useRouteTransition();
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  const currentIndex = getRouteIndex(location.pathname);
  const [prev, setPrev] = useState({ path: location.pathname, index: currentIndex, direction: 1 });

  if (prev.path !== location.pathname) {
    const nextDirection = currentIndex >= prev.index ? 1 : -1;
    setPrev({ path: location.pathname, index: currentIndex, direction: nextDirection });
  }

  const direction = prev.direction;

  // Quyết định variant
  let activeVariantKey = mode;
  if (prefersReduced) {
    activeVariantKey = 'reduced';
  } else if (mode === 'auto') {
    // Lấy hiệu ứng riêng của từng route
    const currentRoute = ROUTES.find((r) => r.path === location.pathname);
    activeVariantKey = currentRoute?.transition || 'fade';
  }

  const variant = PAGE_VARIANTS[activeVariantKey] || PAGE_VARIANTS.fade;

  return (
    <div className="route-transition-container">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={variant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="route-transition-page"
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

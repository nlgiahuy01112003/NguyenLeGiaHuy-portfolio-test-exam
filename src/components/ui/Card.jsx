import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, onClick, as = 'div', ...rest }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`card ${className}`.trim()}
      onClick={onClick}
      whileHover={hover ? { y: -5, boxShadow: 'var(--shadow-lg)' } : {}}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

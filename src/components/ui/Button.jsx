import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import './Button.css';

/**
 * Button chuẩn hóa, hỗ trợ dạng link (to/href) hoặc button thường,
 * có hiệu ứng micro-interaction khi tap/hover.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
    size = 'md', // 'sm' | 'md' | 'lg'
    icon,
    iconRight,
    loading = false,
    disabled = false,
    to,
    href,
    target,
    rel,
    className = '',
    onClick,
    type = 'button',
    ...rest
  },
  ref,
) {
  const classes = `btn btn--${variant} btn--${size} ${loading ? 'btn--loading' : ''} ${className}`.trim();

  const content = (
    <>
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {!loading && icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />}
      <span className="btn__text">{children}</span>
      {!loading && iconRight && <Icon name={iconRight} size={size === 'sm' ? 16 : 18} />}
    </>
  );

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.03, y: -1 },
    whileTap: disabled || loading ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 450, damping: 20 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link ref={ref} to={to} className={classes} {...rest}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <a
          ref={ref}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          className={classes}
          {...rest}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  );
});

export default Button;


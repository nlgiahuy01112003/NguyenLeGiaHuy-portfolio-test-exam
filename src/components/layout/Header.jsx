import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ROUTES, preloadRoute } from '../../constants/routes.js';
import { PROFILE } from '../../data/profile.js';
import { useTheme } from '../../hooks/useAppContext.js';
import Icon from '../ui/Icon.jsx';
import TransitionLab from './TransitionLab.jsx';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Đóng mobile menu khi click link
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__brand" aria-label="Nguyễn Lê Gia Huy - Trang chủ">
          <div className="header__avatar-badge">
            <img
              src="/images/profile-photo.webp"
              alt="Nguyễn Lê Gia Huy"
              width="36"
              height="36"
              className="header__avatar-img"
            />
          </div>
          <span className="header__brand-name">{PROFILE.shortName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Menu chính">
          <ul className="header__nav-list">
            {ROUTES.map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <li key={route.path} className="header__nav-item">
                  <NavLink
                    to={route.path}
                    className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                    onMouseEnter={() => preloadRoute(route.path)}
                    onFocus={() => preloadRoute(route.path)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="header__nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="header__nav-text">{route.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Transition Lab + Theme toggle + Mobile Hamburger */}
        <div className="header__actions">
          {/* Transition Mode Selector (Lab) */}
          <TransitionLab />

          {/* Theme Toggle */}
          <button
            type="button"
            className="header__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
            </motion.div>
          </button>

          {/* Hamburger Button */}
          <button
            type="button"
            className={`header__hamburger ${mobileOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mobile-drawer__inner">
              <nav aria-label="Menu di động">
                <ul className="mobile-drawer__list">
                  {ROUTES.map((route, idx) => (
                    <motion.li
                      key={route.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                    >
                      <NavLink
                        to={route.path}
                        onClick={closeMobile}
                        className={({ isActive }) =>
                          `mobile-drawer__link ${isActive ? 'mobile-drawer__link--active' : ''}`
                        }
                      >
                        <span className="mobile-drawer__link-label">{route.label}</span>
                        <span className="mobile-drawer__link-short">{route.shortLabel}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="mobile-drawer__footer">
                <div className="mobile-drawer__contact">
                  <span>{PROFILE.email}</span>
                  <span>{PROFILE.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

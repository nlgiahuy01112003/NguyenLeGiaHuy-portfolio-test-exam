import { Link } from 'react-router-dom';
import { PROFILE, SOCIAL_LINKS } from '../../data/profile.js';
import { ROUTES } from '../../constants/routes.js';
import Icon from '../ui/Icon.jsx';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand-block">
            <Link to="/" className="footer__brand">
              <span className="footer__brand-name">{PROFILE.fullName}</span>
              <span className="tag">{PROFILE.role}</span>
            </Link>
            <p className="footer__tagline">
              Xây dựng giao diện web phản hồi nhanh, mượt mà và thân thiện với người dùng.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Liên kết chân trang">
            <ul className="footer__nav-list">
              {ROUTES.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className="footer__nav-link">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__socials">
            <span className="footer__socials-title">Kết nối</span>
            <div className="footer__socials-icons">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                  aria-label={item.label}
                >
                  <Icon name={item.id} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {PROFILE.fullName}. Xây dựng bằng React 19, Framer Motion & Vite.
          </p>
          <p className="footer__status">
            <span className="status-indicator" />
            {PROFILE.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}


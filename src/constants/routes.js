import { lazy } from 'react';

/**
 * Lazy-load từng trang (code splitting) + hàm `preload` để tải trước chunk
 * khi người dùng hover/focus vào link → chuyển trang không bị khựng.
 */
function lazyWithPreload(factory) {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
}

export const HomePage = lazyWithPreload(() => import('../pages/Home/HomePage.jsx'));
export const ResumePage = lazyWithPreload(() => import('../pages/Resume/ResumePage.jsx'));
export const SkillsPage = lazyWithPreload(() => import('../pages/Skills/SkillsPage.jsx'));
export const ProjectsPage = lazyWithPreload(() => import('../pages/Projects/ProjectsPage.jsx'));
export const ContactPage = lazyWithPreload(() => import('../pages/Contact/ContactPage.jsx'));
export const NotFoundPage = lazyWithPreload(() => import('../pages/NotFound/NotFoundPage.jsx'));

/** Thứ tự route dùng để tính hướng (trái/phải) cho slide transition */
export const ROUTES = [
  { path: '/', label: 'Trang chủ', shortLabel: 'Home', component: HomePage, transition: 'fade' },
  { path: '/resume', label: 'Hồ sơ', shortLabel: 'Resume', component: ResumePage, transition: 'slide' },
  { path: '/skills', label: 'Kỹ năng', shortLabel: 'Skills', component: SkillsPage, transition: 'zoom' },
  { path: '/projects', label: 'Dự án', shortLabel: 'Projects', component: ProjectsPage, transition: 'clip' },
  { path: '/contact', label: 'Liên hệ', shortLabel: 'Contact', component: ContactPage, transition: 'flip' },
];

export const NOT_FOUND_ROUTE = { path: '*', component: NotFoundPage, transition: 'glitch' };

export function getRouteIndex(pathname) {
  const index = ROUTES.findIndex((route) => route.path === pathname);
  return index === -1 ? ROUTES.length : index;
}

export function preloadRoute(pathname) {
  ROUTES.find((route) => route.path === pathname)?.component.preload();
}

export function preloadAllRoutes() {
  [...ROUTES, NOT_FOUND_ROUTE].forEach((route) => route.component.preload());
}


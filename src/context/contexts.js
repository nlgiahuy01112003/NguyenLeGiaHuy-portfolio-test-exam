import { createContext } from 'react';

/** Tách context objects ra file riêng để Fast Refresh hoạt động ổn định */
export const ThemeContext = createContext(null);
export const TransitionContext = createContext(null);
export const ToastContext = createContext(null);
export const IntroContext = createContext({ introDone: true });


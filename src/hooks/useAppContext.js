import { useContext } from 'react';
import { IntroContext, ThemeContext, ToastContext, TransitionContext } from '../context/contexts.js';

function useRequiredContext(context, name) {
  const value = useContext(context);
  if (value === null) throw new Error(`${name} phải được dùng bên trong Provider tương ứng`);
  return value;
}

export const useTheme = () => useRequiredContext(ThemeContext, 'useTheme');
export const useRouteTransition = () => useRequiredContext(TransitionContext, 'useRouteTransition');
export const useToast = () => useRequiredContext(ToastContext, 'useToast');
export const useIntro = () => useContext(IntroContext);


import { useCallback, useMemo, useState } from 'react';
import { TransitionContext } from './contexts.js';
import { TRANSITION_MODES } from '../constants/transitions.js';

const STORAGE_KEY = 'route-transition';

function getInitialMode() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return TRANSITION_MODES.some((mode) => mode.id === saved) ? saved : 'auto';
}

/** Cho phép người xem tự chọn kiểu route transition (Transition Lab) */
export function TransitionProvider({ children }) {
  const [mode, setModeState] = useState(getInitialMode);

  const setMode = useCallback((next) => {
    setModeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);
  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
}


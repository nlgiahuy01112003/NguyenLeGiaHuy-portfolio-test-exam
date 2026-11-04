import { useEffect, useState } from 'react';

/**
 * Hiệu ứng gõ chữ (typewriter) lặp qua danh sách từ.
 * @param {string[]} words
 * @param {{ typeSpeed?: number, deleteSpeed?: number, pause?: number, enabled?: boolean }} options
 */
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1600, enabled = true } = {}) {
  const [state, setState] = useState({ wordIndex: 0, text: '', deleting: false });

  useEffect(() => {
    if (!enabled || words.length === 0) return undefined;

    const current = words[state.wordIndex % words.length];
    const isComplete = !state.deleting && state.text === current;
    const isEmpty = state.deleting && state.text === '';

    let delay = state.deleting ? deleteSpeed : typeSpeed;
    if (isComplete) delay = pause;
    if (isEmpty) delay = 300;

    const timer = window.setTimeout(() => {
      setState((prev) => {
        const word = words[prev.wordIndex % words.length];
        if (!prev.deleting && prev.text === word) return { ...prev, deleting: true };
        if (prev.deleting && prev.text === '') return { wordIndex: prev.wordIndex + 1, text: '', deleting: false };
        const text = prev.deleting ? word.slice(0, prev.text.length - 1) : word.slice(0, prev.text.length + 1);
        return { ...prev, text };
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [state, words, typeSpeed, deleteSpeed, pause, enabled]);

  return enabled ? state.text : words[0];
}


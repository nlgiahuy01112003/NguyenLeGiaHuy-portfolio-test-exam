import { useEffect, useState } from 'react';

/** Trì hoãn cập nhật giá trị (dùng cho ô tìm kiếm dự án) */
export function useDebounce(value, delay = 250) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}


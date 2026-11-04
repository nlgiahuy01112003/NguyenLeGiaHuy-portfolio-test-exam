import { useCallback, useEffect, useRef, useState } from 'react';
import { INITIAL_CONTACT_VALUES, validateContact, validateField } from '../utils/validation.js';

const MOCK_SUBMIT_DELAY = 1500;

/**
 * Quản lý state form liên hệ: values, errors theo field, touched,
 * status ('idle' | 'submitting' | 'success') và submit giả lập (setTimeout).
 */
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_CONTACT_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitCount, setSubmitCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      // Đã chạm vào field → validate realtime để lỗi biến mất ngay khi sửa đúng
      if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    },
    [touched],
  );

  const handleBlur = useCallback((event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (status === 'submitting') return { ok: false };

      const nextErrors = validateContact(values);
      setErrors(nextErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      setSubmitCount((count) => count + 1);

      const invalidFields = Object.keys(nextErrors);
      if (invalidFields.length > 0) return { ok: false, firstInvalid: invalidFields[0] };

      setStatus('submitting');
      // Mock API: giả lập độ trễ mạng 1.5s
      timerRef.current = window.setTimeout(() => setStatus('success'), MOCK_SUBMIT_DELAY);
      return { ok: true };
    },
    [status, values],
  );

  const reset = useCallback(() => {
    setValues(INITIAL_CONTACT_VALUES);
    setErrors({});
    setTouched({});
    setStatus('idle');
  }, []);

  return { values, errors, touched, status, submitCount, handleChange, handleBlur, handleSubmit, reset };
}


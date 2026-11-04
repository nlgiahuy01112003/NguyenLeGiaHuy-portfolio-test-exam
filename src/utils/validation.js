export const MESSAGE_MIN_LENGTH = 20;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const CONTACT_FIELDS = [
  { name: 'name', label: 'Họ và tên', type: 'text', placeholder: 'Nguyễn Văn A', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'ban@congty.com', autoComplete: 'email' },
  { name: 'subject', label: 'Tiêu đề', type: 'text', placeholder: 'Mời phỏng vấn vị trí Frontend Intern', autoComplete: 'off' },
  { name: 'message', label: 'Nội dung', type: 'textarea', placeholder: 'Xin chào Huy, ...', autoComplete: 'off' },
];

export const INITIAL_CONTACT_VALUES = { name: '', email: '', subject: '', message: '' };

const REQUIRED_MESSAGES = {
  name: 'Vui lòng nhập họ và tên',
  email: 'Vui lòng nhập email',
  subject: 'Vui lòng nhập tiêu đề',
  message: 'Vui lòng nhập nội dung',
};

/** Validate một field — trả về chuỗi lỗi hoặc '' nếu hợp lệ */
export function validateField(name, rawValue) {
  const value = rawValue.trim();
  if (!value) return REQUIRED_MESSAGES[name];
  if (name === 'email' && !EMAIL_PATTERN.test(value)) return 'Email không đúng định dạng (VD: ten@gmail.com)';
  if (name === 'message' && value.length < MESSAGE_MIN_LENGTH) {
    return `Nội dung tối thiểu ${MESSAGE_MIN_LENGTH} ký tự (còn thiếu ${MESSAGE_MIN_LENGTH - value.length})`;
  }
  return '';
}

export function validateContact(values) {
  return Object.keys(values).reduce((errors, name) => {
    const error = validateField(name, values[name]);
    if (error) errors[name] = error;
    return errors;
  }, {});
}


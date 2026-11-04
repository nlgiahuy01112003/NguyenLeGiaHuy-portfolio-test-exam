import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_FIELDS } from '../../utils/validation.js';
import { useContactForm } from '../../hooks/useContactForm.js';
import { useToast } from '../../hooks/useAppContext.js';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import { PROFILE, SOCIAL_LINKS } from '../../data/profile.js';
import Button from '../../components/ui/Button.jsx';
import Card from '../../components/ui/Card.jsx';
import Icon from '../../components/ui/Icon.jsx';
import './ContactPage.css';

export default function ContactPage() {
  useDocumentTitle('Liên hệ — Contact');
  const { values, errors, touched, status, handleChange, handleBlur, handleSubmit, reset } =
    useContactForm();
  const { notify } = useToast();

  const onSubmitForm = (e) => {
    const res = handleSubmit(e);
    if (!res.ok && res.firstInvalid) {
      // Focus vào ô lỗi đầu tiên
      const el = document.getElementById(res.firstInvalid);
      el?.focus();
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    notify(`Đã sao chép ${label} vào bộ nhớ tạm!`, 'success');
  };

  return (
    <main className="page contact-page" id="main-content">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header__meta">
            <span className="section-subtitle">Get in Touch</span>
            <h1 className="page-title">Liên Hệ & Kết Nối</h1>
            <p className="page-description">
              Bạn có cơ hội thực tập, dự án thú vị hoặc muốn trao đổi chuyên môn? Hãy gửi lời nhắn cho tôi bên dưới.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Form */}
          <section className="contact-form-section card" aria-label="Biểu mẫu liên hệ">
            <h2 className="contact-form-title">Gửi tin nhắn trực tiếp</h2>
            <p className="contact-form-desc">
              Biểu mẫu có xử lý kiểm tra tính hợp lệ (validation) theo thời gian thực và mô phỏng phản hồi từ máy chủ.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* Success UX state (Yêu cầu C.5: Success message sau khi submit mock setTimeout 1-2s, không dùng alert()) */
                <motion.div
                  key="success-box"
                  className="contact-success-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="success-icon-wrap">
                    <Icon name="check" size={32} />
                  </div>
                  <h3 className="success-title">Tin nhắn đã được gửi thành công!</h3>
                  <p className="success-text">
                    Cảm ơn bạn <strong>{values.name}</strong> đã liên hệ. Tôi sẽ phản hồi qua email{' '}
                    <strong>{values.email}</strong> trong thời gian sớm nhất (thường trong vòng 24 giờ).
                  </p>
                  <Button variant="primary" onClick={reset} icon="send">
                    Gửi tin nhắn khác
                  </Button>
                </motion.div>
              ) : (
                /* Form Fields */
                <motion.form
                  key="contact-form"
                  onSubmit={onSubmitForm}
                  noValidate
                  className="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {CONTACT_FIELDS.map((field) => {
                    const id = field.name;
                    const isError = Boolean(touched[field.name] && errors[field.name]);
                    const isTouched = Boolean(touched[field.name]);
                    const isValid = isTouched && !errors[field.name] && values[field.name].trim().length > 0;

                    return (
                      <div
                        key={field.name}
                        className={`form-field ${isError ? 'form-field--error' : ''} ${isValid ? 'form-field--valid' : ''}`}
                      >
                        {/* C.7: Form có label gắn đúng input (htmlFor) */}
                        <div className="form-label-wrap">
                          <label htmlFor={id} className="form-label">
                            {field.label} <span className="field-required">*</span>
                          </label>
                          {field.name === 'message' && (
                            <span className="char-counter">
                              {values.message.length}/20 ký tự tối thiểu
                            </span>
                          )}
                        </div>

                        {field.type === 'textarea' ? (
                          <textarea
                            id={id}
                            name={field.name}
                            rows={4}
                            value={values[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={field.placeholder}
                            autoComplete={field.autoComplete}
                            aria-invalid={isError}
                            aria-describedby={isError ? `${id}-error` : undefined}
                            className="form-input form-textarea"
                          />
                        ) : (
                          <input
                            id={id}
                            type={field.type}
                            name={field.name}
                            value={values[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={field.placeholder}
                            autoComplete={field.autoComplete}
                            aria-invalid={isError}
                            aria-describedby={isError ? `${id}-error` : undefined}
                            className="form-input"
                          />
                        )}

                        {/* C.5: Hiển thị lỗi theo field */}
                        <AnimatePresence>
                          {isError && (
                            <motion.p
                              id={`${id}-error`}
                              className="field-error"
                              role="alert"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon name="alert" size={14} />
                              <span>{errors[field.name]}</span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* C.5: Submit: loading + disable button */}
                  <div className="form-actions">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={status === 'submitting'}
                      disabled={status === 'submitting'}
                      iconRight="send"
                    >
                      {status === 'submitting' ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                    </Button>
                    <span className="form-privacy">
                      Thông tin của bạn được cam kết bảo mật và không chia sẻ ra ngoài.
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </section>

          {/* Right Column: Channels & Socials */}
          <aside className="contact-channels" aria-label="Thông tin liên lạc">
            {/* Direct Cards */}
            <Card className="channel-card">
              <div className="channel-icon-wrap">
                <Icon name="mail" size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email trực tiếp</span>
                <a href={`mailto:${PROFILE.email}`} className="channel-val">
                  {PROFILE.email}
                </a>
              </div>
              <button
                type="button"
                className="channel-copy"
                onClick={() => copyToClipboard(PROFILE.email, 'Email')}
                aria-label="Sao chép Email"
                title="Sao chép"
              >
                <Icon name="copy" size={16} />
              </button>
            </Card>

            <Card className="channel-card">
              <div className="channel-icon-wrap">
                <Icon name="phone" size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Số điện thoại</span>
                <a href={PROFILE.phoneHref} className="channel-val">
                  {PROFILE.phone}
                </a>
              </div>
              <button
                type="button"
                className="channel-copy"
                onClick={() => copyToClipboard(PROFILE.phone, 'Số điện thoại')}
                aria-label="Sao chép Số điện thoại"
                title="Sao chép"
              >
                <Icon name="copy" size={16} />
              </button>
            </Card>

            <Card className="channel-card">
              <div className="channel-icon-wrap">
                <Icon name="pin" size={24} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Địa điểm làm việc</span>
                <span className="channel-val">{PROFILE.location} (Sẵn sàng làm tại văn phòng / Onsite)</span>
              </div>
            </Card>

            {/* Social Links Card */}
            <Card className="channel-socials-card">
              <h3 className="socials-card-title">Mạng xã hội & Hồ sơ lập trình</h3>
              <div className="socials-grid">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-channel-link"
                  >
                    <Icon name={item.id} size={20} />
                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.handle}</span>
                    </div>
                    <Icon name="external" size={14} className="social-channel-arrow" />
                  </a>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}

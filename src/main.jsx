import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { TransitionProvider } from './context/TransitionContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import './styles/global.css';

// Tự quản lý vị trí scroll khi chuyển trang (xem ScrollToTop)
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TransitionProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </TransitionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);


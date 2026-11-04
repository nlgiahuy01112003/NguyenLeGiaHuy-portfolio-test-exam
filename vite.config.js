import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Tách vendor để tận dụng cache trình duyệt giữa các lần deploy
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion') || id.includes('motion-')) return 'motion';
            if (id.includes('react-router')) return 'router';
            return 'vendor';
          }
        },
      },
    },
  },
});


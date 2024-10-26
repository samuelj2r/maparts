import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: mode === 'production' ? '0.0.0.0' : 'localhost',
    port: 5173,
  },
}));
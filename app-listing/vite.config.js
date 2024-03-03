import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-listing',
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom'],
      exposes: {
        './list': './src/App.jsx',
      },
    }),
  ],
  build: {
    target: 'ES2022',
  },
});

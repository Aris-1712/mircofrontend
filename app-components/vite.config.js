import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-components',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Button': './src/Components/Button.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'ES2022',
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app-base',
      filename: 'remoteEntry.js',
      remotes: {
        'app-components': 'http://localhost:3001/assets/remoteEntry.js',
        'app-listing': 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'ES2022',
  },
});

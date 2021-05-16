/// <reference types="./vite-config-types"/>

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginLinaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [reactRefresh(), VitePluginLinaria()],
  resolve: {
    alias: {
      ...(mode === 'production' && {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      }),
    },
  },
  build: {
    sourcemap: true,
  },
}));

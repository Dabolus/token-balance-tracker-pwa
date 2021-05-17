/// <reference types="./vite-config-types"/>

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginMacros from 'vite-plugin-babel-macros';
import VitePluginLinaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [reactRefresh(), VitePluginMacros(), VitePluginLinaria()],
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

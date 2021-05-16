/// <reference types="./vite-config-types"/>

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginLinaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), VitePluginLinaria()],
  build: {
    sourcemap: true,
  },
});

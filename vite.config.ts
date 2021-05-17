import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginMacros from 'vite-plugin-babel-macros';
import VitePluginLinaria from './plugins/linaria';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    reactRefresh(),
    VitePluginMacros(),
    VitePluginLinaria({
      exclude: /html/,
      sourceMap: true,
    }),
  ],
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

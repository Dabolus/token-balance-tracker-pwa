import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import { minifyHtml } from 'vite-plugin-html';
import VitePluginMacros from 'vite-plugin-babel-macros';
import VitePluginLinaria from './plugins/linaria';
import EjectManifest from './plugins/eject-manifest';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/token-balance-tracker/',
  plugins: [
    reactRefresh(),
    VitePluginMacros(),
    VitePluginLinaria({
      exclude: /html/,
      sourceMap: true,
    }),
    VitePWA(),
    EjectManifest(),
    minifyHtml(),
  ],
  resolve: {
    alias: {
      // ...(mode === 'production' && {
      //   react: 'preact/compat',
      //   'react-dom': 'preact/compat',
      // }),
    },
  },
  build: {
    sourcemap: true,
  },
}));

import path from 'path';
import { promises as fs } from 'fs';
import { Plugin, ResolvedConfig } from 'vite';

const EjectManifest = (): Plugin => {
  const manifestName = 'manifest.webmanifest';
  let config: ResolvedConfig;

  return {
    name: 'eject-manifest',
    enforce: 'post',
    apply: 'build',
    configResolved: viteConfig => {
      config = viteConfig;
    },
    transformIndexHtml: html =>
      html.replace(
        `<link rel="manifest" href="${path.join(config.base, manifestName)}">`,
        '',
      ),
    closeBundle: () => fs.rm(path.join(config.build.outDir, manifestName)),
  };
};

export default EjectManifest;

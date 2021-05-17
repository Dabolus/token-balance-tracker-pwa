import path from 'path';
import { createFilter, FilterPattern } from '@rollup/pluginutils';
import {
  transform,
  slugify,
  Preprocessor,
  PluginOptions,
} from '@linaria/babel-preset';

const runtimePublicPath = '/@linaria-cache/';

export interface VitePluginLinariaOptions extends Partial<PluginOptions> {
  include?: FilterPattern;
  exclude?: FilterPattern;
  sourceMap?: boolean;
  preprocessor?: Preprocessor;
}

const VitePluginLinaria = ({
  include = ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  exclude,
  sourceMap,
  preprocessor,
  ...rest
}: VitePluginLinariaOptions = {}): Plugin => {
  const filter = createFilter(include, exclude);
  const cssLookup = {};
  const lookupFilenames = {};
  const lookupFirstLoad = {};

  return {
    name: 'linaria',
    load: id => cssLookup[id],
    resolveId: importee => cssLookup[importee] && importee,
    transform: (code, id) => {
      if (
        !filter(id) ||
        id in cssLookup ||
        /^(?:.*[\\\/])?node_modules(?:[\\\/].*)?$/.test(id)
      )
        return;

      const result = transform(code, {
        filename: id,
        preprocessor,
        pluginOptions: rest,
      });

      if (!result.cssText) return;

      let { cssText } = result;
      const slug = slugify(cssText);

      const basename = path.basename(id);
      const filename = runtimePublicPath
        .concat(basename.replace(/(\.js|\.jsx|\.tsx|\.ts)$/, ''), '_')
        .concat(slug, '.css');

      if (sourceMap && result.cssSourceMapText) {
        const map = Buffer.from(result.cssSourceMapText).toString('base64');
        cssText += `/*# sourceMappingURL=data:application/json;base64,${map}*/`;
      }

      if (lookupFilenames[id]) {
        result.code += `\nimport { updateStyle } from "/@vite/client";\nupdateStyle('${id}', \`${cssText.trim()}\`);\n`;

        if (lookupFirstLoad[id]) {
          lookupFirstLoad[id] = false;
          result.code += `\nimport { removeStyle } from "/@vite/client";\nremoveStyle('${lookupFilenames[id]}');\n`;
        }

        delete cssLookup[lookupFilenames[id]];
      } else {
        result.code += `\nimport ${JSON.stringify(filename)};\n`;
        lookupFirstLoad[id] = true;
      }

      cssLookup[filename] = cssText;
      lookupFilenames[id] = filename;

      return { code: result.code, map: result.sourceMap };
    },
  } as any;
};

export default VitePluginLinaria;

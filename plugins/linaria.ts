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

      cssLookup[filename] = cssText;
      result.code += `\nimport ${JSON.stringify(filename)};\n`;

      return { code: result.code, map: result.sourceMap };
    },
  } as any;
};

export default VitePluginLinaria;

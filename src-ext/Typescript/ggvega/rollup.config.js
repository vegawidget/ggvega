import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export function disallowedImports() {
  return {
    resolveId: module => {
      if (module === 'vega' || module === 'util') {
        throw new Error('Cannot import from Vega or Node Util in Vega-Lite.');
      }
      return null;
    }
  };
}

export default {
  input: 'js/compile.js',
  output: {
    file: 'build/ggvega.js',
    format: 'umd',
    sourcemap: true,
    name: 'ggvega'
  },
  plugins: [disallowedImports(), nodeResolve({browser: true}), commonjs()]
};

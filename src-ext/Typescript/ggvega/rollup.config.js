import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'js/compile.js',
  output: {
    file: 'build/ggvega.js',
    format: 'umd',
    sourcemap: true,
    name: 'ggvega',
    exports: 'named' /** Disable warning for default imports */
  },
  plugins: [nodeResolve({browser: true}), commonjs(), json(), sourcemaps()]
};

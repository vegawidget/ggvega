import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  input: 'build/ggvega2/src/index.js',
  output: {
    file: 'build/ggvega.js',
    format: 'umd',
    sourcemap: true,
    name: 'ggvega'
  },
  plugins: [nodeResolve({browser: true}), commonjs(), json()]
};

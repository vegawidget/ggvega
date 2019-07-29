import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'build/ggvega/src/compile.js',
  output: {
    file: 'build/ggvega.js',
    format: 'umd',
    sourcemap: true,
    name: 'ggvega'
  },
  plugins: [nodeResolve({browser: true}), commonjs()]
};

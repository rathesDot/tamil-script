import packageJSON from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      exports: 'named',
      file: packageJSON.main,
      format: 'cjs',
    },
    {
      file: packageJSON.module,
      format: 'esm',
    },
  ],
};
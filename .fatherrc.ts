import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    input: 'components', // folder source utama
    output: 'es', // folder output untuk ESM
    platform: 'browser',
    transformer: 'babel',
  },
  
  // Build CommonJS output
  cjs: {
    input: 'components',
    output: 'lib', // folder output untuk CJS
    platform: 'browser',
    transformer: 'babel',
  },
  
  // Extra config seperti Ant Design
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'kui',
        libraryDirectory: '',
        style: true, // otomatis import less/css
      },
    ],
  ],
});

import typescript from './typescript.config.js';
import nodePlugin from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import {NODE_COMMON_RULES} from './shared.js';

export default [
  ...typescript,
  unicorn.configs.recommended,
  {
    plugins: {
      'n': nodePlugin,
    },
    languageOptions: {
      globals: {...globals.node},
    },
    rules: {
      ...nodePlugin.configs['flat/recommended-module'].rules,
      ...NODE_COMMON_RULES,
      'n/file-extension-in-import': ['error', 'never'],
    },
  },
];

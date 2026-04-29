import vanilla from './vanilla.config.js';
import nodePlugin from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
  ...vanilla,
  unicorn.configs.recommended,
  {
    plugins: {
      'n': nodePlugin,
    },
    languageOptions: {
      globals: {...globals.node},
    },
    rules: {
      // Override vanilla
      'no-console': ['warn', {allow: ['warn', 'error']}],

      // Node rules
      ...nodePlugin.configs['flat/recommended-module'].rules,
      'n/handle-callback-err': ['error', '^.*(e|E)rr'],
      'n/no-callback-literal': 'error',
      'n/no-path-concat': 'error',
      'n/no-process-exit': 'error',
      'n/callback-return': 'error',
      'n/file-extension-in-import': ['error', 'always'],
      'n/global-require': 'error',
      'n/no-mixed-requires': 'error',
      'n/prefer-global/buffer': ['error', 'never'],
      'n/prefer-global/console': ['error', 'always'],
      'n/prefer-global/crypto': ['error', 'never'],
      'n/prefer-global/process': ['error', 'never'],
      'n/prefer-global/text-decoder': ['error', 'never'],
      'n/prefer-global/text-encoder': ['error', 'never'],
      'n/prefer-global/timers': ['error', 'never'],
      'n/prefer-global/url': ['error', 'never'],
      'n/prefer-global/url-search-params': ['error', 'never'],
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'n/no-process-env': ['warn', {allowedVariables: ['NODE_ENV']}],
      'n/no-sync': 'error',
      'n/no-new-require': 'error',
      'n/no-hide-core-modules': 'error',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unsupported-features/es-builtins': 'off',
      'n/no-unsupported-features/node-builtins': 'off',

      // Unicorn — overrides on top of recommended
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-node-protocol': 'error',
    },
  },
];

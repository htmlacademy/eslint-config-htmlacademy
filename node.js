import vanilla from './vanilla.js';
import nodePlugin from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default [
  ...vanilla,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'n': nodePlugin,
      'unicorn': unicorn,
    },
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      // Override vanilla
      'no-console': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',

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
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/text-decoder': 'error',
      'n/prefer-global/text-encoder': 'error',
      'n/prefer-global/url-search-params': 'error',
      'n/prefer-global/url': 'error',
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unsupported-features/es-builtins': 'off',
      'n/no-unsupported-features/node-builtins': 'off',

      // Unicorn
      'unicorn/prefer-node-protocol': 'warn',

      // TypeScript
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-shadow': ['error', {hoist: 'all'}],
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    },
  },
];

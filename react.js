import vanilla from './vanilla.js';
import eslintReact from '@eslint-react/eslint-plugin';

export default [
  ...vanilla,
  eslintReact.configs.recommended,
  {
    rules: {
      // --- React best practices ---
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/no-access-state-in-setstate': 'error',
      '@eslint-react/no-useless-fragment': 'error',

      // --- JSX formatting (via @stylistic, already in plugins from vanilla) ---
      '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-newline': ['error', {multiline: 'consistent', singleline: 'consistent'}],
      '@stylistic/jsx-wrap-multilines': 'error',
    },
  },
];

import react from './react.js';
import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';

export default [
  ...react,
  eslintReact.configs['recommended-type-checked'],
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error', {hoist: 'all'}],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {args: 'after-used', argsIgnorePattern: '^_'}],
      '@typescript-eslint/no-useless-empty-export': 'warn',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];

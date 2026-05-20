import vanilla from './vanilla.config.js';
import tseslint from 'typescript-eslint';
import {UNUSED_VARS_OPTIONS} from './shared.js';

export default [
  ...vanilla,
  ...tseslint.config({
    files: ['**/*.{ts,tsx,mts,cts}'],
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-shadow': ['error', {hoist: 'all'}],
      '@typescript-eslint/no-unused-vars': ['error', UNUSED_VARS_OPTIONS],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'new-cap': ['error', {capIsNew: false}],
    },
  }),
];

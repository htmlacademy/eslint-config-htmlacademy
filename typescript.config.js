import vanilla from './vanilla.config.js';
import tseslint from 'typescript-eslint';

export default [
  ...vanilla,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
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
      '@typescript-eslint/no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'new-cap': ['error', {capIsNew: false}],
    },
  },
];

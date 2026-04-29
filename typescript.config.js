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
      // Disable base rules — TS-aware variants are configured below.
      'no-shadow': 'off',
      'no-unused-vars': 'off',

      // TS-aware overrides
      '@typescript-eslint/no-shadow': ['error', {hoist: 'all'}],
      '@typescript-eslint/no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      }],

      // Defensive TS best practices (not included in strict/stylistic presets)
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',

      // any-related rules downgraded to warn — gradual cleanup instead of blocking.
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // TS decorator pattern (NestJS / Angular / TypeORM): @PascalCase() is a function call, not a constructor.
      'new-cap': ['error', {capIsNew: false}],
    },
  },
];

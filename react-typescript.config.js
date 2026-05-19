import typescript from './typescript.config.js';
import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11y from '@htmlacademy/eslint-plugin-jsx-a11y';

export default [
  ...typescript,
  eslintReact.configs['recommended-type-checked'],
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // --- React extras (not in @eslint-react/recommended-type-checked) ---
      '@eslint-react/jsx-no-useless-fragment': 'error',
      '@eslint-react/dom-no-missing-button-type': 'warn',
      '@eslint-react/dom-no-missing-iframe-sandbox': 'warn',
      '@eslint-react/dom-no-unsafe-target-blank': 'warn',
      '@eslint-react/no-misused-capture-owner-stack': 'error',
      '@eslint-react/no-unstable-context-value': 'warn',
      '@eslint-react/no-unstable-default-props': 'warn',

      // --- JSX formatting (via @stylistic) ---
      '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-newline': ['error', {multiline: 'consistent', singleline: 'consistent'}],
      '@stylistic/jsx-wrap-multilines': 'error',
      '@stylistic/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
      '@stylistic/jsx-curly-spacing': ['error', {when: 'never'}],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-self-closing-comp': 'error',

      // --- File naming for components ---
      'check-file/filename-naming-convention': ['error', {
        '**/*.{js,ts}': 'KEBAB_CASE',
        '**/*.{jsx,tsx,vue}': 'PASCAL_CASE',
      }, {ignoreMiddleExtensions: true}],

      // --- TS-React extras ---
      '@typescript-eslint/no-useless-empty-export': 'warn',
    },
  },
];

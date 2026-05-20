import typescript from './typescript.config.js';
import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11y from '@htmlacademy/eslint-plugin-jsx-a11y';
import {REACT_COMMON_RULES} from './shared.js';

export default [
  ...typescript,
  eslintReact.configs['recommended-type-checked'],
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...REACT_COMMON_RULES,
      '@typescript-eslint/no-useless-empty-export': 'warn',
    },
  },
];

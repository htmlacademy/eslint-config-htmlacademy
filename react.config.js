import vanilla from './vanilla.config.js';
import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11y from '@htmlacademy/eslint-plugin-jsx-a11y';
import {REACT_COMMON_RULES} from './shared.js';

export default [
  ...vanilla,
  eslintReact.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...REACT_COMMON_RULES,
    },
  },
];

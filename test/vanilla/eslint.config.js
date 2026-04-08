import vanilla from '../../vanilla.js';

export default [
  ...vanilla,
  {
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      // Allow console in test files
      'no-console': 'off',
      // Disable file naming rules for test files
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
];

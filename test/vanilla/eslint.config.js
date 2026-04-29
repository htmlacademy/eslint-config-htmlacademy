import vanilla from '../../vanilla.config.js';

export default [
  ...vanilla,
  {
    rules: {
      // Allow console in test files
      'no-console': 'off',
      // Disable file naming rules for test files
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
];

import react from '../../react.config.js';

export default [
  ...react,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
  {
    files: ['**/bad-component.jsx'],
    rules: {
      'check-file/filename-naming-convention': ['error', {
        '**/*.{js,ts}': 'KEBAB_CASE',
        '**/*.{jsx,tsx,vue}': 'PASCAL_CASE',
      }, {ignoreMiddleExtensions: true}],
    },
  },
];

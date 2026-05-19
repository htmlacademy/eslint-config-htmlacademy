import reactTypescript from '../../react-typescript.config.js';

export default [
  ...reactTypescript,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
  {
    files: ['**/bad-component.tsx'],
    rules: {
      'check-file/filename-naming-convention': ['error', {
        '**/*.{js,ts}': 'KEBAB_CASE',
        '**/*.{jsx,tsx,vue}': 'PASCAL_CASE',
      }, {ignoreMiddleExtensions: true}],
    },
  },
];

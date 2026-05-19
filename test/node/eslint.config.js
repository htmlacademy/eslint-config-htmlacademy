import node from '../../node.config.js';

export default [
  ...node,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
  {
    files: ['**/BadFileName.js'],
    rules: {
      'check-file/filename-naming-convention': ['error', {'**/*.{js,ts}': 'KEBAB_CASE'}, {ignoreMiddleExtensions: true}],
    },
  },
];

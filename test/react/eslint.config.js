import react from '../../react.config.js';

export default [
  ...react,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
];

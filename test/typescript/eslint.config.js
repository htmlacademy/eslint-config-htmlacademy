import typescript from '../../typescript.config.js';

export default [
  ...typescript,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
];

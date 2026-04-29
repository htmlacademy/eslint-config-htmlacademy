import reactTypescript from '../../react-typescript.config.js';

export default [
  ...reactTypescript,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
];

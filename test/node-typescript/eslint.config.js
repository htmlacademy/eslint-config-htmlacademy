import nodeTypescript from '../../node-typescript.config.js';

export default [
  ...nodeTypescript,
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
];

import node from './node.config.js';

export default [
  ...node,
  {
    files: ['test/**/*.js'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
];

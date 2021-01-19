module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-console': 'error',
    // Stylistic Issues
    // https://eslint.org/docs/rules/#stylistic-issues
    // ---------------------------------------------
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'quotes': ['error', 'single'],
    // ECMAScript 6
    // https://eslint.org/docs/rules/#ecmascript-6
    // ---------------------------------------------
    'no-var': ['error'],
  },
};

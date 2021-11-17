module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-console': 'error',
    'no-template-curly-in-string': 'error',
    // Best Practices
    // https://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 'error',
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'no-alert': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-unused-expressions': 'error',
    'no-return-assign': 'error',
    'radix': 'error',
    // Strict Mode
    // https://eslint.org/docs/rules/#strict-mode
    'strict': ['error', 'global'],
    // Variables
    // https://eslint.org/docs/rules/#variables
    'no-shadow': ['error', {'hoist': 'all'}],
    'no-use-before-define': ['error', {'functions': false}],
    // Stylistic Issues
    // https://eslint.org/docs/rules/#stylistic-issues
    // ---------------------------------------------
    'camelcase': 'error',
    'eol-last': 'error',
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'lines-between-class-members': ['error', 'always', {'exceptAfterSingleLine': true}],
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'quotes': ['error', 'single'],
    'semi': 'error',
    'semi-style': 'error',
    // ECMAScript 6
    // https://eslint.org/docs/rules/#ecmascript-6
    // ---------------------------------------------
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  },
};

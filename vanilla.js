module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-template-curly-in-string': 'error',
    'no-use-before-define': ['error', {'functions': false}],
    // Suggestions
    // https://eslint.org/docs/rules/#suggestions
    // ---------------------------------------------
    'accessor-pairs': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'camelcase': 'error',
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'no-alert': 'error',
    'no-console': 'error',
    'no-nested-ternary': 'error',
    'no-return-assign': 'error',
    'no-shadow': ['error', {'hoist': 'all'}],
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'radix': 'error',
    'strict': ['error', 'global'],
    // Layout & Formatting
    // https://eslint.org/docs/rules/#layout-formatting
    // ---------------------------------------------
    'arrow-parens': 'error',
    'eol-last': 'error',
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'lines-between-class-members': ['error', 'always', {'exceptAfterSingleLine': true}],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single'],
    'semi': 'error',
    'semi-style': 'error',
    'space-infix-ops': 'error'
  },
};

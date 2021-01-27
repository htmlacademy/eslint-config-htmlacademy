module.exports = {
    extends: [`htmlacademy/es5`],
    rules: {
      'arrow-parens': [`error`, `always`],
      'constructor-super': `error`, // eslint:recommended
      'generator-star-spacing': [`error`, `after`],
      'no-new-symbol': `error`, // eslint:recommended
      'no-this-before-super': `error`, // eslint:recommended
      'prefer-rest-params': `error`,
      'prefer-spread': `error`,
      'rest-spread-spacing': `error`,
      'yield-star-spacing': [`error`, `after`],
      'no-var': `warn`,
      'object-shorthand': [`warn`, `always`, {'avoidQuotes': true}],
      'quotes': [`warn`, `backtick`]
    }
  };
  
module.exports = {
    rules: {
        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        'no-cond-assign': 'error', // eslint:recommended
        'no-irregular-whitespace': 'error', // eslint:recommended
        'no-unexpected-multiline': 'error', // eslint:recommended
        'valid-jsdoc': ['error', {
            requireParamDescription: false,
            requireReturn: false,
            prefer: {returns: 'return'}
        }],

        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------

        'guard-for-in': 'error',
        'no-caller': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-invalid-this': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new-wrappers': 'error',
        'no-throw-literal': 'error', // eslint:recommended
        'no-with': 'error',

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        'strict': 'error',

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        'no-unused-vars': ['error', {args: 'none'}], // eslint:recommended

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        'indent': ['error', 2, {SwitchCase: 1}], // Indent 2-spaces, in switch-case — 1 space TODO: discuss
        'block-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': 'error',
        'camelcase': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'off',
        'linebreak-style': 'error',
        'new-cap': 'error',
        'no-array-constructor': 'error',
        'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-new-object': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': 'error',
        'one-var': ['error', {
            var: 'never',
            let: 'never',
            const: 'never'
        }],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'consistent'],
        'quotes': ['error', 'single', {allowTemplateLiterals: true}],
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        'semi-spacing': 'error',
        'semi': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'spaced-comment': ['error', 'always'],
        'unicode-bom': 'warn',

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        'arrow-parens': ['error', 'always'], // TODO(philipwalton): technically arrow
                                       // parens are optional but recommended.
                                       // ESLint doesn't support a *consistent*
                                       // setting so "always" is used.
        'constructor-super': 'error', // eslint:recommended
        'generator-star-spacing': ['error', 'after'],
        'no-new-symbol': 'error', // eslint:recommended
        'no-this-before-super': 'error',  // eslint:recommended
        'no-var': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': 'error',
        'yield-star-spacing': ['error', 'after']
    }
};
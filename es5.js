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
            requireReturnDescription: false, //TODO: discuss
            requireReturn: false,
            prefer: {returns: 'return'}
        }],
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-keys': 'error',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', "functions"],
        'no-invalid-regexp': 'error',
        'no-unsafe-negation': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',

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
        'consistent-return': 'error',
        'curly': ['error', "all"],
        'eqeqeq': 'error',
        'no-alert': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error', //TODO: discuss
        'no-lone-blocks': 'error',
        'no-global-assign': 'error',
        'no-new': 'error', //TODO: discuss
        'no-new-func': 'error',
        'no-octal': 'error', //default
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error', //default
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-sequences': 'error',
        'no-unused-expressions': 'error',
        'radix': 'error',

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        'strict': ['error', 'global'],

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        'no-unused-vars': ['error', {args: 'none'}], // eslint:recommended
        'no-delete-var': 'error', //eslint:recommended
        'no-label-var': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error', //default
        'no-undef-init': 'error',
        'no-undefined': 'error',

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        'no-process-exit': 'error', //TODO: discuss

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        'indent': ['error', 2, {SwitchCase: 1}], // Indent 2-spaces, in switch-case — 1 space TODO: discuss
        'block-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': 'error',
        'camelcase': 'error',
        'comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
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
        'padded-blocks': ['off', 'never'], //TODO: should we require padded blocks?
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
        'new-parens': 'error',
        'no-nested-ternary': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {words: true, nonwords: false}],
        'yoda': ['error', "never"]
    }
};
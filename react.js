module.exports = {
    extends: ['htmlacademy/vanilla', 'plugin:react/recommended'],
    rules: {
        'react/no-array-index-key': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-unused-prop-types': ['error', {
            skipShapeProps: true,
        }],
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-newline': ['error', {
            multiline: 'consistent',
            singleline: 'consistent'
        }],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-wrap-multilines': 'error',
    }
}

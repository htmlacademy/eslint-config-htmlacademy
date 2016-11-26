// http://eslint.org/docs/rules/array-bracket-spacing.html
// http://eslint.org/docs/rules/object-curly-spacing.html
const [a, , c] = [1, 2, 3];
const {d, e} = {a: 1, b: 2};
const obj = {a, c, d, e};
throw new Error(a, c, d, e, obj);

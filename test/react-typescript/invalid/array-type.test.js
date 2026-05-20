import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / @typescript-eslint/array-type: Array<T> generic in props',
  preset: 'react-typescript',
  lang: 'tsx',
  code: `
export function ItemList({items}: {items: Array<string>}): JSX.Element {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
`,
  expected: [
    {rule: '@typescript-eslint/array-type'},
  ],
});

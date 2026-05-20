import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / @eslint-react/no-missing-key: list of elements without key',
  preset: 'react-typescript',
  lang: 'tsx',
  code: `
export const List = (): JSX.Element => <ul>{[1, 2, 3].map((item) => <li>{item}</li>)}</ul>;
`,
  expected: [
    {rule: '@eslint-react/no-missing-key'},
  ],
});

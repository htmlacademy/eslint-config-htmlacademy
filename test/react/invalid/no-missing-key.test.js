import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @eslint-react/no-missing-key: list of elements without key',
  preset: 'react',
  lang: 'jsx',
  code: `
export const List = () => [1, 2, 3].map((item) => <li>{item}</li>);
`,
  expected: [
    {rule: '@eslint-react/no-missing-key'},
  ],
});

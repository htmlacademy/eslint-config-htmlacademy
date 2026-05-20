import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @stylistic/jsx-curly-brace-presence: wrapping string prop in braces',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Heading = () => <h1 className={'title'}>Hello</h1>;
`,
  expected: [
    {rule: '@stylistic/jsx-curly-brace-presence'},
  ],
});

import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @eslint-react/dom-no-missing-button-type: button without type attribute',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Submit = () => <button>Send</button>;
`,
  expected: [
    {rule: '@eslint-react/dom-no-missing-button-type'},
  ],
});

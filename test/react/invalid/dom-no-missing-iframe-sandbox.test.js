import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react / @eslint-react/dom-no-missing-iframe-sandbox: iframe without sandbox',
  preset: 'react',
  lang: 'jsx',
  code: `
export const Frame = () => <iframe src="https://example.com" title="Example" />;
`,
  expected: [
    {rule: '@eslint-react/dom-no-missing-iframe-sandbox'},
  ],
});

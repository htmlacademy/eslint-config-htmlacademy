import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'react-typescript / @typescript-eslint/no-floating-promises: floating promise in event handler',
  preset: 'react-typescript',
  lang: 'tsx',
  code: `
async function track(): Promise<void> {
  await Promise.resolve();
}
export const Button = (): JSX.Element => <button type="button" onClick={() => { track(); }}>Send</button>;
`,
  expected: [
    {rule: '@typescript-eslint/no-floating-promises'},
  ],
});

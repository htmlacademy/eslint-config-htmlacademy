import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'typescript / @typescript-eslint/no-floating-promises: async call without await',
  preset: 'typescript',
  lang: 'ts',
  code: `
async function fetchData(): Promise<number> {
  return 1;
}
fetchData();
`,
  expected: [
    {line: 5, rule: '@typescript-eslint/no-floating-promises'},
  ],
});

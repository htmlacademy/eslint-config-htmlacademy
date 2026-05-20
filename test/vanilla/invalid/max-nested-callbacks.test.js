import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'vanilla / max-nested-callbacks: more than three levels of nesting',
  preset: 'vanilla',
  code: `
function run() {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          'too deep';
        }, 0);
      }, 0);
    }, 0);
  }, 0);
}
run();
`,
  expected: [
    {line: 6, rule: 'max-nested-callbacks'},
  ],
});

import {testRule} from '../../utils/test-rule.js';

testRule({
  description: 'node-typescript / valid: class with decorator',
  preset: 'node-typescript',
  lang: 'ts',
  code: `
function Injectable(): ClassDecorator {
  return (target) => target;
}

@Injectable()
export class UserService {
  greet(name: string): string {
    return \`hello, \${name}\`;
  }
}
`,
});

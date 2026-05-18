import {ESLint} from 'eslint';
import {readFileSync, readdirSync, statSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {test} from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));

const presets = [
  'vanilla',
  'typescript',
  'node',
  'node-typescript',
  'react',
  'react-typescript',
];

const EXPECTED_RE = /(?:\/\/|\{\/\*)\s*expected:\s*([\w@/-]+)/m;
const VALID_RE = /(?:\/\/|\{\/\*)\s*valid(?:\s*$|[\s*])/m;

for (const preset of presets) {
  const dir = join(here, preset);

  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    continue;
  }

  const configFile = join(dir, 'eslint.config.js');
  try {
    statSync(configFile);
  } catch {
    continue;
  }

  const eslint = new ESLint({overrideConfigFile: configFile});

  const fixtures = entries.filter((entry) => {
    if (entry === 'eslint.config.js') {
      return false;
    }
    if (entry === 'tsconfig.json') {
      return false;
    }
    if (entry.startsWith('.')) {
      return false;
    }
    return !statSync(join(dir, entry)).isDirectory();
  });

  for (const file of fixtures) {
    const path = join(dir, file);
    const content = readFileSync(path, 'utf8');
    const expectedMatch = content.match(EXPECTED_RE);
    const validMatch = content.match(VALID_RE);

    if (expectedMatch) {
      const expected = expectedMatch[1];
      test(`${preset}/${file} → ${expected}`, async () => {
        const [result] = await eslint.lintFiles([path]);
        const ruleIds = (result?.messages ?? [])
          .map((m) => m.ruleId)
          .filter(Boolean);

        if (!ruleIds.includes(expected)) {
          const got = ruleIds.length ? ruleIds.join(', ') : '(no rule violations)';
          throw new Error(`Expected "${expected}" to fire, got: ${got}`);
        }
      });
    } else if (validMatch) {
      test(`${preset}/${file} → valid`, async () => {
        const [result] = await eslint.lintFiles([path]);
        const violations = (result?.messages ?? [])
          .filter((m) => m.severity === 2 && m.ruleId);

        if (violations.length > 0) {
          const list = violations
            .map((m) => `  ${m.line}:${m.column}  ${m.ruleId}  ${m.message}`)
            .join('\n');
          throw new Error(`Expected no errors, got:\n${list}`);
        }
      });
    }
    // Файлы без директивы пропускаются (могут быть demo-кодом).
  }
}

import {ESLint} from 'eslint';
import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {test} from 'node:test';

const here = path.dirname(fileURLToPath(import.meta.url));

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
  const dir = path.join(here, preset);

  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    continue;
  }

  const configFile = path.join(dir, 'eslint.config.js');
  try {
    await stat(configFile);
  } catch {
    continue;
  }

  const eslint = new ESLint({overrideConfigFile: configFile});

  const fixtures = [];
  for (const entry of entries) {
    if (entry === 'eslint.config.js') {
      continue;
    }
    if (entry === 'tsconfig.json') {
      continue;
    }
    if (entry.startsWith('.')) {
      continue;
    }
    const stats = await stat(path.join(dir, entry));
    if (!stats.isDirectory()) {
      fixtures.push(entry);
    }
  }

  for (const file of fixtures) {
    const filepath = path.join(dir, file);
    const content = await readFile(filepath, 'utf8');
    const expectedMatch = content.match(EXPECTED_RE);
    const validMatch = content.match(VALID_RE);

    if (expectedMatch) {
      const expected = expectedMatch[1];
      test(`${preset}/${file} → ${expected}`, async () => {
        const [result] = await eslint.lintFiles([filepath]);
        const ruleIds = (result?.messages ?? [])
          .map((m) => m.ruleId)
          .filter(Boolean);

        if (!ruleIds.includes(expected)) {
          const got = ruleIds.length > 0 ? ruleIds.join(', ') : '(no rule violations)';
          throw new Error(`Expected "${expected}" to fire, got: ${got}`);
        }
      });
    } else if (validMatch) {
      test(`${preset}/${file} → valid`, async () => {
        const [result] = await eslint.lintFiles([filepath]);
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
  }
}

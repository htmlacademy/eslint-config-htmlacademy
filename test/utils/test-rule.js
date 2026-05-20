import {describe, it} from 'node:test';
import {strict as assert} from 'node:assert';
import {writeFile, rm, mkdir} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {ESLint} from 'eslint';

const EXTENSIONS = {
  js: 'js',
  jsx: 'jsx',
  ts: 'ts',
  tsx: 'tsx',
};

/**
 * Run the preset on a snippet of code and assert ESLint emits the expected
 * violations. Files are written to a per-preset sandbox so that type-aware
 * rules (which require files on disk for projectService) work.
 *
 * @param {Object} options
 * @param {string} options.description
 * @param {string} options.code
 * @param {Array<{ line?: number, rule: string, severity?: 'error'|'warning', message?: RegExp }>} [options.expected]
 *   Empty array (or omitted) means a valid scenario: no errors expected.
 * @param {string} options.preset — preset directory name under test/ (matches eslint.config.js location).
 * @param {'js'|'jsx'|'ts'|'tsx'} [options.lang='js']
 * @param {string} [options.filename] — explicit filename (e.g. for check-file tests).
 */
export function testRule({description, code, expected = [], preset, lang = 'js', filename}) {
  describe(description, () => {
    it('matches preset expectations', async () => {
      const here = path.dirname(fileURLToPath(import.meta.url));
      const presetDir = path.join(here, '..', preset);
      const sandboxDir = path.join(presetDir, '__sandbox__');
      await mkdir(sandboxDir, {recursive: true});

      const ext = EXTENSIONS[lang] ?? 'js';
      const file = filename ?? `probe-${randomUUID()}.${ext}`;
      const filepath = path.join(sandboxDir, file);

      const eslint = new ESLint({
        overrideConfigFile: path.join(presetDir, 'preset.config.js'),
      });

      try {
        await writeFile(filepath, code, 'utf8');
        const [result] = await eslint.lintFiles([filepath]);
        const got = (result?.messages ?? []).map((m) => ({
          line: m.line,
          rule: m.ruleId,
          severity: m.severity === 2 ? 'error' : 'warning',
          text: m.message,
        }));

        const summary = got.length === 0
          ? '  (no messages)'
          : got.map((m) => `  ${m.line}:${m.rule}  [${m.severity}]  ${m.text}`).join('\n');

        if (expected.length === 0) {
          const errors = got.filter((m) => m.severity === 'error');
          assert.equal(
            errors.length,
            0,
            `Expected a valid snippet, got errors:\n${summary}`,
          );
          return;
        }

        for (const exp of expected) {
          const match = got.find(
            (m) =>
              m.rule === exp.rule &&
              (exp.line === undefined || m.line === exp.line) &&
              (!exp.severity || m.severity === exp.severity) &&
              (!exp.message || exp.message.test(m.text)),
          );

          assert.ok(
            match,
            `Expected ${exp.line ?? '*'}:${exp.rule}${exp.severity ? ` (${exp.severity})` : ''} — not found.\nGot:\n${summary}`,
          );
        }
      } finally {
        await rm(filepath, {force: true});
      }
    });
  });
}

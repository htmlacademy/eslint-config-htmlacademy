// expected: n/prefer-promises/fs
import fs from 'node:fs';

export const read = (path) => {
  fs.readFile(path, () => {});
};

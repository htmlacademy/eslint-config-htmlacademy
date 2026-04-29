// valid
import {readFile} from 'node:fs/promises';
import {Buffer} from 'node:buffer';

export async function loadJson(path) {
  const data = await readFile(path, 'utf8');
  const buffer = Buffer.from(data);
  console.warn(`Loaded ${buffer.length} bytes from ${path}`);
  return JSON.parse(data);
}

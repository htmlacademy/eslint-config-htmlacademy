// expected: @typescript-eslint/consistent-type-imports
import {Buffer} from 'node:buffer';
export function describe(buffer: Buffer): string {
  return typeof buffer;
}

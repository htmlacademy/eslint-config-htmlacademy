// valid
import type {Buffer} from 'node:buffer';

export function describe(buffer: Buffer): string {
  const items: number[] = [1, 2, 3];
  const total: number = items.reduce((sum, item) => sum + item, 0);
  return `${String(buffer.length)} bytes, total ${String(total)}`;
}

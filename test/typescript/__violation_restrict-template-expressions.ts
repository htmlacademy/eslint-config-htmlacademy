// expected: @typescript-eslint/restrict-template-expressions
export function describe(items: number[]): string {
  return `count: ${items}`;
}

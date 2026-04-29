// expected: @typescript-eslint/prefer-nullish-coalescing
export function withDefault(value: string | null): string {
  return value || 'fallback';
}

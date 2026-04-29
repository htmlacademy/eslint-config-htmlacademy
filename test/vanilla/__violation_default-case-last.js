// expected: default-case-last
export function describe(value) {
  switch (value) {
    default:
      return 'unknown';
    case 1:
      return 'one';
  }
}

// expected: no-else-return
export function classify(value) {
  if (value > 0) {
    return 'positive';
  } else {
    return 'non-positive';
  }
}

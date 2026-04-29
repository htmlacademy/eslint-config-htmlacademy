// expected: @typescript-eslint/no-floating-promises
async function fetchData(): Promise<number> {
  return 1;
}
fetchData();

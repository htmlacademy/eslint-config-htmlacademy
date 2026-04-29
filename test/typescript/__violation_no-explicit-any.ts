// expected: @typescript-eslint/no-explicit-any
function unsafe(value: any): unknown {
  return value;
}
console.log(unsafe(1));

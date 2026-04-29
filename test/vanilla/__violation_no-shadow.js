// expected: no-shadow
const value = 1;
function inner() {
  const value = 2;
  return value;
}
console.log(inner(), value);

// expected: eqeqeq
const value = 1;
if (value == 1) {
  throw new Error('loose equality is forbidden');
}

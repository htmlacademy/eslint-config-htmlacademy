// expected: array-callback-return
const items = [1, 2, 3];
const doubled = items.map((item) => {
  item * 2;
});
console.log(doubled);

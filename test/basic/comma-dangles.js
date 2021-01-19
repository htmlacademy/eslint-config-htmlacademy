const arr0 = ['a', 'b', 'c'];
const arr1 = [
  'a',
  'b',
  'c',
];

const obj0 = {q: 'q', w: 'w'};
const obj1 = {
  q: 'q',
  w: 'w',
};

const func0 = (a, b) => {
  return a + b;
};
const func1 = (
  a,
  b,
) => {
  return a + b;
};

func0(
  obj0.a,
  obj0.b,
);

throw new Error(arr0, arr1, obj0, obj1, func0, func1);

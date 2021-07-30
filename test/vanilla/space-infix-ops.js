const foo = 1 + 2;
const bar = foo > 3 ? 3 : 3;

throw new Error(foo, bar);

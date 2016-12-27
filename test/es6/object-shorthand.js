const x = 5;
const y = 5;
const z = 6;

// properties
const foo = {x, y, z};

// methods
const bar = {
  a() {
  },
  b() {
  },
  [z]() {
    return z;
  },
  [`zxv`]() {
    return `vla`;
  }
};

throw new Error(foo, bar);

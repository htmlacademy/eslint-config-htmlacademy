const a = '';

() => {};

(a) => {return a;};

(a) => a;

(a) => {
  return `${a} \n`;
};

a.then((foo) => {
  return foo;
});

a.then((foo) => {
  if (foo === true) {
    return foo;
  }
});

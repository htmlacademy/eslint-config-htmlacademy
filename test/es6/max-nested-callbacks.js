const bar = (callback) => {
  foo(callback);
};

const foo = (callback) => {
  bar(callback);
};

bar(() => {
  foo(() => {
    bar(() => {
      // maximum
    });
  });
});

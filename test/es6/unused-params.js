const bar = (param2) => {
  return param2;
};

const foo = () => {
  bar();
};

const myObject = {
  method1() {
    return `12`;
  },
  methodWithIgnoredParam(_ignore) {
    return 42;
  }
};

bar(function () {
  foo(function () {
    myObject.method1();
    myObject.methodWithIgnoredParam(122);
  });
});

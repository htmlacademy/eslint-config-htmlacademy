let foo = 0;
let bar = ++foo;
const baz = bar--;
const fooBar = +baz;
const barBaz = -fooBar;
const bazFoo = !barBaz;
const fooBarBaz = !!bazFoo;

class Foo {
  constructor(value) {
    this.value = value;
  }
}

const fooInstance = new Foo(fooBarBaz);

delete fooInstance.value;

typeof fooInstance;

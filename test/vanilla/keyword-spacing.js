const foo = true;
const bar = false;
const baz = () => foo && bar;

if (foo) {
  baz();
} else if (bar) {
  baz();
} else {
  baz();
}

while (foo) {
  baz();
}

do {
  baz();
} while (bar);

for (const fooBar of [foo, bar]) {
  if (fooBar) {
    continue;
  } else {
    break;
  }
}

switch (foo || bar) {
  default:
    break;
}

try {
  baz();
} catch (error) {
  baz();
} finally {
  baz();
}

class Foo {
  get foo() {
    return this._foo;
  }

  set foo(value) {
    this._foo = value;
  }
}

class Bar extends Foo {
  static create() {
    return new Bar();
  }
}

throw new Error(Bar.create());

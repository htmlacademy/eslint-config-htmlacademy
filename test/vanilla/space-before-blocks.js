function bar() {}

const foo = true;
if (foo) {
  bar();
}

for (const baz of [bar]) {
  baz();
}

try {
  bar();
} catch (error) {
  bar();
}

class Foo {
  baz() {
    return bar();
  }
}

throw new Error(Foo);

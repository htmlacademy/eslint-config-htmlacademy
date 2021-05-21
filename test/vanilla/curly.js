const isTrue = true;

const doSomething = () => {};
const doSomethingElse = () => {};

let counter = 1;

if (isTrue) {
  counter++;
}

while (isTrue) {
  doSomething(counter);
}

if (isTrue) {
  doSomething();
} else {
  doSomethingElse();
}

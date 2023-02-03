const isTrue = true;

const doSomething = () => {};
const doSomethingElse = () => {};
const doDefault = () => {};

function getNumberFive() {
  return 5;
}

function getFunction() {
  return () => {};
}

function doSomethingWithIf() {
  if (isTrue) {
    doSomething();
    return;
  } else {
    doSomethingElse();
  }
  doDefault();
}

function doSomethingWithSwitch() {
  switch (isTrue) {
    case 1:
      doSomething();
      return;
    default:
      doSomethingElse();
  }
}

function doSomethingWithArray() {
  const numbers = [1, 2, 3];
  for (const number of numbers) {
    if (number === 1) {
      return number;
    }
  }
}

throw new Error(getNumberFive, getFunction, doSomethingWithIf, doSomethingWithSwitch, doSomethingWithArray);

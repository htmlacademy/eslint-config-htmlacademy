const letter = 'a';

const doSomething = () => {};

const doSomethingElse = (template) => template;

const checkEnything = () => {
  doSomething();
};

const checkEnythingInline = () => {
  doSomething(); doSomethingElse();
};

const checkEnythingMultiline = () => {
  doSomething();
  doSomethingElse();
};

throw new Error (letter, checkEnything, checkEnythingInline, checkEnythingMultiline);

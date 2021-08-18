const fn1 = () => {};

const fn2 = (anything) => anything;

const fn3 = (anything) => {
  anything++;
  return anything;
};

const fn4 = (anything) => `${anything} \n`;

const emptyString = '';

emptyString.then((anything) => {
  anything = `${anything}!`;
  return anything;
});

emptyString.then((anything) => {
  if (typeof anything === 'string') {
    return anything;
  }
});

throw new Error(fn1, fn2, fn3, fn4);

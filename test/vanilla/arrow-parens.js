() => {};

(anything) => anything;

(anything) => {
  anything++;
  return anything;
};

(anything) => `${anything} \n`;

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

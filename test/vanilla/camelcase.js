const textColor = '#112C85';
const _textColor = '#112C85';
const textColor_ = '#112C85';
const TEXT_COLOR = '#112C85';

const objectSample = {
  key: 'key',
};

const doSomething = () => {};

function DoSomething() {}

const value = objectSample.key;
const instance = {
  value: objectSample.key,
};

objectSample.do_something ();
objectSample.doSomething ();
doSomething ();
const doSomethingInstance = new DoSomething ();

const categoryItem = {
  categoryId: '001',
  isCategory: true,
};
const {categoryId: categoryExample} = categoryItem;

function doSomethingFirst({isCamelCasedInnerScore}) {
  return isCamelCasedInnerScore;
}

function doSomethingSecond({isCamelCased: isAlsoCamelCased}) {
  return isAlsoCamelCased;
}

function doSomethingThird({isCamelCasedInnerScore = 'default value'}) {
  return isCamelCasedInnerScore;
}

const {categoryId = 1} = categoryItem;

const {isCategory: isCamelCased} = categoryItem;

const {isCategory: isCamelCasedOther = true} = categoryItem;

throw new Error (textColor, _textColor, textColor_, TEXT_COLOR, value, instance, doSomethingInstance, categoryExample, doSomethingFirst, doSomethingSecond, doSomethingThird, isCamelCased, isCamelCasedOther, categoryId);

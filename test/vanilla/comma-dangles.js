const characters = ['a', 'b', 'c'];
const letters = [
  'a',
  'b',
  'c',
];

const category = {id: 0, name: 'office'};
const product = {
  id: 0,
  categoryId: 0,
  name: 'table',
};

const matchesCategory = (categoryItem, productItem) => categoryItem.id === productItem.categoryId;

const includesPattern = (
  productName,
  pattern,
) => (typeof productName === 'string' && productName.includes(pattern));

matchesCategory(
  category,
  product,
);

throw new Error(characters, letters, includesPattern);

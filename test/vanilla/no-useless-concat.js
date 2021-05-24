const price = 100;
const discount = 50;
const count = 5;

const fullPrice = price - discount;
const discountMessage = `Discount is ${price * (discount / 100)}%`;
const fullPriceMessage = `${fullPrice}  - FULL price!`;
const countAfterBuy = count - 1;
const countAfterRefund = count + 1;

// when the string concatenation is multiline
const fullMessage = 'It' +
  'will' +
  'make you happy!';

throw new Error(discountMessage, fullPriceMessage, countAfterBuy, countAfterRefund, fullMessage);

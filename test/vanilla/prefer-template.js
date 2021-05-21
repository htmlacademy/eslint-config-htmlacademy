const nameOfPerson = 'Name';

const message = 'Hello World!';
const messageWithName = `Hello, ${nameOfPerson}!`;
const messageWithCalculate = `Time: ${12 * 60 * 60 * 1000}`;

throw new Error(message, messageWithName, messageWithCalculate);

const a = 'Anything string';
const b = `Anything
string`;
const c = `This's a ${a}`;

throw new Error(a, b, c);

const summandA = 1;
const summandB = 2;
const summandC = 3;

let sumA = summandA + summandB;
sumA = summandB + summandA ;

const resultA = summandA ? summandB : summandC;

let resultB = {b: 1};
resultB = {c: 1};

const {keyC = 0} = resultA;
const {keyD = 0} = resultA;

function someFunctionA(parameterA = 0) {
  return parameterA;
}

function someFunctionB(parameterA = 0) {
  return parameterA;
}

Math.floor(Math.random() * (summandC - summandA) + summandA);
Math.floor(Math.random() * (summandC - summandA) + summandA);

throw new Error(
  summandA,
  summandB,
  sumA,
  resultA,
  resultB,
  keyC,
  keyD,
  someFunctionA,
  someFunctionB
);

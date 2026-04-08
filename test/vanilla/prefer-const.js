for (const number in [1, 2]) {
  if (Object.hasOwn ([1, 2], number)) {
    throw new Error (number);
  }
}

for (const number of [1, 2]) {
  throw new Error (number);
}

for (let number = 0, end = 2; number < end; ++number) {
  throw new Error (number);
}

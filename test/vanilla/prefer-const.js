for (const num in [1, 2]) {
  throw new Error(num);
}

for (const num of [1, 2]) {
  throw new Error(num);
}

for (let num = 0, end = 2; num < end; ++num) {
  throw new Error(num);
}

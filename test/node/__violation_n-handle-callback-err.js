// expected: n/handle-callback-err
export function load(cb) {
  cb(null, 'data');
}

load((err, value) => {
  console.warn(value);
});

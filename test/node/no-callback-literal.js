const dataMock = {
  title: 'data object',
  payload: 'data'
};

const cb = (payload) => payload;
const callback = (payload) => payload;

// If you functioin is named `cb` or `callback`
// you should invoked that functions with a first argument that is
// undefined, null, an Error class, or a subclass or Error.
cb(undefined);
cb(null, 5);
callback(new Error('some error'));
callback(dataMock);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// cb('this is an error string');
// cb({ a: 1 });
// callback(0);


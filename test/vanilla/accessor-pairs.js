const objectSample = {
  set key(value) {
    this.valueThisObject = value;
  },
  get key() {
    return this.valueThisObject;
  },
};

const objectSampleOther = {key: 1};

Object.defineProperty(objectSampleOther, 'anythingString', {
  set: function(value) {
    this.valueThisObject = value;
  },
  get: function() {
    return this.valueThisObject;
  },
});

throw new Error(objectSample);

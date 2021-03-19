const func0 = (fun) => fun();

// arrow function callback
func0((a) => a);

func0((a) => {
  return a;
});

// generator as callback
func0(function*() { yield; });

// function expression not used as callback or function argument
const func1 = function foo(a) {
  return a;
};

// recursive named function callback
func0(function bar(n) {
  return n && n + bar(n - 1);
});

// Default: { allowNamedFunctions: false, allowUnboundThis: true }
// 'allowUnboundThis': true, gives access to use next espressions

// unbound function expression callback
func0(function() {
  return this.a;
});

func0(function() {
  this.a;
});

func0(function() {
  (() => this);
});

const someObject = {};

[].map(function(item) {
  return this.doSomething(item);
}, someObject);

throw new Error(func0, func1);

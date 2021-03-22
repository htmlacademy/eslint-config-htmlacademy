const a = 'a';

const func0 = () => { return; };

const func1 = (a) => a;

const func2 = () => { func0(); };

const func3 = () => { func0(); func1(); };

const func4 = () => {
  func0();
  func1();
};

throw new Error (a, func0, func1, func2, func3, func4);

// expected: @eslint-react/no-missing-key
export const List = () => [1, 2, 3].map((item) => <li>{item}</li>);

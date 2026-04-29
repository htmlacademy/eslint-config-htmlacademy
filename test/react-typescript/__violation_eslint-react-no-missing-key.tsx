// expected: @eslint-react/no-missing-key
export const List = (): JSX.Element => <ul>{[1, 2, 3].map((item) => <li>{item}</li>)}</ul>;

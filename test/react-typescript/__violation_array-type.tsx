// expected: @typescript-eslint/array-type
export function ItemList({items}: {items: Array<string>}): JSX.Element {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

// expected: @typescript-eslint/no-floating-promises
async function track(): Promise<void> {
  await Promise.resolve();
}
export const Button = (): JSX.Element => <button type="button" onClick={() => { track(); }}>Send</button>;

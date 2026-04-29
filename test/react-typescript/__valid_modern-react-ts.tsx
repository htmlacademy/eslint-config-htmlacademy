// valid
import type {ReactNode} from 'react';

interface BoxProps {
  children: ReactNode;
  title: string;
}

export function Box({children, title}: BoxProps): JSX.Element {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

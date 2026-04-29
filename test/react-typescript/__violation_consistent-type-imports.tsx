// expected: @typescript-eslint/consistent-type-imports
import {ReactNode} from 'react';
export const Box = (props: {children: ReactNode}) => <div>{props.children}</div>;

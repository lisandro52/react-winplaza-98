import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
    active?: boolean;
    focused?: boolean;
    children: string;
}
declare const Button: ({ active, children, className, focused, ...buttonProps }: ButtonProps) => React.JSX.Element;

export { Button };

import React from 'react';
export interface ButtonProps extends React.ComponentProps<'button'> {
    children: string;
}
export declare const Button: ({ children, ...buttonProps }: ButtonProps) => JSX.Element;
export default Button;

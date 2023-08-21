import React from 'react';
import './button.scss';
export interface ButtonProps extends React.ComponentProps<'button'> {
    active?: boolean;
    focused?: boolean;
    children: string;
}
export declare const Button: ({ active, children, className, focused, ...buttonProps }: ButtonProps) => React.JSX.Element;
export default Button;

import React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: string;
}

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;

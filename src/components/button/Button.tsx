import React from 'react';
import '98.css';

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: string;
}

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps}>{children}</button>;
};

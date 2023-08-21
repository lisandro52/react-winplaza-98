import clsx from 'clsx';
import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ComponentProps<'button'> {
  active?: boolean;
  focused?: boolean;
  children: string;
}

export const Button = ({
  active,
  children,
  className,
  focused,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={clsx(className, active && 'active', focused && 'focused')}
    >
      {children}
    </button>
  );
};

export default Button;

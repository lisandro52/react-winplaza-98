import clsx from 'clsx';
import React from 'react';
import './button.scss';

export interface ButtonProps extends React.ComponentProps<'button'> {
  active?: boolean;
  focused?: boolean;
  children: string;
}

const Button = ({
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

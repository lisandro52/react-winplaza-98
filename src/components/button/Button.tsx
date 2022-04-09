import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import '98.css';

export interface ButtonProps {
  buttonHTMLAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
  children: string;
}

export const Button = ({
  className,
  disabled,
  onClick,
  buttonHTMLAttributes,
  children,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...buttonHTMLAttributes}
    >
      {children}
    </button>
  );
};

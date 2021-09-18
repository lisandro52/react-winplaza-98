import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import "98.css";

export interface ButtonProps {
  label: string;
  buttonHTMLAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export const Button = ({
  className,
  disabled,
  label,
  onClick,
  buttonHTMLAttributes
}: ButtonProps) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick} {...buttonHTMLAttributes}>
      {label}
    </button>
  );
};

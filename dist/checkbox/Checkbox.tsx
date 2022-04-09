import React, { InputHTMLAttributes } from 'react';

export interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  inputHTMLAttributes?: InputHTMLAttributes<HTMLInputElement>;
}

const Checkbox = ({
  id,
  label,
  checked,
  disabled,
  name,
  inputHTMLAttributes,
}: CheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        id={id}
        {...inputHTMLAttributes}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;

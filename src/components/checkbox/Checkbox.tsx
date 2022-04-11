import React from 'react';

export interface CheckboxProps extends React.ComponentProps<'input'> {
  id: string;
  label: string;
}

const Checkbox = ({
  id,
  label,
  ...inputHTMLAttributes
}: CheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        {...inputHTMLAttributes}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;

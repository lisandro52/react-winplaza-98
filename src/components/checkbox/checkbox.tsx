import React, { forwardRef } from 'react';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  id: string;
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...inputProps }: CheckboxProps, ref) => {
    return (
      <>
        <input type="checkbox" id={id} {...inputProps} ref={ref} />
        <label htmlFor={id}>This is a checkbox</label>
      </>
    );
  }
);

export default Checkbox;

import clsx from 'clsx';
import React, { forwardRef } from 'react';

type OmitProperties = 'type' | 'id' | 'name';

interface TextBoxProps
  extends Omit<React.ComponentProps<'input'>, OmitProperties> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  id: string;
  label?: string;
  labelPosition?: 'left' | 'top';
}

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      type = 'text',
      id,
      label,
      labelPosition = 'left',
      className,
      ...inputProps
    }: TextBoxProps,
    ref
  ) => {
    return (
      <div
        className={clsx(className, {
          'field-row': labelPosition === 'left',
          'field-row-stacked': labelPosition === 'top',
        })}
      >
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type={type} {...inputProps} />
      </div>
    );
  }
);

export default TextBox;

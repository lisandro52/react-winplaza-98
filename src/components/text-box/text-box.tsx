import clsx from 'clsx';
import React, { forwardRef, useId } from 'react';

type OmitProperties = 'type' | 'id';

interface TextBoxProps
  extends Omit<React.ComponentProps<'input'>, OmitProperties> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  name: string;
  label?: string;
  labelPosition?: 'left' | 'top';
}

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      type = 'text',
      name,
      label,
      labelPosition = 'left',
      className,
      ...inputProps
    }: TextBoxProps,
    ref
  ) => {
    const inputId = useId();
    return (
      <div
        className={clsx(className, {
          'field-row': labelPosition === 'left',
          'field-row-stacked': labelPosition === 'top',
        })}
      >
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} name={name} type={type} {...inputProps} />
      </div>
    );
  }
);

export default TextBox;

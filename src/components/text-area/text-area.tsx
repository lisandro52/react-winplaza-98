import clsx from 'clsx';
import React, { forwardRef } from 'react';

type OmitProperties = 'id' | 'name';

interface TextAreaProps
  extends Omit<React.ComponentProps<'textarea'>, OmitProperties> {
  id: string;
  label?: string;
  labelPosition?: 'left' | 'top';
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      label,
      labelPosition = 'top',
      className,
      ...inputProps
    }: TextAreaProps,
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
        <textarea id={id} name={id} {...inputProps} />
      </div>
    );
  }
);

export default TextArea;

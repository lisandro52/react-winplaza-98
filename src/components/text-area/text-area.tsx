import clsx from 'clsx';
import React, { forwardRef, useId } from 'react';

type OmitProperties = 'id' | 'name';

interface TextAreaProps
  extends Omit<React.ComponentProps<'textarea'>, OmitProperties> {
  name: string;
  label?: string;
  labelPosition?: 'left' | 'top';
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      label,
      labelPosition = 'top',
      className,
      ...inputProps
    }: TextAreaProps,
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
        <textarea ref={ref} id={inputId} name={name} {...inputProps} />
      </div>
    );
  }
);

export default TextArea;

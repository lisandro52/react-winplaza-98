import clsx from 'clsx';
import React, { forwardRef, useId } from 'react';

type OmitProperties =
  | 'type'
  | 'id'
  | 'min'
  | 'max'
  | 'defaultChecked'
  | 'value'
  | 'onChange';

interface SliderProps
  extends Omit<React.ComponentProps<'input'>, OmitProperties> {
  name: string;
  label?: string;
  minLabel?: string;
  maxLabel?: string;
  min: number;
  max: number;
  boxIndicator?: boolean;
  vertical?: boolean;
  value?: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      name,
      label,
      minLabel,
      maxLabel,
      min,
      max,
      className,
      boxIndicator = false,
      vertical = false,
      onChange,
      ...inputProps
    }: SliderProps,
    ref
  ) => {
    const inputId = useId();

    return (
      <div className="field-row">
        <label htmlFor={`${inputId}-label`}>{label}</label>
        {minLabel && <label htmlFor={inputId}>{minLabel}</label>}
        <div className={clsx(vertical && 'is-vertical')}>
          <input
            {...inputProps}
            ref={ref}
            onChange={(event) => {
              onChange?.(event, Number(event.target.value));
            }}
            className={clsx(className, {
              'has-box-indicator': boxIndicator,
            })}
            id={inputId}
            name={name}
            type="range"
            min={min}
            max={max}
          />
        </div>
        {maxLabel && <label htmlFor={`${inputId}-high`}>{maxLabel}</label>}
      </div>
    );
  }
);

export default Slider;

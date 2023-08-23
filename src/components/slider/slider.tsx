import clsx from 'clsx';
import React from 'react';

type OmitProperties =
  | 'type'
  | 'name'
  | 'min'
  | 'max'
  | 'defaultChecked'
  | 'value'
  | 'onChange';

interface SliderProps
  extends Omit<React.ComponentProps<'input'>, OmitProperties> {
  id: string;
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

const Slider = ({
  id,
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
}: SliderProps) => {
  return (
    <div className="field-row">
      <label htmlFor={`${id}-label`}>{label}</label>
      {minLabel && <label htmlFor={id}>{minLabel}</label>}
      <div className={clsx(vertical && 'is-vertical')}>
        <input
          {...inputProps}
          onChange={(event) => {
            onChange?.(event, Number(event.target.value));
          }}
          className={clsx(className, {
            'has-box-indicator': boxIndicator,
          })}
          id={id}
          name={id}
          type="range"
          min={min}
          max={max}
        />
      </div>
      {maxLabel && <label htmlFor={`${id}-high`}>{maxLabel}</label>}
    </div>
  );
};

export default Slider;

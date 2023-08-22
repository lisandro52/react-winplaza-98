import React, { useId } from 'react';
import { useOptionContext } from './option-context';

type OmitProps =
  | 'type'
  | 'onChange'
  | 'checked'
  | 'defaultChecked'
  | 'defaultValue'
  | 'id'
  | 'name';

interface OptionButtonProps
  extends Omit<React.ComponentProps<'input'>, OmitProps> {
  label: string;
  value: string;
}

const OptionButton = ({ label, ...inputProps }: OptionButtonProps) => {
  const inputId = useId();
  const { id, value, onChange, defaultValue } = useOptionContext();

  return (
    <div className="field-row">
      <input
        id={inputId}
        type="radio"
        name={id}
        {...inputProps}
        defaultChecked={
          defaultValue ? defaultValue === inputProps.value : undefined
        }
        checked={value ? value === inputProps.value : undefined}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
};

export default OptionButton;

import React from 'react';

export interface TextBoxProps extends React.ComponentProps<'input'> {
  id: string;
  label?: string;
  stacked?: boolean;
}

export const TextBox = ({
  id,
  label,
  stacked = false,
  style,
  ...inputProps
}: TextBoxProps) => {
  return (
    <div className={stacked ? 'field-row-stacked' : 'field-row'} style={style}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...inputProps} />
    </div>
  );
};

export default TextBox;

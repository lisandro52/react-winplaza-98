import React from 'react';

export interface TextBoxProps {
  id: string;
  label?: string;
  stacked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const TextBox = ({
  id,
  label,
  stacked = false,
  disabled,
  style,
}: TextBoxProps) => {
  return (
    <div className={stacked ? 'field-row-stacked' : 'field-row'} style={style}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" disabled={disabled} />
    </div>
  );
};

export default TextBox;

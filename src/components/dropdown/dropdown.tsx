import React from 'react';

interface DropdownOptionProps
  extends Omit<React.ComponentProps<'option'>, 'selected'> {
  value: string | number;
  children: React.ReactNode;
}

const DropdownOption = ({ children, ...optionProps }: DropdownOptionProps) => {
  return <option {...optionProps}>{children}</option>;
};

interface DropdownProps extends React.ComponentProps<'select'> {
  id: string;
  label?: string;
}

const Dropdown = ({ id, label, children, ...selectProps }: DropdownProps) => {
  return (
    <select id={id} {...selectProps}>
      {children}
    </select>
  );
};

Dropdown.Option = DropdownOption;

export default Dropdown;

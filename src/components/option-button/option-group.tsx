import React from 'react';
import { OptionContext } from './option-context';

interface OptionGroupProps {
  id: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

const OptionGroup = (props: OptionGroupProps) => {
  return (
    <OptionContext.Provider value={props}>
      {props.children}
    </OptionContext.Provider>
  );
};

export default OptionGroup;

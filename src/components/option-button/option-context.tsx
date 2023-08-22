import React, { createContext, useContext } from 'react';

interface OptionContextProps {
  id: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const OptionContext = createContext<OptionContextProps | undefined>(
  undefined
);

export const useOptionContext = (): OptionContextProps => {
  const context = useContext(OptionContext);
  if (context === undefined) {
    throw new Error(
      'The OptionButton compound components cannot be rendered outside the OptionGroup component'
    );
  }
  return context;
};

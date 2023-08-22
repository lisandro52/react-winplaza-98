import React from 'react';

interface GroupBoxProps {
  label?: string;
  children: React.ReactNode;
}

const GroupBox = ({ label, children }: GroupBoxProps) => {
  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      {children}
    </fieldset>
  );
};

export default GroupBox;

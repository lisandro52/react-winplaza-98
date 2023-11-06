import React from 'react';

interface GroupBoxProps {
  label?: string;
  children: React.ReactNode;
}

/**
 * A `GroupBox` serves as a container for a set of controls.
 * It can be used to group related controls. It can also be used to visually separate a set of controls from the rest of the interface.
 * @example
 * <GroupBox>
 *   <OptionGroup name="groupbox-1" defaultValue="2">
 *     <OptionButton label="Option 1" value="1" />
 *     <OptionButton label="Option 2" value="2"/>
 *   </OptionGroup>
 * </GroupBox>
 */
const GroupBox = ({ label, children }: GroupBoxProps) => {
  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      {children}
    </fieldset>
  );
};

GroupBox.displayName = 'GroupBox';

export default GroupBox;

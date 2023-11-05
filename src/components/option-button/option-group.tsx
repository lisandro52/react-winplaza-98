import React from 'react';
import { OptionContext } from './option-context';

/**
 * Props for the OptionGroup component.
 */
interface OptionGroupProps {
  /**
   * The name of the option group.
   */
  name: string;

  /**
   * The currently selected value in the option group.
   */
  value?: string;

  /**
   * The default value for the option group.
   */
  defaultValue?: string;

  /**
   * A callback function that is triggered when the selected value in the option group changes.
   * It receives the new selected value as a parameter.
   */
  onChange?: (value: string) => void;

  /**
   * The child components to be wrapped by the OptionGroup.
   */
  children: React.ReactNode;
}

/**
 * A context provider component for managing a group of options.
 *
 * This component allows you to create a context for a group of options and provides
 * the selected value, default value, and an onChange callback to its children via context.
 *
 * @example Creating an option group
 *
 * ```tsx
 * <OptionGroup name="fruit" defaultValue="apple">
 *   // Add Option components here
 * </OptionGroup>
 * ```
 *
 * @remarks
 * - The `name` prop is required and represents the name of the option group.
 * - You can specify the `value` prop to control the selected value in the group.
 * - The `defaultValue` prop sets the default selected value when no value is specified.
 * - The `onChange` prop can be used to handle value changes within the group.
 */
const OptionGroup = (props: OptionGroupProps) => {
  return (
    <OptionContext.Provider value={props}>
      {props.children}
    </OptionContext.Provider>
  );
};

export default OptionGroup;

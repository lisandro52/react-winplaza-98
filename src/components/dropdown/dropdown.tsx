import React, { forwardRef } from 'react';

/**
 * Props for the DropdownOption component.
 */
interface DropdownOptionProps
  extends Omit<React.ComponentProps<'option'>, 'selected'> {
  /**
   * The value associated with the option.
   */
  value: string | number;

  /**
   * The content to be displayed as the option's label.
   */
  children: React.ReactNode;
}

/**
 * A single option for the Dropdown component.
 *
 * This component represents an individual option within a dropdown/select input.
 *
 * @example Creating options for a Dropdown
 *
 * ```tsx
 * <Dropdown>
 *   <DropdownOption value="option1">Option 1</DropdownOption>
 *   <DropdownOption value="option2">Option 2</DropdownOption>
 *   <DropdownOption value="option3">Option 3</DropdownOption>
 * </Dropdown>
 * ```
 */
export const DropdownOption = ({ children, ...optionProps }: DropdownOptionProps) => {
  return <option {...optionProps}>{children}</option>;
};

/**
 * Props for the Dropdown component.
 */
interface DropdownProps extends React.ComponentProps<'select'> {
  /**
   * The name attribute for the select element.
   */
  name: string;

  /**
   * An optional label for the dropdown.
   */
  label?: string;
}

/**
 * A Win98 themed dropdown/select React component.
 *
 * This component extends the native HTML `select` element with additional props.
 *
 * @remarks
 * This component can be used to create a dropdown/select input with custom styling
 * and behavior by extending the native `select` element. It works seamlessly with
 * the DropdownOption component to provide options.
 *
 * @example Creating a dropdown with options
 *
 * ```tsx
 * <Dropdown name="example" label="Select an option">
 *   <DropdownOption value="option1">Option 1</DropdownOption>
 *   <DropdownOption value="option2">Option 2</DropdownOption>
 *   <DropdownOption value="option3">Option 3</DropdownOption>
 * </Dropdown>
 * ```
 */
export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ name, label, children, ...selectProps }: DropdownProps, ref) => {
    return (
      <select ref={ref} name={name} {...selectProps}>
        {children}
      </select>
    );
  }
);

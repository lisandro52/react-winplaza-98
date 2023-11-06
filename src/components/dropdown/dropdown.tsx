import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from 'react';

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
 * the `<option />` element to provide options.
 *
 * @example Creating a dropdown with options
 *
 * ```tsx
 * <Dropdown name="example" label="Select an option">
 *   <option value="option1">Option 1</option>
 *   <option value="option2">Option 2</option>
 *   <option value="option3">Option 3</option>
 * </Dropdown>
 * ```
 */
const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ name, label, children, ...selectProps }: DropdownProps, ref) => {
    return (
      <select ref={ref} name={name} {...selectProps}>
        {children}
      </select>
    );
  }
);

export default Dropdown;

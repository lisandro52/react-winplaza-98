import React from 'react';
type OmittedProps = 'type' | 'onChange' | 'checked' | 'defaultChecked' | 'defaultValue' | 'id' | 'name';
/**
 * Props for the OptionButton component.
 */
interface OptionButtonProps extends Omit<React.ComponentProps<'input'>, OmittedProps> {
    /**
     * The label text to display next to the option button.
     */
    label: string;
    /**
     * The value associated with the option button.
     */
    value: string;
}
/**
 * A Win98 themed checkbox React component.
 *
 * This component extends the native HTML `input` element of type `radio` with additional props.
 * It is designed to be used within an `OptionGroup` to manage a group of radio options.
 *
 * @example Creating an option button
 *
 * ```tsx
 * <OptionButton label="Option 1" value="option1" />
 * ```
 *
 * @remarks
 * - The `label` prop is required and specifies the text to display next to the radio button.
 * - The `value` prop is required and represents the value associated with the radio button.
 * - This component is designed to work within an `OptionGroup` to manage a group of radio options.
 */
declare const OptionButton: React.ForwardRefExoticComponent<Omit<OptionButtonProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default OptionButton;

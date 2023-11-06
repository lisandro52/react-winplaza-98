import React from 'react';

/**
 * Props for the Button component.
 */
interface ButtonProps extends React.ComponentProps<'button'> {
    /**
     * Specifies whether the button is in an active state.
     */
    active?: boolean;
    /**
     * Specifies whether the button is focused.
     */
    focused?: boolean;
    /**
     * The text or content to be displayed inside the button.
     */
    children: React.ReactNode;
}
/**
 * A Win98 themed button React component.
 *
 * This component extends the native HTML `button` element with additional props.
 *
 * @remarks
 * - You can use the `active` prop to set the button's active state.
 * - The `focused` prop can be used to indicate whether the button is currently focused.
 *
 * @example Creating a button
 *
 * ```tsx
 * <Button onClick={handleClick} disabled>Click me</Button>
 * ```
 */
declare const Button: ({ active, children, className, focused, ...buttonProps }: ButtonProps) => React.JSX.Element;

/**
 * A Win98 themed checkbox React component.
 *
 * This component extends the native HTML `input` element of type `checkbox` with additional props.
 *
 * @example Creating a checkbox
 *
 * ```tsx
 * <Checkbox name="example" label="Check this box" />
 * ```
 *
 * @remarks
 * - The `name` prop is required and specifies the name attribute for the checkbox input.
 */
declare const Checkbox: React.ForwardRefExoticComponent<{
    /**
     * The name attribute for the checkbox input.
     */
    name: string;
    /**
     * The label text to display next to the checkbox.
     */
    label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "id"> & React.RefAttributes<HTMLInputElement>>;

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
declare const Dropdown: React.ForwardRefExoticComponent<Omit<DropdownProps, "ref"> & React.RefAttributes<HTMLSelectElement>>;

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
declare const GroupBox: {
    ({ label, children }: GroupBoxProps): React.JSX.Element;
    displayName: string;
};

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
declare const OptionGroup: (props: OptionGroupProps) => React.JSX.Element;

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

type OmitProperties$2 = 'type' | 'id' | 'min' | 'max' | 'defaultChecked' | 'value' | 'onChange';
interface SliderProps extends Omit<React.ComponentProps<'input'>, OmitProperties$2> {
    name: string;
    label?: string;
    minLabel?: string;
    maxLabel?: string;
    min: number;
    max: number;
    boxIndicator?: boolean;
    vertical?: boolean;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: number) => void;
}
declare const Slider: React.ForwardRefExoticComponent<Omit<SliderProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

type OmitProperties$1 = 'id' | 'name';
interface TextAreaProps extends Omit<React.ComponentProps<'textarea'>, OmitProperties$1> {
    name: string;
    label?: string;
    labelPosition?: 'left' | 'top';
}
declare const TextArea: React.ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;

type OmitProperties = 'type' | 'id';
interface TextBoxProps extends Omit<React.ComponentProps<'input'>, OmitProperties> {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    name: string;
    label?: string;
    labelPosition?: 'left' | 'top';
}
declare const TextBox: React.ForwardRefExoticComponent<Omit<TextBoxProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

export { Button, Checkbox, Dropdown, GroupBox, OptionButton, OptionGroup, Slider, TextArea, TextBox };

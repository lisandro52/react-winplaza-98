import React from 'react';
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
export default Checkbox;

import React from 'react';
type OmitProperties = 'type' | 'id';
interface TextBoxProps extends Omit<React.ComponentProps<'input'>, OmitProperties> {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    name: string;
    label?: string;
    labelPosition?: 'left' | 'top';
}
declare const TextBox: React.ForwardRefExoticComponent<Omit<TextBoxProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default TextBox;

import React from 'react';
type OmitProperties = 'id' | 'name';
interface TextAreaProps extends Omit<React.ComponentProps<'textarea'>, OmitProperties> {
    name: string;
    label?: string;
    labelPosition?: 'left' | 'top';
}
declare const TextArea: React.ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;

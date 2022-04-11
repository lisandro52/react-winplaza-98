import React from 'react';
export interface TextBoxProps extends React.ComponentProps<'input'> {
    id: string;
    label?: string;
    stacked?: boolean;
}
export declare const TextBox: ({ id, label, stacked, style, ...inputProps }: TextBoxProps) => JSX.Element;
export default TextBox;

import React from 'react';
export interface TextBoxProps {
    id: string;
    label?: string;
    stacked?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
}
export declare const TextBox: ({ id, label, stacked, disabled, style, }: TextBoxProps) => JSX.Element;
export default TextBox;

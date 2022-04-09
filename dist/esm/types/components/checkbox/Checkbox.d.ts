import { InputHTMLAttributes } from 'react';
export interface CheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    inputHTMLAttributes?: InputHTMLAttributes<HTMLInputElement>;
}
declare const Checkbox: ({ id, label, checked, disabled, name, inputHTMLAttributes, }: CheckboxProps) => JSX.Element;
export default Checkbox;

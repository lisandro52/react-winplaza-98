import React from 'react';
export interface CheckboxProps extends React.ComponentProps<'input'> {
    id: string;
    label: string;
}
declare const Checkbox: ({ id, label, ...inputHTMLAttributes }: CheckboxProps) => JSX.Element;
export default Checkbox;

import React from 'react';
type OmitProperties = 'type' | 'id' | 'min' | 'max' | 'defaultChecked' | 'value' | 'onChange';
interface SliderProps extends Omit<React.ComponentProps<'input'>, OmitProperties> {
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
export default Slider;

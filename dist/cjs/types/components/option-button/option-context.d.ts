/// <reference types="react" />
interface OptionContextProps {
    name: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export declare const OptionContext: import("react").Context<OptionContextProps | undefined>;
export declare const useOptionContext: () => OptionContextProps;
export {};

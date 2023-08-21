import React from 'react';
interface WindowTitleButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const MinimizeButton: ({ onClick }: WindowTitleButtonProps) => React.JSX.Element;
export declare const RestoreButton: ({ onClick }: WindowTitleButtonProps) => React.JSX.Element;
export declare const CloseButton: ({ onClick }: WindowTitleButtonProps) => React.JSX.Element;
export declare const MaximizeButton: ({ onClick }: WindowTitleButtonProps) => React.JSX.Element;
export declare const HelpButton: ({ onClick }: WindowTitleButtonProps) => React.JSX.Element;
export interface WindowTitleProps {
    title?: string;
    inactive?: boolean;
    children?: React.ReactNode;
}
declare const WindowTitle: ({ title, inactive, children }: WindowTitleProps) => React.JSX.Element;
export default WindowTitle;

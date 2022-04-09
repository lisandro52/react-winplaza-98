import React from 'react';
interface WindowTitleButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const MinimizeButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
export declare const RestoreButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
export declare const CloseButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
export declare const MaximizeButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
export declare const HelpButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
export interface WindowTitleProps {
    title?: string;
    inactive?: boolean;
    children?: React.ReactNode;
}
declare const WindowTitle: ({ title, inactive, children }: WindowTitleProps) => JSX.Element;
export default WindowTitle;

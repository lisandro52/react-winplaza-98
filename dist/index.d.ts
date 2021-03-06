import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
    children: string;
}
declare const Button: ({ children, ...buttonProps }: ButtonProps) => JSX.Element;

interface CheckboxProps extends React.ComponentProps<'input'> {
    id: string;
    label: string;
}
declare const Checkbox: ({ id, label, ...inputHTMLAttributes }: CheckboxProps) => JSX.Element;

interface TextBoxProps extends React.ComponentProps<'input'> {
    id: string;
    label?: string;
    stacked?: boolean;
}
declare const TextBox: ({ id, label, stacked, style, ...inputProps }: TextBoxProps) => JSX.Element;

interface WindowProps {
    title: React.ReactElement;
    statusBar?: React.ReactNode;
    width?: string | number;
    children?: React.ReactNode;
}
declare const Window: ({ title, statusBar, width, children }: WindowProps) => JSX.Element;

interface WindowBodyProps {
    children: React.ReactNode;
}
declare const WindowBody: ({ children }: WindowBodyProps) => JSX.Element;

declare const StatusBarField: ({ children }: {
    children: string;
}) => JSX.Element;
interface WindowStatusBarProps {
    children: React.ReactNode;
}
declare const WindowStatusBar: ({ children }: WindowStatusBarProps) => JSX.Element;

interface WindowTitleButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const MinimizeButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
declare const RestoreButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
declare const CloseButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
declare const MaximizeButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
declare const HelpButton: ({ onClick }: WindowTitleButtonProps) => JSX.Element;
interface WindowTitleProps {
    title?: string;
    inactive?: boolean;
    children?: React.ReactNode;
}
declare const WindowTitle: ({ title, inactive, children }: WindowTitleProps) => JSX.Element;

export { Button, Checkbox, CloseButton, HelpButton, MaximizeButton, MinimizeButton, RestoreButton, StatusBarField, TextBox, Window, WindowBody, WindowStatusBar, WindowTitle };

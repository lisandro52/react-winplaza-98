import React from 'react';
export interface WindowProps {
    title: React.ReactElement;
    statusBar?: React.ReactNode;
    width?: string | number;
    children?: React.ReactNode;
}
export declare const Window: ({ title, statusBar, width, children }: WindowProps) => React.JSX.Element;
export default Window;

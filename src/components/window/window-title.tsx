import React from 'react';

interface WindowTitleButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MinimizeButton = ({ onClick }: WindowTitleButtonProps) => {
  return <button aria-label="Minimize" onClick={onClick}></button>;
};

export const RestoreButton = ({ onClick }: WindowTitleButtonProps) => {
  return <button aria-label="Restore" onClick={onClick}></button>;
};

export const CloseButton = ({ onClick }: WindowTitleButtonProps) => {
  return <button aria-label="Close" onClick={onClick}></button>;
};

export const MaximizeButton = ({ onClick }: WindowTitleButtonProps) => {
  return <button aria-label="Maximize" onClick={onClick}></button>;
};

export const HelpButton = ({ onClick }: WindowTitleButtonProps) => {
  return <button aria-label="Help" onClick={onClick}></button>;
};

export interface WindowTitleProps {
  title?: string;
  inactive?: boolean;
  children?: React.ReactNode;
}

const WindowTitle = ({ title, inactive, children }: WindowTitleProps) => {
  return (
    <div className={`title-bar ${inactive ? 'inactive' : ''}`}>
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">{children}</div>
    </div>
  );
};

export default WindowTitle;

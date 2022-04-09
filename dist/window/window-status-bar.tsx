import React from 'react';

export const StatusBarField = ({ children }: { children: string }) => {
  return <p className="status-bar-field">{children}</p>;
};

interface WindowStatusBarProps {
  children: React.ReactNode;
}

const WindowStatusBar = ({ children }: WindowStatusBarProps) => {
  return <div className="status-bar">{children}</div>;
};

export default WindowStatusBar;

import React from 'react';
import WindowBody from './window-body';

export interface WindowProps {
  title: React.ReactElement;
  statusBar?: React.ReactNode;
  width?: string | number;
  children?: React.ReactNode;
}

const Window = ({ title, statusBar, width, children }: WindowProps) => {
  return (
    <div className="window" style={{ width }}>
      {title}
      <WindowBody>{children}</WindowBody>
      {statusBar}
    </div>
  );
};

export default Window;

import React from 'react';

export interface WindowProps {
  width?: string | number;
  children: React.ReactNode;
}

const Window = ({ width, children }: WindowProps) => {
  return (
    <div className="window" style={{ width }}>
      {children}
    </div>
  );
};

export default Window;

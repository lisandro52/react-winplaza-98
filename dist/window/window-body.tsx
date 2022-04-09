import React from 'react';

interface WindowBodyProps {
  children: React.ReactNode;
}

const WindowBody = ({ children }: WindowBodyProps) => {
  return <div className="window-body">{children}</div>;
};

export default WindowBody;

import React from 'react';
import Win98ThemeProvider from '../components/theme-providers/win98-theme';

const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  // By default, load the Win98 provider
  return <Win98ThemeProvider>{children}</Win98ThemeProvider>;
};

export default Wrapper;

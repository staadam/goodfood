import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyles } from '../assets/GlobalStyles';

export const AppProvider = ({ children }: { children: ReactNode }) => (
  <Router>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Router>
);

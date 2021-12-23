import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyles } from '../assets/GlobalStyles';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { ErrorProvider } from '../hooks/useError';

export const AppProvider = ({ children }: { children: ReactNode }) => (
  <Router>
    <Provider store={store}>
      <ErrorProvider>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ErrorProvider>
    </Provider>
  </Router>
);

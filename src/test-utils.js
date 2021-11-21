import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from './providers/AppProvider';

const AllProviders = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

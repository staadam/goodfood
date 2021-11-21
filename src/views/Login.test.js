import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import '@testing-library/jest-dom';
import { Login } from './Login';

describe('Login form', () => {
  it('Clears inputs on form sending', async () => {
    render(<Login />);
    const loginInput = screen.getByLabelText('login');
    const passwordInput = screen.getByLabelText('password');
    const buttonSubmit = screen.getByTestId('submitButton');

    fireEvent.change(loginInput, { target: { value: 'Jco' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.click(buttonSubmit);

    await waitFor(() => {
      expect(loginInput.value).toBe('');
    });
  });
});

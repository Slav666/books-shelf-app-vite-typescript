import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RegisterForm } from '../unathenticatedapp';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { vi } from 'vitest';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
describe('<UserRegistration />', () => {
  it('shows the user registration form', () => {
    render(<RegisterForm />, { wrapper });

    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('confirmPassword')).toBeInTheDocument();
  });

  it('calls onSubmit with the form values on successful completion', async () => {
    const onSubmit = vi.fn(values => values);
    const registerValues = {
      username: 'testUser',
      password: 'password',
      confirmPassword: 'password',
    };

    render(<RegisterForm />, { wrapper });

    await userEvent.type(
      screen.getByPlaceholderText('username'),
      registerValues.username,
    );
    await userEvent.type(
      screen.getByPlaceholderText('password'),
      registerValues.password,
    );
    await userEvent.type(
      screen.getByPlaceholderText('confirmPassword'),
      registerValues.confirmPassword,
    );

    userEvent.click(screen.getByRole('button', { name: 'Register' }));
    () => expect(onSubmit).toHaveBeenCalledWith(registerValues);
  });
  // it('shows a loading spinner if loading', () => {
  //   render(<RegisterForm />, { wrapper });
  //   expect(screen.getByTestId('progressbar')).toBeInTheDocument();
  // });
});

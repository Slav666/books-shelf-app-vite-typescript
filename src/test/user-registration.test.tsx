import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
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
    const onSubmit = vi.fn();
    const values = {
      username: 'usernameTest',
      password: 'passwordTest',
      confirmPassword: 'confirmPasswordTest',
    };

    render(<RegisterForm />, { wrapper });

    userEvent.type(screen.getByPlaceholderText('username'), values.username);
    userEvent.type(screen.getByPlaceholderText('password'), values.password);
    userEvent.type(
      screen.getByPlaceholderText('confirmPassword'),
      values.confirmPassword,
    );

    userEvent.click(screen.getByRole('button', { name: 'Register' }));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        ...values,
      }),
    );
  });

  //   it('displays server errors if there are any', () => {
  //     render(<RegisterForm serverErrors={['test error']} />);

  //     expect(screen.getByText(/test\serror/i)).toBeInTheDocument();
  //   });

  //   it('shows a loading spinner when loading', () => {
  //     render(<RegisterForm isLoading={true} />);

  //     expect(screen.getAllByRole('progressbar')[1]).toBeInTheDocument();
  //   });
});

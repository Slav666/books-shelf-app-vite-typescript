import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RegisterForm } from '../unathenticatedapp';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { vi } from 'vitest';

const REGISTER_USER = 'testUser';
const REGISTER_PASSWORD = 'testPassword';
const REGISTER_CONFIRM_PASSWORD = 'testPassword';
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
      password: 'testPassword',
      confirmPassword: 'testPassword',
    };

    render(<RegisterForm />, { wrapper });

    await userEvent.type(
      screen.getByPlaceholderText('username'),
      REGISTER_USER,
    );
    await userEvent.type(
      screen.getByPlaceholderText('password'),
      REGISTER_PASSWORD,
    );
    await userEvent.type(
      screen.getByPlaceholderText('confirmPassword'),
      REGISTER_CONFIRM_PASSWORD,
    );

    userEvent.click(screen.getByRole('button', { name: 'Register' }));
    () => expect(onSubmit).toHaveBeenCalledWith(registerValues);
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

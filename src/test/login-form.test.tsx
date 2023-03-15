import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoginForm } from '../unathenticatedapp';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const USER_TEXT = 'testUser';
const PASSWORD_TEXT = 'testPassword';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
describe('Login Form Component', () => {
  const onSubmit = vi.fn();
  const user = { username: 'testUser', password: 'testPassword' };

  it('should render a form', () => {
    render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });

  // it('should enable `Login` button when form is valid', async () => {
  //   render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

  //   expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();

  //   userEvent.type(screen.getByPlaceholderText('username'), USER_TEXT);

  //   await userEvent.type(
  //     screen.getByPlaceholderText('password'),
  //     PASSWORD_TEXT,
  //   );

  //   expect(screen.getByRole('button', { name: 'Log in' })).toBeEnabled();
  // });

  // it('should disable `login`button when form is invalid', () => {
  //   render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

  //   const loginButton = screen.getByRole('button', { name: 'Log in' });

  //   userEvent.type(screen.getByPlaceholderText('username'), USER_TEXT);

  //   expect(loginButton).toBeDisabled();
  // });

  it('should call `onSubmit` function when form is valid and `Login` button clicked', async () => {
    const onSubmit = vi.fn();
    render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

    userEvent.type(screen.getByPlaceholderText('username'), USER_TEXT);
    userEvent.type(screen.getByPlaceholderText('password'), PASSWORD_TEXT);

    userEvent.click(screen.getByRole('button', { name: 'Log in' }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        username: user.username,
        password: user.password,
      }),
    );
  });
});

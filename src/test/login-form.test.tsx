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
  it('should call `onSubmit` function when form is valid and `Login` button clicked', async () => {
    const user = { username: 'testUser', password: 'testPassword' };
    const onSubmit = vi.fn(values => values);
    render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

    await userEvent.type(screen.getByPlaceholderText('username'), USER_TEXT);
    await userEvent.type(
      screen.getByPlaceholderText('password'),
      PASSWORD_TEXT,
    );

    userEvent.click(screen.getByRole('button', { name: 'Log in' }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith(user));
  });

  it('should render a form', () => {
    const user = { username: 'testUser', password: 'testPassword' };
    const onSubmit = vi.fn(values => values);
    render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });

  it('should enable `Login` button when form is valid', async () => {
    const user = { username: 'testUser', password: 'testPassword' };
    const onSubmit = vi.fn(values => values);
    render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

    expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();

    await userEvent.type(screen.getByPlaceholderText('username'), 'testUser');

    await userEvent.type(screen.getByPlaceholderText('password'), 'test');

    expect(userEvent.click(screen.getByRole('button', { name: 'Log in' })))
      .toBeEnabled;

  });

  it('should disable `login`button when form is invalid', async () => {
    const user = { username: 'testUser', password: 'testPassword' };
    const onSubmit = vi.fn(values => values);
    render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

    const loginButton = screen.getByRole('button', { name: 'Log in' });

    userEvent.type(screen.getByPlaceholderText('username'), 'testUser');

    userEvent.type(screen.getByPlaceholderText('password'), 'testPassword');
    expect(userEvent.click(loginButton)).toBeDisabled;
  });

  // it('should call `onSubmit` function when form is valid and `Login` button clicked', async () => {
  //   render(<LoginForm user={user} onSubmit={onSubmit} />, { wrapper });

  //   userEvent.type(screen.getByPlaceholderText('username'), USER_TEXT);
  //   userEvent.type(screen.getByPlaceholderText('password'), PASSWORD_TEXT);

  //   userEvent.click(screen.getByRole('button', { name: 'Log in' }));
  //   await waitFor(() =>
  //     expect(onSubmit).toHaveBeenCalledWith({
  //       username: user.username,
  //       password: user.password,
  //     }),
  //   );
  // });
});

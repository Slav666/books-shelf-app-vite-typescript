import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RegisterForm } from '../unathenticatedapp';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { vi } from 'vitest';
import { Spinner } from '~/components/bookshelf/reusableComponents';
import { values } from 'cypress/types/lodash';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
// const renderComponent = ({ user = 'testUser', isLoading = false } = {}) => {
//   const onSubmit = vi.fn(values => values);
//   const utils = render(
//     <RegisterForm user={user} onSubmit={onSubmit} isLoading={isLoading} />,
//     { wrapper },
//   );
//   return { ...utils, onSubmit, user };
// };
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
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith(registerValues));
  });

  // it('shows a loading spinner when loading', () => {
  //   renderComponent({ isLoading: true });
  //   expect(
  //     screen.getByRole('progressbar', { hidden: true }),
  //   ).toBeInTheDocument();
  // });
});

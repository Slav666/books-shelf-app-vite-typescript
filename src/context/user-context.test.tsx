// import React from 'react';
// import { render, screen, fireEvent, waitFor } from 'vitest';
// import userEvent from '@testing-library/user-event';
// import { AuthenticationContext, DataProvider } from './DataContext';
// import useLoginUser from '../hooks/useLoginHook';

// jest.mock('../hooks/useLoginHook');

// describe('DataProvider', () => {
//   const mockUser = { username: 'testuser', password: 'password123' };
//   const mockLogin = jest.fn();

//   beforeEach(() => {
//     useLoginUser.mockReturnValue({ mutateAsync: mockLogin });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should render children and provide authentication context', () => {
//     render(
//       <DataProvider>
//         <div>Children Component</div>
//       </DataProvider>,
//     );

//     expect(screen.getByText('Children Component')).toBeInTheDocument();
//     expect(AuthenticationContext.displayName).toBe('AuthenticationContext');
//   });

//   it('should call login function on form submit', async () => {
//     render(
//       <DataProvider>
//         <div>Children Component</div>
//       </DataProvider>,
//     );

//     const usernameInput = screen.getByLabelText('Username');
//     const passwordInput = screen.getByLabelText('Password');
//     const submitButton = screen.getByText('Submit');

//     await userEvent.type(usernameInput, 'testuser');
//     await userEvent.type(passwordInput, 'password123');
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(mockLogin).toHaveBeenCalledTimes(1);
//       expect(mockLogin).toHaveBeenCalledWith(mockUser);
//     });
//   });

//   it('should update user state on successful login', async () => {
//     render(
//       <DataProvider>
//         <div>Children Component</div>
//       </DataProvider>,
//     );

//     const usernameInput = screen.getByLabelText('Username');
//     const passwordInput = screen.getByLabelText('Password');
//     const submitButton = screen.getByText('Submit');

//     await userEvent.type(usernameInput, 'testuser');
//     await userEvent.type(passwordInput, 'password123');
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(mockLogin).toHaveBeenCalledTimes(1);
//       expect(mockLogin).toHaveBeenCalledWith(mockUser);
//     });

//     const mockResponse = { id: 1, username: 'testuser' };
//     mockLogin.mockResolvedValue(mockResponse);

//     await waitFor(() => {
//       expect(screen.getByLabelText('Username').value).toBe('testuser');
//       expect(screen.getByLabelText('Password').value).toBe('password123');
//     });
//   });
// });

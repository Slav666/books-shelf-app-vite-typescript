import { jsx } from '@emotion/core';

import * as React from 'react';
import {
  Input,
  Button,
  Spinner,
  FormGroup,
  // ErrorMessage,
} from './components/bookshelf/reusableComponents';
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from './components/bookshelf/modal';
import { Logo } from './components/bookshelf/logo';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useRegisterUser from './hooks/useRegisterHook';

type LoginFormData = yup.InferType<typeof loginSchema>;
type RegisterFormData = yup.InferType<typeof registerSchema>;

const loginSchema = yup
  .object({
    username: yup.string().min(3).required(),
    password: yup.string().min(5).required(),
  })
  .required();

const registerSchema = yup
  .object({
    username: yup.string().min(3).required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .required();

export function RegisterForm() {
  const { mutateAsync } = useRegisterUser();

  const onSubmit = async userRegisterValues => {
    console.log('new register user', userRegisterValues);
    await mutateAsync({ ...userRegisterValues });
    // setUser(response);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input {...register('username')} />
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input type="password" {...register('password')} />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Confirm Password</label>
        <Input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
        )}
      </FormGroup>
      <div>
        <button type="submit">Register</button>
        {/* <button type="submit">Register</button> */}
        {/* {React.cloneElement(
          submitButton,
          { type: 'submit' },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner css={{ marginLeft: 5 }} /> : null,
        )} */}
      </div>
      {/* {isError ? <ErrorMessage error={error} /> : null} */}
    </form>
  );
}

export function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input {...register('username')} />
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input type="password" {...register('password')} />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </FormGroup>
      <div>
        <button type="submit">Log in</button>
        {/* <button type="submit">Register</button> */}
        {/* {React.cloneElement(
          submitButton,
          { type: 'submit' },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner css={{ marginLeft: 5 }} /> : null,
        )} */}
      </div>
      {/* {isError ? <ErrorMessage error={error} /> : null} */}
    </form>
  );
}

function UnauthenticatedApp({ onSubmit }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm onSubmit={onSubmit} />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <RegisterForm
              onSubmit={onSubmit}
              // submitButton={<Button variant="secondary">Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  );
}

export { UnauthenticatedApp };

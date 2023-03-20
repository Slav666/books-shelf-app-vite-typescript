import { jsx } from '@emotion/core';

import React, { FC, useEffect, useRef } from 'react';
import {
  Input,
  Button,
  Spinner,
  FormGroup,
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
interface InputLoginProps {
  onSubmit: (user: { username: string; password: string }) => void;
  user: {
    username: string;
    password: string;
  };
}

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

export const RegisterForm = () => {
  const { mutateAsync, status } = useRegisterUser();
  const isLoading = status === 'loading';

  const onSubmit = async userRegisterValues => {
    delete userRegisterValues.confirmPassword;
    await mutateAsync({ ...userRegisterValues });
    resetField('username');
    resetField('password');
    resetField('confirmPassword');
  };
  const {
    register,
    handleSubmit,
    resetField,
    setFocus,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });
  useEffect(() => {
    setFocus('username');
  }, [setFocus]);
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
      onSubmit={handleSubmit(values => onSubmit(values))}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input placeholder="username" {...register('username')} />
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input
          placeholder="password"
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Confirm Password</label>
        <Input
          placeholder="confirmPassword"
          type="password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
        )}
      </FormGroup>
      <div>
        <button disabled={!isDirty && !isValid} type="submit">
          Register
        </button>
        {isLoading ? <Spinner style={{ marginLeft: 5 }} /> : null}
      </div>
    </form>
  );
};

export const LoginForm: FC<InputLoginProps> = ({ onSubmit, user }) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const { status } = useRegisterUser();
  const isLoading = status === 'loading';

  useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
      onSubmit={handleSubmit(values => onSubmit(values))}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input placeholder="username" {...register('username')} />
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input
          placeholder="password"
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </FormGroup>
      <div>
        <button
          disabled={!isDirty || !!Object.keys(errors).length}
          style={
            !isDirty || !!Object.keys(errors).length
              ? { backgroundColor: 'red', cursor: 'not-allowed' }
              : { backgroundColor: 'green', cursor: 'pointer' }
          }
          type="submit"
        >
          Log in
        </button>
        {isLoading ? <Spinner style={{ marginLeft: 5 }} /> : null}
      </div>
    </form>
  );
};

const UnauthenticatedApp = ({ onSubmit, user }: InputLoginProps) => {
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
            <LoginForm onSubmit={onSubmit} user={user} />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <RegisterForm />
          </ModalContents>
        </Modal>
      </div>
    </div>
  );
};

export { UnauthenticatedApp };

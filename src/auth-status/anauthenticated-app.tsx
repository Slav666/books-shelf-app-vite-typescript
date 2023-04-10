import { jsx } from '@emotion/core';

import React, { FC, useEffect, useContext } from 'react';
import { Input, Button, Spinner, FormGroup } from '../components/lib';
import { Modal, ModalContents, ModalOpenButton } from '../components/modal';
import { Logo } from '../assets/logo';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useRegisterUser from '../hooks/useRegisterHook';
import DataContext from '../context/user-context';

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
        <Button
          disabled={!isDirty && !isValid}
          style={
            !isDirty || !!Object.keys(errors).length
              ? {
                  backgroundColor: 'red',
                  cursor: 'not-allowed',
                  marginTop: '1rem',
                }
              : {
                  backgroundColor: 'green',
                  cursor: 'pointer',
                  marginTop: '1rem',
                }
          }
          type="submit"
          variant="primary"
        >
          Register
        </Button>
        {isLoading ? <Spinner style={{ marginLeft: 5 }} /> : null}
      </div>
    </form>
  );
};

export const LoginForm: FC<InputLoginProps> = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const { status } = useRegisterUser();
  const { onSubmit } = useContext(DataContext);
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
        <Button
          disabled={!isDirty || !!Object.keys(errors).length}
          style={
            !isDirty || !!Object.keys(errors).length
              ? {
                  backgroundColor: 'red',
                  cursor: 'not-allowed',
                  marginTop: '1rem',
                }
              : {
                  backgroundColor: 'green',
                  cursor: 'pointer',
                  marginTop: '1rem',
                }
          }
          type="submit"
          variant="primary"
        >
          Log in
        </Button>
        {isLoading ? <Spinner style={{ marginLeft: 5 }} /> : null}
      </div>
    </form>
  );
};

const UnauthenticatedApp = () => {
  return (
    <div className="unauthenticated-app-layout">
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div className="unauthenticated-app-buttons-layout">
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm />
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

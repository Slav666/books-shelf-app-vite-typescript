import { jsx } from '@emotion/core';

import React, { FC, useEffect, useContext } from 'react';
import { Input, Button, Spinner, FormGroup } from '../../components/lib';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useRegisterUser from '../../hooks/useRegisterHook';
import DataContext from '../../context/user-context';

type LoginFormData = yup.InferType<typeof loginSchema>;

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

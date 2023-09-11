import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useRegisterUser from '../../hooks/useRegisterHook';
import {
  Input,
  Button,
  FullPageSpinner,
  FormGroup,
} from '../../components/lib';

type RegisterFormData = yup.InferType<typeof registerSchema>;

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
    await mutateAsync({
      ...userRegisterValues,
      books: [],
      finishedBooks: [],
    });
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
      className="flex flex-col items-stretch"
      onSubmit={handleSubmit(values => onSubmit(values))}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input placeholder="username" {...register('username')} />
        {errors.username && (
          <p className="p-2 text-red-500">{errors.username.message}</p>
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
          <p className="p-2 text-red-500">{errors.password.message}</p>
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
          <p className="p-2 text-red-500">{errors.confirmPassword.message}</p>
        )}
      </FormGroup>
      <div className="p-2">
        <Button disabled={!isDirty && !isValid} type="submit" variant="primary">
          Register
        </Button>
        {isLoading ? <FullPageSpinner /> : null}
      </div>
    </form>
  );
};

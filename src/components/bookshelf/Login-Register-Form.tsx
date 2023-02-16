import React from 'react';
import { object, string, TypeOf } from 'zod';
import { Input, FormGroup } from './ReusableComponents';
import useStore from './store';
import { toast } from 'react-toastify';
import { loginUserFn } from '../../utils/uathAPI';
import { useMutation } from '@tanstack/react-query';

interface Props {
  onSubmit: object;
  submitButton: boolean;
}

const loginSchema = object({
  email: string()
    .min(1, 'Email address is required')
    .email('Email Address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type LoginForm = TypeOf<typeof loginSchema>;

const LoginForm: React.FC<Props> = ({ onSubmit, submitButton }) => {
  const store = useStore();

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  //  API Login Mutation
  const { mutate: loginUser } = useMutation(
    (userData: LoginForm) => loginUserFn(userData),
    {
      onMutate(variables) {
        store.setRequestLoading(true);
      },
      onSuccess: () => {
        store.setRequestLoading(false);
        toast.success('You successfully logged in');
        // navigate(from);
      },
      onError: (error: any) => {
        store.setRequestLoading(false);
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el.message, {
              position: 'top-right',
            }),
          );
        } else {
          toast.error((error as any).response.data.message, {
            position: 'top-right',
          });
        }
      },
    },
  );

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        color: 'red',
        // '> div': {
        //   margin: '10px auto',
        //   width: '100%',
        //   maxWidth: '300px',
        // },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div style={{ marginTop: '1rem' }}>
        {React.cloneElement(submitButton, { type: 'submit' })}
      </div>
    </form>
  );
};
export default LoginForm;

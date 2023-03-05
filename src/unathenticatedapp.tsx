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
import { useNavigate } from 'react-router-dom';
import { Logo } from './components/bookshelf/logo';
import useLoginUser from './hooks/useLoginHook';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
// import { useFormValues } from 'vee-validate';

function LoginForm({ submitButton, user }) {
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();
  const { isLoading, mutateAsync } = useLoginUser();
  console.log('TEST user', user);

  // const onSubmit = handleSubmit(data => {
  //   console.log('Data from post form component', data);
  //   return onFormSubmit(data);
  // });
  // const { mutate: loginUser } = useMutation(userLoginValue => useLoginUser, {
  //   onSuccess: () => {},
  // });

  const onSubmit = handleSubmit(async userLoginValues => {
    console.log(userLoginValues);
    await mutateAsync({ ...userLoginValues });
    // setUser(user);
    // console.log('USER:', user);
    // navigate('/discover');
    // setIsLoggedIn(true);
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        // '> div': {
        //   margin: '10px auto',
        //   width: '100%',
        //   maxWidth: '300px',
        // },
      }}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" {...register('username')} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" {...register('password')} />
      </FormGroup>
      <div>
        {React.cloneElement(
          submitButton,
          { type: 'submit' },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner css={{ marginLeft: 5 }} /> : null,
        )}
      </div>
      {/* {isError ? <ErrorMessage error={error} /> : null} */}
    </form>
  );
}

function UnauthenticatedApp({ user, onFormSubmit }) {
  const { isLoading, mutateAsync, isError, error } = useLoginUser();
  // const [user, setUser] = React.useState();
  const { handleSubmit } = useForm();

  // const onFormSubmit = async data => {
  //   console.log('Test', data);
  //   await mutateAsync({ ...data });
  // };
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
            <LoginForm
              submitButton={<Button variant="primary">Login</Button>}
              onSubmit={handleSubmit(onFormSubmit)}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            {/* <LoginForm
              // onSubmit={register}
              submitButton={<Button variant="secondary">Register</Button>}
            /> */}
          </ModalContents>
        </Modal>
      </div>
    </div>
  );
}

export { UnauthenticatedApp };

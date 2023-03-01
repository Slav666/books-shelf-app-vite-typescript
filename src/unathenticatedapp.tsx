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
import useLoginUser from './hooks/useLoginHook';
import { useForm } from 'react-hook-form';

function LoginForm({ submitButton, onFormSubmit }) {
  const { register, handleSubmit } = useForm();

  const { isLoading, mutateAsync } = useLoginUser();

  // const onSubmit = handleSubmit(data => {
  //   console.log('Data from post form component', data);
  //   return onFormSubmit(data);
  // });

  const onSubmit = handleSubmit(async userLoginValue => {
    console.log(userLoginValue);
    await mutateAsync(userLoginValue);
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

function UnauthenticatedApp({ user, isLoggedIn, setIsLoggedIn }) {
  const { isLoading, mutateAsync, isError, error } = useLoginUser();
  const { handleSubmit } = useForm();

  const onFormSubmit = async data => {
    console.log('Test', data);
    await mutateAsync({ ...data });
    setIsLoggedIn(true);
  };
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
              onSubmit={handleSubmit(onFormSubmit)}
              submitButton={<Button variant="primary">Login</Button>}
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

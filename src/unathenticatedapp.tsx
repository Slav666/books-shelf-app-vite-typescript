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

export function LoginForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

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
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input type="password" {...register('password')} />
      </FormGroup>
      <div>
        <button type="submit">Log in</button>
        <button type="submit">Register</button>
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
            <LoginForm
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

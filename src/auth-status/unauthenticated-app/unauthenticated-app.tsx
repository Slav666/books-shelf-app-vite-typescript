import { jsx } from '@emotion/core';

import React, { FC } from 'react';

import { Button } from '../../components/lib';
import { Modal, ModalContents, ModalOpenButton } from '../../components/modal';
import { Logo } from '../../assets/logo';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

const UnauthenticatedApp: FC = () => {
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

import { jsx } from '@emotion/core';

import React, { FC, useState } from 'react';
import { Button } from '../../components/lib';
import { Logo } from '../../assets/logo';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

const UnauthenticatedApp: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleRegisterFormClose = () => {
    setShowRegisterForm(false);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      {!showLoginForm && !showRegisterForm && (
        <div className="unauthenticated-app-buttons-layout">
          <Button variant="secondary" onClick={handleLoginClick}>
            Login
          </Button>
          <Button variant="primary" onClick={handleRegisterClick}>
            Register
          </Button>
        </div>
      )}
      {showLoginForm && (
        <div className="mb-5 rounded-md border border-gray-300 p-5">
          <header className="flex items-center justify-between bg-gray-200 p-4">
            <h2>Login</h2>
            <Button variant="primary" onClick={handleLoginFormClose}>
              <span>&times;</span>
            </Button>
          </header>
          <div className="form-content">
            <LoginForm />
          </div>
        </div>
      )}
      {showRegisterForm && (
        <div className="mb-5 rounded-md border border-gray-300 p-5">
          <header className="flex items-center justify-between bg-gray-200 p-4">
            <h2>Register</h2>
            <Button variant="primary" onClick={handleRegisterFormClose}>
              <span>&times;</span>
            </Button>
          </header>
          <div className="form-content">
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
};

export { UnauthenticatedApp };

// import { jsx } from '@emotion/core';

import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import { Nav } from '../authenticated-app/navigation-link';
import { AppRoutes } from './app-routes';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/lib';
import '../../app.css';

const AuthenticatedApp: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLoggedOut = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <>
      <div className="absolute top-40 right-10 flex items-center">
        <Button variant="secondary" onClick={handleLoggedOut}>
          Logout
        </Button>
      </div>
      <div className="mx-auto mt-16 flex w-full max-w-7xl flex-col  p-8 md:flex-row">
        <div className="mx-auto max-h-[300px]  max-w-[300px] md:w-1/4">
          <Nav />
        </div>
        <main className=" md:w-3/4">
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export { AuthenticatedApp };

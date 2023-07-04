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
  const { user, setUser } = useContext(UserContext);

  const handleLoggedOut = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <React.Fragment>
      <div className="absolute top-40 right-10 flex items-center">
        {/* <p>Hello User: {user.username} </p> */}
        <Button variant="secondary" onClick={handleLoggedOut}>
          Logout
        </Button>
      </div>
      <div className="mx-auto mt-16 flex w-full max-w-7xl p-8">
        <div>
          <Nav />
        </div>
        <main style={{ width: '100%' }}>
          <AppRoutes />
        </main>
      </div>
    </React.Fragment>
  );
};

export { AuthenticatedApp };

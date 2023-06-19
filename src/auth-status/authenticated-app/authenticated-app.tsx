// import { jsx } from '@emotion/core';

import React, { useContext, FC } from 'react';
import { Button } from '../../components/lib';
import DataContext from '../../context/user-context';
import { Nav } from '../authenticated-app/navigation-link';
import { AppRoutes } from './app-routes';
import { useNavigate } from 'react-router-dom';
import '../../app.css';

const AuthenticatedApp: FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(DataContext);

  const handleLoggedOut = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <React.Fragment>
      <div className="login-button-position">
        <p>Hello User: {user.username} </p>
        <Button variant="secondary" onClick={handleLoggedOut}>
          Logout
        </Button>
      </div>
      <div className="discover-container">
        <div style={{ position: 'relative' }}>
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

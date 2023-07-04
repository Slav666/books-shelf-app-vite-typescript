/* eslint-disable prettier/prettier */
import React, { useContext, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserContext from './context/user-context';
import { AuthenticatedApp } from './auth-status/authenticated-app/authenticated-app';
import { UnauthenticatedApp } from './auth-status/unauthenticated-app/unauthenticated-app';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';

const App: FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {user ? (
        <Router>
          <AuthenticatedApp />
        </Router>
      ) : (
        <UnauthenticatedApp />
      )}
      <Footer />
    </div>
  );
};

export default App;

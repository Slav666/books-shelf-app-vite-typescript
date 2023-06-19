/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './auth-status/authenticated-app/authenticated-app';
import { UnauthenticatedApp } from './auth-status/unauthenticated-app/unauthenticated-app';
import DataContext from './context/user-context';
import { useContext } from 'react';

const App: FC = () => {
  const { user } = useContext(DataContext);
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

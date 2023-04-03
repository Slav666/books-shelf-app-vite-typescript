/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './authenticatedApp';
import { UnauthenticatedApp } from './unathenticatedapp';
import DataContext from './components/bookshelf/DataContext';
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

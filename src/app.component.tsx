/* eslint-disable prettier/prettier */
import React, { FC, ReactElement, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './authenticatedApp';
import { UnauthenticatedApp } from './unathenticatedapp';
// import * as auth from '../src/auth-provider';
import useLoginUser from './hooks/useLoginHook';


const App: FC = (): ReactElement => {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [user, setUser] = React.useState(null);
  // const user = { username: 'slawomir' };

  const { mutateAsync } = useLoginUser();
  // console.log('User ', data);

  const onFormSubmit = async data => {
    console.log(data);
    await mutateAsync({ ...data });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {user ? (
        <Router>
          <AuthenticatedApp onFormSubmit={onFormSubmit} />
        </Router>
      ) : (
        <UnauthenticatedApp onFormSubmit={onFormSubmit} />
      )}
      <Footer />
    </div>
  );
};

export default App;

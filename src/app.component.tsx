/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './authenticatedApp';
import { UnauthenticatedApp } from './unathenticatedapp';
// import * as auth from '../src/auth-provider';
import useLoginUser from './hooks/useLoginHook';

const App: FC = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  //  const [user, setUser] = React.useState(null);
  // const { data: user, error, isError, isLoading } = useLoginUser();
  // console.log('User', user);
  const { mutate: user } = useLoginUser();
  console.log('Test', user);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <UnauthenticatedApp login={login} />

      <Router>
        <AuthenticatedApp user={user}  />
      </Router> */}
      {isLoggedIn ? (
        <Router>
          <AuthenticatedApp user={user} setIsLoggedIn={setIsLoggedIn} />
        </Router>
      ) : (
        <UnauthenticatedApp
          user={user}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;

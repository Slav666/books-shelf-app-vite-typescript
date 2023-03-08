/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './authenticatedApp';
import { UnauthenticatedApp } from './unathenticatedapp';
import useLoginUser from './hooks/useLoginHook';

const App: FC = (): ReactElement => {
  const [user, setUser] = React.useState(null);
  const { mutateAsync: login } = useLoginUser();

  const onSubmit = async userLoginValues => {
    const response = await login({ ...userLoginValues });
    setUser(response);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {user ? (
        <Router>
          <AuthenticatedApp setUser={setUser} user={user}/>
        </Router>
      ) : (
        <UnauthenticatedApp onSubmit={onSubmit} />
      )}
      <Footer />
    </div>
  );
};

export default App;

/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './components/bookshelf/AuthenticatedApp';
import { UnauthenticatedApp } from './components/bookshelf/UnAuthenticatedApp';

const App: FC = (): ReactElement => {
  const [user, setUser] = React.useState(null);

  const login = form => login(form).then(u => setUser(u));
  const register = form => register(form).then(u => setUser(u));
  const logout = () => {
    logout();
    setUser(null);
  };
  // createdAt: string;
  // updatedAt: string;
  // __v: number;
  // function login(formData) {
  //   console.log('login', formData);
  // }

  // function register(formData) {
  //   console.log('register', formData);
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Router>
        <AuthenticatedApp user={user} logout={logout} />
      </Router>
      {/* {user ? (
        <Router>
          <AuthenticatedApp user={user} logout={logout} />
        </Router>
      ) : (
        <UnauthenticatedApp login={login} register={register} />
      )} */}
      <Footer />
    </div>
  );
};

export default App;

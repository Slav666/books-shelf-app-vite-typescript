/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { Logo } from './components/bookshelf/logo';
import { DiscoverBooksScreen } from './components/bookshelf/DiscoverBookScreen';
import { Button } from './components/bookshelf/ReusableComponents';
import {
  Modal,
  ModalOpenButton,
  ModalContents,
} from './components/bookshelf/Modal';
import LoginForm from './components/bookshelf/Login-Register-Form';
import { AuthenticatedApp } from './components/bookshelf/AuthenticatedApp';

const App: FC = (): ReactElement => {
  const [user, setUser] = React.useState(null);

  const login = form => login(form).then(u => setUser(u));
  // const register = form => useUser.register(form).then(u => setUser(u));
  // const logout = () => {
  //   auth.logout();
  //   setUser(null);
  // };

  // function login(formData) {
  //   console.log('login', formData);
  // }

  // function register(formData) {
  //   console.log('register', formData);
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AuthenticatedApp user={user} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gridGap: '0.75rem',
          }}
        >
          <Modal>
            <ModalOpenButton>
              <Button>Login</Button>
            </ModalOpenButton>
            <ModalContents aria-label="Login form" title="Login">
              <LoginForm
                submitButton={<Button variant="primary">Login</Button>}
                onSubmit={login}
              />
            </ModalContents>
          </Modal>
          <Modal>
            <ModalOpenButton>
              <Button>Register</Button>
            </ModalOpenButton>
            <ModalContents aria-label="Registration form" title="Register">
              <LoginForm
                submitButton={<Button variant="secondary">Register</Button>}
                // onSubmit={register}
              />
            </ModalContents>
          </Modal>
        </div>
      </div>
      <main className="grow">
        <DiscoverBooksScreen />
      </main>
      <Footer />
    </div>
  );
};

export default App;

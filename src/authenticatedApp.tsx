import { jsx } from '@emotion/core';

import * as React from 'react';
import { Button } from '../src/components/bookshelf/reusableComponents';
import { Routes, Route, Link } from 'react-router-dom';
import { DiscoverBooksScreen } from './components/bookshelf/DiscoverBookScreen';
import { NotFoundScreen } from './screens/notFound';
import useLoginUser from './hooks/useLoginHook';
import { useMutation } from '@tanstack/react-query';

function AuthenticatedApp({ user }: any) {
  // const { mutate: loginUser } = useMutation(
  //   userLoginValues => useLoginUser(userLoginValues),
  //   {
  //     onSuccess: () => {
  //       store.setRequestLoading(false);
  //       toast.success('You successfully logged in');
  //       navigate(from);
  //     },
  //   },
  // );

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: 'red',
        }}
      >
        <p style={{ color: 'red' }}>Hello User: {user}</p>
        <Button
          variant="secondary"
          style={{ marginRight: '40px', marginTop: '160px' }}
          // onClick={setIsLoggedIn(false)}
        >
          Logout
        </Button>
      </div>
      <div
        style={{
          margin: '0 auto',
          padding: '4em 2em',
          maxWidth: '840px',
          width: '100%',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '1fr 3fr',
          // [mq.small]: {
          //   gridTemplateColumns: '1fr',
          //   gridTemplateRows: 'auto',
          //   width: '100%',
          // },
        }}
      >
        <div style={{ position: 'relative' }}>
          <Nav />
        </div>
        <main style={{ width: '100%' }}>
          <AppRoutes />
        </main>
      </div>
    </React.Fragment>
  );
}

function NavLink(props) {
  return (
    <Link
      style={{
        display: 'block',
        padding: '8px 15px 8px 10px',
        margin: '5px 0',
        width: '100%',
        height: '100%',
        color: 'blue',
        borderRadius: '2px',
        borderLeft: '5px solid transparent',
        ':hover': {
          color: 'red',
          textDecoration: 'none',
          background: 'pink',
        },
      }}
      {...props}
    />
  );
}

function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: '4px',
        padding: '1em 1.5em',
        border: '1px solid green',
        borderRadius: '3px',
        // [mq.small]: {
        //   position: 'static',
        //   top: 'auto',
        // },
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          padding: '0',
        }}
      >
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/discover" element={<DiscoverBooksScreen />} />
      {/* <Route path="/book/:bookId" element={<BookScreen user={user} />} /> */}
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export { AuthenticatedApp };

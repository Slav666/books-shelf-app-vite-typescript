import { jsx } from '@emotion/core';

import * as React from 'react';
import { Button } from './ReusableComponents';
import { Routes, Route, Link } from 'react-router-dom';
// import * as mq from './styles/media-queries';
import { IUser } from './types';
import { DiscoverBooksScreen } from './DiscoverBookScreen';

function AuthenticatedApp({ user }) {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {user}
        <Button
          variant="secondary"
          style={{ marginRight: '40px', marginTop: '160px' }}
          // onClick={logout}
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
          <AppRoutes user={user} />
        </main>
      </div>
      {/* <DiscoverBooksScreen />
      </div> */}
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
        // color: colors.text,
        borderRadius: '2px',
        borderLeft: '5px solid transparent',
        ':hover': {
          color: 'red',
          // color: colors.indigo,
          textDecoration: 'none',
          background: 'pink',
          // background: colors.gray10,
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
        // border: `1px solid ${colors.gray10}`,
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

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/discover" element={<DiscoverBooksScreen user={user} />} />
      {/* <Route path="/book/:bookId" element={<BookScreen user={user} />} />
      <Route path="*" element={<NotFoundScreen />} /> */}
    </Routes>
  );
}

export { AuthenticatedApp };

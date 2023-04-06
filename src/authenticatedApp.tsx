// import { jsx } from '@emotion/core';

import React, { useContext, FC } from 'react';
import { Button } from '../src/components/bookshelf/reusableComponents';
import { Routes, Route, Link } from 'react-router-dom';
import { DiscoverBooksScreen } from './components/bookshelf/DiscoverBookScreen';
import { NotFoundScreen } from './screens/notFound';
import DataContext from './components/bookshelf/DataContext';
import { ReadingListScreen } from './components/bookshelf/ReadingListScreen';
import FinishedListBooks from './components/bookshelf/FinishedListBooks';

type UserProps = {
  user: {
    username: string;
    password: string;
  };
  setUser: (user: string) => void;
};

const AuthenticatedApp = () => {
  const { user, setUser } = useContext(DataContext);

  const handleLoggedOut = () => {
    setUser(null);
  };

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
        <p style={{ color: 'red' }}>Hello User: {user.username} </p>
        <Button
          style={{ marginRight: '40px', marginTop: '160px' }}
          variant="secondary"
          onClick={handleLoggedOut}
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
};

const NavLink = props => {
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
};

const Nav = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: '4px',
        padding: '1em 1.5em',
        border: '1px solid green',
        borderRadius: '3px',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          padding: '0',
        }}
      >
        <li>
          <NavLink to="/list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Finished Books</NavLink>
        </li>
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const AppRoutes = () => {
  const { user, setUser } = useContext(DataContext);
  return (
    <Routes>
      <Route element={<ReadingListScreen />} path="/list" />
      <Route element={<FinishedListBooks />} path="/finished" />
      <Route element={<DiscoverBooksScreen />} path="/discover" />
      {/* <Route path="/book/:bookId" element={<BookScreen user={user} />} /> */}
      <Route element={<NotFoundScreen />} path="*" />
    </Routes>
  );
};

export { AuthenticatedApp };

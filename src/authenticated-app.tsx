// import { jsx } from '@emotion/core';

import React, { useContext, FC } from 'react';
import { Button } from './components/lib';
import { Routes, Route, Link } from 'react-router-dom';
import { DiscoverBooksScreen } from './components/discover-book-screen';
import { NotFoundScreen } from './components/not-found-screen';
import DataContext from './context/user-context';
import { ReadingListScreen } from './components/reading-books-list';
import FinishedListBooks from './components/finished-books-list';
import './app.css';
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
      <div className="login-button-position">
        <p>Hello User: {user.username} </p>
        <Button variant="secondary" onClick={handleLoggedOut}>
          Logout
        </Button>
      </div>
      <div className="discover-container">
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
  return <Link className="link-layout" {...props} />;
};

const Nav = () => {
  return (
    <nav className="navigation-position">
      <ul>
        <li>
          <NavLink to="/reading-books-list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/finished-books-list">Finished Books</NavLink>
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
      <Route element={<ReadingListScreen />} path="/reading-books-list" />
      <Route element={<FinishedListBooks />} path="/finished-books-list" />
      <Route element={<DiscoverBooksScreen />} path="/discover" />
      <Route element={<NotFoundScreen />} path="*" />
    </Routes>
  );
};

export { AuthenticatedApp };

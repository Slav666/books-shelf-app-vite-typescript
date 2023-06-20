import React from 'react';

import { Link } from 'react-router-dom';

const NavLink = props => {
  return <Link className="link-layout" {...props} />;
};

export const Nav = () => {
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

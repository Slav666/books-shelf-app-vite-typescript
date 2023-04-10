import React, { useState } from 'react';

import { BookRow } from './book-row';
import useBooks from '~/hooks/useBooks';
import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, Spinner } from '../lib';
import { IUser } from '../../utils/interface';

interface Props {
  user: IUser;
  setUser(user: IUser): void;
}

const DiscoverBooksScreen = () => {
  const { data: books } = useBooks();
  const [query, setQuery] = useState('');

  const isLoading = status === 'loading';

  const searchHandler = event => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <form onChange={searchHandler}>
        <Input placeholder="search" type="text" />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button className="search-icon">
              {isLoading ? <Spinner /> : <FaSearch aria-label="search" />}
            </button>
          </label>
        </Tooltip>
      </form>
      {books
        ?.filter(book => {
          return book?.title;
        })
        .map(book => {
          return <BookRow key={book.id} book={book} />;
        })}
    </div>
  );
};

export { DiscoverBooksScreen };

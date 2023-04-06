import React, { useState } from 'react';

import { BookRow } from './book-row';
import useBooks from '~/hooks/useBooks';
import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, Spinner } from './lib';
import { IUser } from '../utils/interface';

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
    <div
      style={{
        maxWidth: 800,
        margin: 'auto',
        width: '90vw',
        padding: '50px 0',
      }}
    >
      <form onChange={searchHandler}>
        <Input
          placeholder="search"
          style={{ width: '80%', color: 'red', marginLeft: '40px' }}
          type="text"
        />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button
              style={{
                border: '0',
                position: 'relative',
                marginLeft: '-35px',
                background: 'red',
              }}
            >
              {isLoading ? (
                <Spinner style={{ backgroundColor: 'blue' }} />
              ) : (
                <FaSearch aria-label="search" />
              )}
            </button>
          </label>
        </Tooltip>
      </form>
      {books
        ?.filter(book => {
          // console.log('FILTERING BOOK: ', book);
          return book?.title;
        })
        .map(book => {
          // console.log('FILTERED BOOK: ', book);
          return <BookRow key={book.id} book={book} />;
        })}
    </div>
  );
};

export { DiscoverBooksScreen };

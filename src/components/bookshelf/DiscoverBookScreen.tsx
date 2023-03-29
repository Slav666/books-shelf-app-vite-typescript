import React, { useState } from 'react';

import { BookRow } from './BookRow';
import useBooks from '~/hooks/useBooks';
import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, Spinner } from './reusableComponents';
import { ReadingListScreen } from './ReadingListScreen';
import { FinishedBookScreen } from './FinishedBooksScreen';
import { IUser } from '../../interface';

interface Props {
  user: IUser;
  setUser(user: IUser): void;
}

const DiscoverBooksScreen = ({ user, setUser }: Props) => {
  //slav

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
          return (
            <BookRow
              key={book.title}
              book={book}
              user={user}
              setUser={setUser}
            />
          );
        })}
      <ReadingListScreen user={user} setUser={setUser} />
      <FinishedBookScreen />
    </div>
  );
};

export { DiscoverBooksScreen };

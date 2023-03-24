import React, { useState } from 'react';

import { BookRow } from './BookRow';
import useBooks from '~/hooks/useBooks';
import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, Spinner } from './reusableComponents';
import { ReadingListScreen } from './reading-list';

function DiscoverBooksScreen({ user }) {
  const { data: books } = useBooks();
  const [query, setQuery] = useState('');

  console.log('user from discover user', user);
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
        ?.filter(val => {
          if (query === '') {
            return null;
          } else if (
            val.title.toString().toLowerCase().includes(query.toLowerCase())
          ) {
            return val;
          }
        })
        .map(val => {
          return <BookRow key={val.title} val={val} user={user} />;
        })}
      <ReadingListScreen user={user} />
    </div>
  );
}

export { DiscoverBooksScreen };

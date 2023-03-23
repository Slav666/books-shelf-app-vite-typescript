import React, { useState } from 'react';

import { BookRow } from './BookRow';
import useBooks from '~/hooks/useBooks';
import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, BookListUL, Spinner } from './reusableComponents';
import { ReadingListScreen } from './reading-list';
function DiscoverBooksScreen({ user }) {
  const { data: books } = useBooks();
  const [query, setQuery] = useState('');

  const isLoading = status === 'loading';
  // const isSuccess = status === 'success';
  // const isError = status === 'error';

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
        .map((val, key) => {
          return <BookRow key={key} val={val} user={user} />;
        })}
      <ReadingListScreen user={user} />
      {/* {isError ? (
        <div style={{ color: 'red' }}>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null} */}
      {/* <div>
        {queried ? null : (
          <div
            style={{ marginTop: 20, fontSize: '1.2em', textAlign: 'center' }}
          >
            <p>Welcome to the discover page.</p>
            <p>Here, let me load a few books for you...</p>
            {isLoading ? (
              <div style={{ width: '100%', margin: 'auto' }}>
                <Spinner />
              </div>
            ) : isSuccess && books.length ? (
              <p>Here you go! Find more books with the search bar above.</p>
            ) : isSuccess && !books.length ? (
              <p>
                Hmmm... I could not find any books to suggest for you. Sorry.
              </p>
            ) : null}
          </div>
        )}
      </div> */}

      {/* {isSuccess ? (
        books.length ? (
          <BookListUL style={{ marginTop: 20 }}>
            {books.map(book => (
              <li key={book.id} aria-label={book.title}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null} */}
    </div>
  );
}

export { DiscoverBooksScreen };

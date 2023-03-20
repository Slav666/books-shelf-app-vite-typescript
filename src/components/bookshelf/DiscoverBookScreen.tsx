import React, { useState } from 'react';

import { BookRow } from './BookRow';
import { useParams } from 'react-router-dom';
import useBooksByTitle from '~/hooks/useBooksByTitle';
import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, BookListUL, Spinner } from './reusableComponents';

function DiscoverBooksScreen({ user }) {
  const { title } = useParams();
  const { data } = useBooksByTitle(title);

  console.log('data', data);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

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
          // onChange={searchHandler}
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
              // type="submit"
              // onClick={searchHandler}
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
      {data
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
    </div>
  );
}

export { DiscoverBooksScreen };

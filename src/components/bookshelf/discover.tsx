import React, { useState, useEffect } from 'react';
// import { books } from '../../mocks/fixtures/bookshelf';

import { BookRow } from './bookrow';
import { useParams } from 'react-router-dom';
import useBooksByTitle from '~/hooks/useBooksByTitle';
import useBooks from '~/hooks/useBooks';

import { Tooltip } from '@reach/tooltip';
import { FaSearch } from 'react-icons/fa';
import { Input, BookListUL, Spinner } from './reusableComponents';
// import { BookRow } from './components/book-row';
// import { client } from './utils/api-client'; {/* <small>{book.publisher}</small>

function DiscoverBooksScreen() {
  const { title } = useParams();
  const { data } = useBooksByTitle(title);

  console.log('data', data);
  // const [status, setStatus] = useState('idle');
  // const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  // const [queried, setQueried] = useState(false);
  // console.log('query', query);
  // console.log('queried', queried);
  // console.log('data', data);
  // const isLoading = status === 'loading';
  // const isSuccess = status === 'success';

  // React.useEffect(() => {
  //   if (!queried) {
  //     return;
  //   }
  //   setStatus('loading');
  //   client(`books?query=${encodeURIComponent(query)}`).then(responseData => {
  //     setData(query);
  //     setStatus('success');
  //   });
  // }, [query, queried]);

  // function handleSearchSubmit(event) {
  //   event.preventDefault();
  //   setQueried(true);
  //   setQuery(event.target.elements.search.value);
  //   console.log(event.target.element);
  // }
  const searchHandler = event => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  return (
    //   <div
    //     style={{
    //       maxWidth: 800,
    //       margin: 'auto',
    //       width: '90vw',
    //       padding: '40px 0',
    //     }}
    //   >
    //     <form onSubmit={handleSearchSubmit}>
    //       <Input
    //         placeholder="Search books..."
    //         id="search"
    //         style={{ width: '100%' }}
    //       />
    //       <Tooltip label="Search Books">
    //         <label htmlFor="search">
    //           <button
    //             type="submit"
    //             style={{
    //               border: '0',
    //               position: 'relative',
    //               marginLeft: '-35px',
    //               background: 'transparent',
    //             }}
    //           >
    //             {isLoading ? <Spinner /> : <FaSearch aria-label="search" />}
    //           </button>
    //         </label>
    //       </Tooltip>
    //     </form>

    //     {isSuccess ? (
    //       data?.books?.length ? (
    //         <BookListUL style={{ marginTop: 20 }}>
    //           {data.books.map(book => (
    //             <li key={book.id} aria-label={book.title}>
    //               <BookRow key={book.id} book={book} />
    //             </li>
    //           ))}
    //         </BookListUL>
    //       ) : (
    //         <p>No books found. Try another search.</p>
    //       )
    //     ) : null}
    //   </div>
    <div>
      <Input
        placeholder="search"
        style={{ width: '70%' }}
        type="text"
        onChange={searchHandler}
      ></Input>

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
          return <BookRow key={key} val={val} />;
        })}
    </div>
  );
}

export { DiscoverBooksScreen };

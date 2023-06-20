import React, { FC } from 'react';

import useBooks from '~/hooks/useBooks';
import { BookRow } from './book-row';

const DiscoverBooksScreen: FC = () => {
  const { data: books } = useBooks();
  return (
    <div className="search-container">
      {books
        ?.filter(book => {
          return book?.title;
        })
        .map(book => {
          return (
            <BookRow key={book.id} book={book} books={[]} user={undefined} />
          );
        })}
    </div>
  );
};

export { DiscoverBooksScreen };

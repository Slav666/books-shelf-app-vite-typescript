import React, { FC, useState, useRef, useEffect } from 'react';

import useBooks from '~/hooks/useBooks';
import { BookRow } from './book-row';

const DiscoverBooksScreen: FC = () => {
  const { data: books } = useBooks();
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  // Focus the input element and start cursor flashing on the first page render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Filter books based on the search query
  const filteredBooks = books?.filter(book => {
    return book?.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        <input
          ref={inputRef}
          className=" max-w-[800px]  rounded-md border border-gray-300 px-4 py-2 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search books..."
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredBooks?.map(book => {
        return (
          <BookRow
            key={book.id}
            book={book}
            books={[]}
            isBookAdded={[]}
            user={undefined}
          />
        );
      })}
    </div>
  );
};

export { DiscoverBooksScreen };

import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import SingleReadBook from './reading-book';

const ReadingListScreen: FC = (): ReactElement => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user.books.length === 0 ? (
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-2xl">No reading books</p>
        </div>
      ) : (
        <ul>
          {user.books.map(book => (
            <SingleReadBook key={book.id} book={book} bookToDeleteId={0} />
          ))}
        </ul>
      )}
    </>
  );
};

export { ReadingListScreen };

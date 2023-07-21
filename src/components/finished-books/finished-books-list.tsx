import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import FinishedSingleBook from './finished-book';
import { IBook } from '~/utils/interface';

const FinishedListBooks: FC = (): ReactElement => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.finishedBooks.length === 0 ? (
        <div className="flex h-screen items-center justify-center">
          <p className="text-3xl">No finished books</p>
        </div>
      ) : (
        <ul>
          {user.finishedBooks.map((finishedBook: IBook) => (
            <FinishedSingleBook
              key={finishedBook.id}
              finishedBook={finishedBook}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default FinishedListBooks;

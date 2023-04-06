import React, { useContext, FC } from 'react';
import { IBook } from '~/utils/interface';
import FinishedSingleBook from './finished-book';
import DataContext from '../context/user-context';

interface Props {
  finishedBook: IBook;
}

const FinishedListBooks: FC = () => {
  const { user } = useContext(DataContext);

  return (
    <ul>
      {user.finishedBooks.map(finishedBook => {
        return (
          <FinishedSingleBook
            key={finishedBook.id}
            finishedBook={finishedBook}
          />
        );
      })}
    </ul>
  );
};

export default FinishedListBooks;

import React, { useContext, FC } from 'react';
import { IBook } from '~/interface';
import FinishedSingleBook from './FinishedSingleBook';
import DataContext from './DataContext';

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

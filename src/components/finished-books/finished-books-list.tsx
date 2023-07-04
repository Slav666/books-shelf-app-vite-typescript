import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import FinishedSingleBook from './finished-book';
import { IBook } from '~/utils/interface';

const FinishedListBooks: FC = (): ReactElement => {
  const { user } = useContext(UserContext);

  return (
    <ul>
      {user.finishedBooks.map((finishedBook: IBook) => (
        <FinishedSingleBook key={finishedBook.id} finishedBook={finishedBook} />
      ))}
    </ul>
  );
};

export default FinishedListBooks;

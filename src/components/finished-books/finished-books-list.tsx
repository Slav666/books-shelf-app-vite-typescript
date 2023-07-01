import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import FinishedSingleBook from './finished-book';

const FinishedListBooks: FC = (): ReactElement => {
  const { user } = useContext(UserContext);

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

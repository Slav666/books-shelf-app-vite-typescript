import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import SingleReadBook from './reading-book';

const ReadingListScreen: FC = (): ReactElement => {
  const { user } = useContext(UserContext);
  return (
    <ul>
      {user.books.map(book => (
        <SingleReadBook key={book.id} book={book} bookToDeleteId={0} />
      ))}
    </ul>
  );
};

export { ReadingListScreen };

import React, { useContext, FC, ReactElement } from 'react';

import DataContext from '../../context/user-context';
import SingleReadBook from './reading-book';

const ReadingListScreen: FC = (): ReactElement => {
  const { user } = useContext(DataContext);
  return (
    <ul>
      {user.books.map(book => (
        <SingleReadBook key={book.id} book={book} bookToDeleteId={0} />
      ))}
    </ul>
  );
};

export { ReadingListScreen };

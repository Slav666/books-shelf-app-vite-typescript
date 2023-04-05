import React, { useContext } from 'react';
import { IUser } from '~/interface';
import SingleReadBook from './SingleReadBook';
import DataContext from './DataContext';

interface Props {
  user: IUser;
  // setUser(user: IUser): void;
  // newValueUser: IUser;
}

const ReadingListScreen = () => {
  const { user } = useContext(DataContext);
  return (
    <ul>
      {user.books.map(book => (
        <SingleReadBook key={book.id} book={book} />
      ))}
    </ul>
  );
};

export { ReadingListScreen };

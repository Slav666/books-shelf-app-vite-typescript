import React, { useContext, FC, useEffect } from 'react';
import { IUser } from '~/interface';
import SingleReadBook from './SingleReadBook';
import DataContext from './DataContext';
import useRemoveBookFromUser from '~/hooks/useRemoveBookFromUser';
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

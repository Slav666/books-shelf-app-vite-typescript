import React, { useContext, FC } from 'react';
import { IUser } from '~/utils/interface';
import SingleReadBook from './reading-book';
import DataContext from '../../context/user-context';

interface Props {
  user: IUser;
  // setUser(user: IUser): void;
  // newValueUser: IUser;
}

const ReadingListScreen: FC<Props> = () => {
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

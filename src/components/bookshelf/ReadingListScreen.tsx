import React from 'react';
// import useRemoveBookFromUser from '~/hooks/useRemoveBookFromUser';
// import useFinishedBookFromUser from '~/hooks/useFinishedBookFromUser';
import { IUser } from '~/interface';
import SingleReadBook from './SingleReadBook';

interface Props {
  user: IUser;
  setUser(user: IUser): void;
  newValueUser: IUser;
}

const ReadingListScreen = ({ user, setUser }: Props) => {
  // console.log('user from reading list screen', user);
  return (
    <ul>
      {user.books.map(book => (
        <SingleReadBook
          key={book.id}
          book={book}
          setUser={setUser}
          user={user}
        />
      ))}
    </ul>
  );
};

export { ReadingListScreen };

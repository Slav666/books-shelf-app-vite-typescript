import React, { FC, useContext } from 'react';

import UserContext from '../../context/user-context';
import { AuthenticationContextType } from '../../context/user-context';
import useAddBookToUser from '~/hooks/useAddBookToUser';
import { IBook, IUser } from '../../utils/interface';
import { Button } from '../lib';

export interface Props {
  book: IBook;
  user: IUser;
  books: IBook[];
  isBookAdded: (IBook | undefined)[];
}

const BookRow: FC<Props> = ({ book }) => {
  const { user, setUser } = useContext<AuthenticationContextType>(UserContext);
  const { mutateAsync, status, error } = useAddBookToUser();

  const isBookAdded = user.books.find(userBook => userBook.id === book.id);

  const addBookToUserHandler = async (): Promise<void> => {
    const result = await mutateAsync({
      ...user,
      books: [...user.books, book],
    });
    setUser(result);
  };

  return (
    <div className="mx-auto my-4 max-w-[500px] rounded-[20px] border-2 border-solid border-black p-4">
      <div className="flex items-center justify-center ">
        <img
          alt={`${book.title} book cover`}
          className="max-h-[250px] w-auto"
          src={book.coverImageUrl}
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-blue-500">{book.title}</h2>
        <div className="text-sm text-gray-600">{book.author}</div>
        <small className="mt-2 block">
          {book.synopsis.substring(0, 700)}...
        </small>
      </div>
      <div className="mt-4 text-center">
        <Button
          disabled={isBookAdded}
          variant="primary"
          onClick={addBookToUserHandler}
        >
          {isBookAdded ? 'Book Added' : 'Add book to reading'}
        </Button>
      </div>
    </div>
  );
};

export { BookRow };

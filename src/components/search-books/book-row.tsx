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
    <div className="relative m-12 flex max-w-screen-lg items-center justify-end">
      <section className="grid min-h-[270px] grow grid-cols-[140px,1fr] gap-10 rounded-md border border-black p-5 text-white">
        <img
          alt={`${book.title} book cover`}
          className="max-h-full w-full"
          src={book.coverImageUrl}
        />
        <div>
          <h2 className="text-xl font-bold text-blue-500">{book.title}</h2>
          <div className="mt-2 text-sm italic">{book.author}</div>
          <small>{book.synopsis.substring(0, 500)}...</small>
        </div>
        <Button
          disabled={isBookAdded}
          variant="primary"
          onClick={addBookToUserHandler}
        >
          {isBookAdded ? 'Book Added' : 'Add book to reading'}
        </Button>
      </section>
    </div>
  );
};

export { BookRow };

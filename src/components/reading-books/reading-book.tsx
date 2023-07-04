import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import useRemoveBookFromUser from '~/hooks/useRemoveBookFromUser';
import useFinishedBookFromUser from '~/hooks/useFinishedBookFromUser';
import { IBook } from '~/utils/interface';
import { AuthenticationContextType } from '../../context/user-context';
import { Button } from '../lib';

interface Props {
  book: IBook;
  bookToDeleteId: number;
}

const SingleReadBook: FC<Props> = ({ book }): ReactElement => {
  const { user, setUser } = useContext<AuthenticationContextType>(UserContext);
  const { mutateAsync: removeBook } = useRemoveBookFromUser();
  const { mutateAsync: finishedBook } = useFinishedBookFromUser();

  const removeBookFromUserHandler = async () => {
    const result = await removeBook({
      bookToDeleteId: book.id,
      userId: user.id,
    });
    setUser(result);
  };

  const addFinishedBookHandler = async () => {
    const result = await finishedBook({
      ...user,
      finishedBooks: [...user.finishedBooks, book],
      books: user.books.filter(testBook => testBook.id !== book.id),
    });
    setUser(result);
  };

  return book ? (
    <div className="relative m-12 flex max-w-screen-lg items-center justify-end">
      <section className="grid min-h-[270px] grow grid-cols-[140px,1fr] gap-10 rounded-md border border-black p-5 text-white">
        <img
          alt={`${book.title} book cover`}
          className="max-h-full w-full"
          src={book.coverImageUrl}
        />
        <div>
          <h2 className="text-xl font-bold text-blue-500">{book.title}</h2>
          <p className="mt-2 text-sm italic">{book.author}</p>
          <small>{book.synopsis.substring(0, 500)}...</small>
        </div>
        <div className="flex gap-4">
          <Button variant="primary" onClick={removeBookFromUserHandler}>
            Remove book
          </Button>
          <Button variant="primary" onClick={addFinishedBookHandler}>
            Finished Book.
          </Button>
        </div>
      </section>
    </div>
  ) : (
    <p style={{ color: 'red' }}>No books</p>
  );
};
export default SingleReadBook;

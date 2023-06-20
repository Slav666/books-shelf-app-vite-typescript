import React, { FC, useContext } from 'react';

import DataContext from '../../context/user-context';
import { AuthenticationContextType } from '../../context/user-context';
import useAddBookToUser from '~/hooks/useAddBookToUser';
import { IBook, IUser } from '../../utils/interface';
import { Button } from '../lib';

export interface Props {
  book: IBook;
  user: IUser;
  books: IBook[];
}

const BookRow: FC<Props> = ({ book }) => {
  const { user, setUser } = useContext<AuthenticationContextType>(DataContext);
  const { mutateAsync } = useAddBookToUser();

  const addBookToUserHandler = async (): Promise<void> => {
    const result = await mutateAsync({
      ...user,
      books: [...user.books, book],
    });
    setUser(result);
    console.log('result', result);
  };

  return (
    <div className="book-row-container">
      <div className="book-row">
        <div>
          <img
            alt={`${book.title} book cover`}
            className="book-row-image"
            src={book.coverImageUrl}
          />
        </div>
        <div>
          <div>
            <div>
              <h2 className="book-row-title">{book.title}</h2>
            </div>
            <div>
              <div className="book-row-author">{book.author}</div>
              <small>{book.publisher}</small>
            </div>
          </div>
          <small className="book-row-synopsis">
            {book.synopsis.substring(0, 500)}...
          </small>
        </div>

        <div>
          <Button
            className="book-row-button"
            // disabled={
            //   user.books.find(userBook => userBook.id === book.id)
            //     ? true
            //     : false
            // }
            variant="primary"
            onClick={addBookToUserHandler}
          >
            Add book to reading
          </Button>
        </div>
      </div>
    </div>
  );
};

export { BookRow };

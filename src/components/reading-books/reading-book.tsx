import React, { useContext, FC, ReactElement } from 'react';

import DataContext from '../../context/user-context';
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
  const { user, setUser } = useContext<AuthenticationContextType>(DataContext);
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

  if (book) {
    return (
      <div className="book-row-container">
        <div className="book-row">
          <div>
            <img
              alt={`${book?.title} book cover`}
              className="book-row-image"
              src={book?.coverImageUrl}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <h2 className="book-row-title">{book?.title}</h2>
              </div>
              <div style={{ marginLeft: 10 }}>
                <div className="book-row-author">{book?.author}</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button variant="primary" onClick={removeBookFromUserHandler}>
              Remove book from the list.
            </Button>
            <Button
              // disabled={
              //   user.finishedBooks.find(userBook => userBook.id === book.id)
              //     ? true
              //     : false
              // }
              variant="primary"
              onClick={addFinishedBookHandler}
            >
              Finished Book.
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    <p>No books</p>;
  }
};
export default SingleReadBook;

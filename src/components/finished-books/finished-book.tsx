import React, { useContext, FC, ReactElement } from 'react';

import UserContext from '../../context/user-context';
import useRemoveFinishedBook from '../../hooks/useRemoveFinishedBook';
import { IBook, IUser } from '~/utils/interface';
import { Button } from '../lib';
interface Props {
  finishedBook: IBook;
}

const FinishedSingleBook: FC<Props> = ({ finishedBook }): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  const {
    mutateAsync: removeFinishedBook,
    status,
    error,
  } = useRemoveFinishedBook();

  const removeFinishedBookHandler = async () => {
    const result = await removeFinishedBook({
      bookToDeleteId: finishedBook.id,
      userId: user.id,
    });
    setUser(result);
  };

  if (finishedBook) {
    return (
      <div className="book-row-container">
        <div className="book-row">
          <div>
            <img
              alt={`${finishedBook.title} book cover`}
              className="book-row-image"
              src={finishedBook.coverImageUrl}
            />
          </div>
          <div>
            <div>
              <div>
                <h2 className="book-row-title">{finishedBook.title}</h2>
              </div>
              <div>
                <div className="book-row-author">{finishedBook.author}</div>
              </div>
            </div>
            <small className="book-row-synopsis">
              {finishedBook.synopsis.substring(0, 500)}...
            </small>
          </div>

          <div>
            <Button variant="primary" onClick={removeFinishedBookHandler}>
              Remove book
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    <p>No books</p>;
  }
};
export default FinishedSingleBook;

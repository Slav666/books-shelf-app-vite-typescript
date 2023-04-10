import React, { useContext } from 'react';
import { IBook } from '~/utils/interface';
import useRemoveFinishedBook from '../../hooks/useRemoveFinishedBook';
import DataContext from '../../context/user-context';
import { Button } from '../lib';
interface Props {
  finishedBook: IBook;
}

const FinishedSingleBook = ({ finishedBook }: Props) => {
  const { user, setUser } = useContext(DataContext);
  const { mutateAsync: removeFinishedBook } = useRemoveFinishedBook();

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

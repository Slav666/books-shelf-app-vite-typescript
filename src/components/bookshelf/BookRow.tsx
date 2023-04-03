import React, { FC, useContext } from 'react';
import useAddBookToUser from '~/hooks/useAddBookToUser';
import { IBook } from '../../interface';
import DataContext from './DataContext';

export interface Props {
  book: IBook;
}

const BookRow: FC = ({ book }: Props) => {
  const { user, setUser } = useContext(DataContext);
  const { mutateAsync } = useAddBookToUser();

  const addBookToUserHandler = async () => {
    const result = await mutateAsync({
      ...user,
      books: [...user.books, book],
    });
    setUser(result);
  };

  return (
    <div
      style={{
        maxWidth: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        margin: '3rem',
      }}
    >
      <div
        style={{
          minHeight: 270,
          flexGrow: 2,
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gridGap: 20,
          border: '1px solid red',
          color: 'red',
          padding: '1.25em',
          borderRadius: '3px',
        }}
      >
        <div
          style={{
            width: 140,
          }}
        >
          <img
            alt={`${book.title} book cover`}
            src={book.coverImageUrl}
            style={{ maxHeight: '100%', width: '100%' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: '1.25em',
                  margin: '0',
                  color: 'blue',
                }}
              >
                {book.title}
              </h2>
            </div>
            <div style={{ marginLeft: 10 }}>
              <div
                style={{
                  marginTop: '0.4em',
                  fontStyle: 'italic',
                  fontSize: '0.85em',
                }}
              >
                {book.author}
              </div>
              <small>{book.publisher}</small>
            </div>
          </div>
          <small style={{ whiteSpace: 'break-spaces', display: 'block' }}>
            {book.synopsis.substring(0, 500)}...
          </small>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            style={{ backgroundColor: 'green', marginRight: '2px' }}
            onClick={addBookToUserHandler}
          >
            Add book to reading
          </button>
        </div>
      </div>
    </div>
  );
};

export { BookRow };

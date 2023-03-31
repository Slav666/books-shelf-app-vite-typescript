import React from 'react';
import useRemoveBookFromUser from '~/hooks/useRemoveBookFromUser';
import useFinishedBookFromUser from '~/hooks/useFinishedBookFromUser';
import { IUser, IBook } from '~/interface';

interface Props {
  user: IUser;
  setUser(user: IUser): void;
  newValueUser: IUser;
  book: IBook;
}

const SingleReadBook = ({ user, setUser, book }: Props) => {
  // console.log('user from single read book', user);
  const { mutateAsync: removeBook, data } = useRemoveBookFromUser();
  const { mutateAsync: finishedBook } = useFinishedBookFromUser();
  console.log('response data from single read book!!!', data);

  const RemoveBookFromUserHandler = async () => {
    // console.log('user from remove book front handler', user);
    // const newValueUser = { ...user };
    await removeBook({ bookToDeleteId: book.id, userId: user.id });

    // setUser(user);
  };

  const addFinishedBookHandler = async () => {
    const newValueUser = { ...user, finishedBooks: user.book };
    // console.log('finished book ', newValueUser);
    await finishedBook(newValueUser);
    setUser(newValueUser);
  };
  if (book) {
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
        Reading Books:
        <div
          // aria-labelledby={id}
          style={{
            minHeight: 270,
            flexGrow: 2,
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gridGap: 20,
            border: '3px solid blue',
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
              alt={`${book?.title} book cover`}
              src={book?.coverImageUrl}
              style={{ maxHeight: '100%', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <h2
                  // id={id}
                  style={{
                    fontSize: '1.25em',
                    margin: '0',
                    color: 'blue',
                  }}
                >
                  {book?.title}
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
                  {book?.author}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              style={{ backgroundColor: 'green', marginRight: '2px' }}
              onClick={RemoveBookFromUserHandler}
            >
              Remove book from the list.
            </button>
            <button
              style={{ backgroundColor: 'yellow', marginRight: '2px' }}
              onClick={addFinishedBookHandler}
            >
              Finished Book.
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No books</p>;
  }
};
export default SingleReadBook;

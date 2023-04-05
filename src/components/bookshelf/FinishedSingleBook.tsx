import React from 'react';
import { IBook } from '~/interface';

interface Props {
  finishedBook: IBook;
}

const FinishedSingleBook = ({ finishedBook }: Props) => {
  if (finishedBook) {
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
        Finished Books:
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
              alt={`${finishedBook?.title} book cover`}
              src={finishedBook?.coverImageUrl}
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
                  {finishedBook?.title}
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
                  {finishedBook?.author}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              style={{ backgroundColor: 'green', marginRight: '2px' }}
              // onClick={removeBookFromUserHandler}
            >
              Remove book from the list.
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    <p>No books</p>;
  }
};
export default FinishedSingleBook;

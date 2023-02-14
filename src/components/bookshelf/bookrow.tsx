import React from 'react';
import { IBooks } from '~/utility/interface';
import { useParams } from 'react-router-dom';
import useBooksByTitle from '~/hooks/useBooksByTitle';

function BookRow({ val }) {
  // console.log('Book row data', data);
  // console.log('book', book);
  // const { title } = useParams();
  // const { data: booksByTitle, status } = useBooksByTitle(title);
  // console.log('book', book);
  // const { title, author, coverImageUrl } = data;

  // const id = `book-row-book-${book.id}`;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      <div
        // aria-labelledby={id}
        style={{
          minHeight: 270,
          flexGrow: 2,
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gridGap: 20,
          border: '1px solid red',
          // border: `1px solid ${colors.gray20}`,
          // color: colors.text,
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
            alt={`${val.title} book cover`}
            src={val.coverImageUrl}
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
                  // color: colors.indigo,
                }}
              >
                {val.title}
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
                {val.author}
              </div>
              <small>{val.publisher}</small>
            </div>
          </div>
          <small style={{ whiteSpace: 'break-spaces', display: 'block' }}>
            {val.synopsis.substring(0, 500)}...
          </small>
        </div>
      </div>
    </div>
  );
}

export { BookRow };

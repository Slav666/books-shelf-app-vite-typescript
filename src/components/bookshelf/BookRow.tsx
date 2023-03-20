import React from 'react';
import useLoginUser from '~/hooks/useLoginHook';

export interface Props {
  val: any;
}

const BookRow = ({ val, user }: Props) => {
  const addBookHandler = () => {
    console.log('Should be login User', user);
    console.log('Val id', val.id);
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
        // aria-labelledby={id}
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
        {user.username}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            style={{ backgroundColor: 'green', marginRight: '2px' }}
            onClick={addBookHandler}
          >
            Add book to reading
          </button>
          <button style={{ backgroundColor: 'yellow', marginRight: '2px' }}>
            Add book as read
          </button>
          <button style={{ backgroundColor: 'blue' }}>
            Remove book from the list
          </button>
        </div>
      </div>
    </div>
  );
};

export { BookRow };

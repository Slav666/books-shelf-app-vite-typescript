import React, { FC } from 'react';
import useFinishedBookFromUser from '~/hooks/useFinishedBookFromUser';

const FinishedBookScreen: FC = () => {
  const { data: user } = useFinishedBookFromUser();
  // const user = useQuery(['user', useSingleUser()]);
  // console.log('Title', user.finishedBooks.title);
  if (user?.finishedBooks) {
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
              alt={`${user?.finishedBooks?.title} book cover`}
              src={user?.finishedBooks?.coverImageUrl}
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
                  {user?.finishedBooks?.title}
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
                  {user?.finishedBooks.author}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button style={{ backgroundColor: 'green', marginRight: '2px' }}>
              Remove book from the list.
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>You have no finished books </p>;
  }
};

export { FinishedBookScreen };

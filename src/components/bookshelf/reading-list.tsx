import React from 'react';
import useLoginUser from '~/hooks/useLoginHook';

function ReadingListScreen({ user }) {
  const [newValue, setNewValue] = React.useState({});
  const { data } = useLoginUser();
  console.log('reading lis login user', data);

  const RemoveBookFromUserHandler = async () => {
    const newValue = { ...user };
    delete user.val;
    const userWithRemovedBook = await setNewValue(newValue);
    console.log('new object', userWithRemovedBook);
    console.log('user from handler', user);
    await mutateAsync({ userWithRemovedBook });
  };

  if (user?.val) {
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
        Test
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
              alt={`${user?.val?.title} book cover`}
              src={user?.val?.coverImageUrl}
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
                  {user?.val?.title}
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
                  {user?.val?.author}
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
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No books to read</p>;
  }
}

export { ReadingListScreen };

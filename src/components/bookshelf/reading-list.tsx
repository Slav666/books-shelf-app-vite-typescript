import * as React from 'react';
// import { Link } from './reusableComponents';
// import { ListItemList } from 'components/list-item-list';
import RemoveBookFromUser from '~/hooks/removeBookFromUser';

function ReadingListScreen({ user }) {
  const [newValue, setNewValue] = React.useState({});
  const { mutateAsync } = RemoveBookFromUser({ user });

  const RemoveBookFromUserHandler = async () => {
    const newValue = { ...user };
    delete user.val;
    const userWithRemovedBook = setNewValue(newValue);
    console.log('new object', userWithRemovedBook);
    console.log('user from handler', user);
    await mutateAsync({ userWithRemovedBook });
  };

  if (user.val) {
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
// );
// <ListItemList
//   filterListItems={li => !li.finishDate}
//   noListItems={
//     <p>
//       Hey there! Welcome to your bookshelf reading list. Get started by
//       heading over to <Link to="/discover">the Discover page</Link> to add
//       books to your list.
//     </p>
//   }
//   noFilteredListItems={
//     <p>
//       Looks like you've finished all your books! Check them out in your{' '}
//       <Link to="/finished">finished books</Link> or{' '}
//       <Link to="/discover">discover more</Link>.
//     </p>
//   }
// />

export { ReadingListScreen };

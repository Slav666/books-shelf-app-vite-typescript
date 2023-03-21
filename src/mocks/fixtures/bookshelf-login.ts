const users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
    // data: null,
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
    // data: null,
  },
  {
    id: 3,
    username: 'user3',
    password: 'password3',
    // data: null,
  },
  {
    id: 4,
    username: 'user4',
    password: 'password4',
    // data: null,
  },
];

const getUsers = () => users;

const getSingleUser = getUser => {
  const currentUser = users.find(
    user =>
      user.username === getUser.username && user.password === getUser.password,
  );
  return currentUser;
};

const registerNewUser = newUserData => {
  if (users.find(user => user.username === newUserData.username)) {
    return alert('User already registered');
  } else {
    users.push(newUserData);
    return newUserData;
  }
};

const addBookToUser = userWithNewBook => {
  console.log('add book to user', userWithNewBook);
  const userToUpdate = users.find(
    user => user.username === userWithNewBook.username,
  );
  console.log('user to update:!', userToUpdate);
  // const result = (userToUpdate.data = userWithNewBook.val);
  // const final = users.push(result);
  // userToUpdate = userWithNewBook
  // if (userToUpdate.data === userWithNewBook.val) {
  //   return false;
  // } else {
  //   const updateData = users.map(user => user.data === userWithNewBook.val);
  //   users = updateData;
  //   return true;
  // }

  // users.push(userWithNewBook);
  // console.log('user with added book', userWithNewBook);
};

export { getSingleUser, getUsers, registerNewUser, addBookToUser };

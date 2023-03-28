let users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
  },
  {
    id: 3,
    username: 'user3',
    password: 'password3',
  },
  {
    id: 4,
    username: 'user4',
    password: 'password4',
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
  users = users.map(user =>
    user.username === userWithNewBook.username ? userWithNewBook : user,
  );
  const updatedUser = users.find(
    user => user.username === userWithNewBook.username,
  );
  return updatedUser;
};

//This below function is exactly the same as above
const removeBookFromUser = userWithoutBook => {
  users = users.map(user =>
    user.username === userWithoutBook.username ? userWithoutBook : user,
  );
  console.log('Update Users', users);
  const updatedUser = users.find(
    user => user.username === userWithoutBook.username,
  );
  console.log('Update Users', updatedUser);
  return updatedUser;
};

export {
  getSingleUser,
  getUsers,
  registerNewUser,
  addBookToUser,
  removeBookFromUser,
};

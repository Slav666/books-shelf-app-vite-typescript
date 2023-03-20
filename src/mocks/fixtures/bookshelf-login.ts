const users = [
  {
    // id: 1,
    username: 'user1',
    password: 'password1',
  },
  {
    // id: 2,
    username: 'user2',
    password: 'password2',
  },
  {
    // id: 3,
    username: 'user3',
    password: 'password3',
  },
  {
    // id: 4,
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

export { getSingleUser, getUsers, registerNewUser };

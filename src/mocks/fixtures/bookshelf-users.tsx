import { User } from '../../hooks/useUser';

const users = [
  {
    id: 1,
    username: 'User1',
    password: 'password1',
  },
  {
    id: 2,
    username: 'User2',
    password: 'password2',
  },
  {
    id: 3,
    username: 'User3',
    password: 'password-3',
  },
  {
    id: 4,
    username: 'User4',
    password: 'password-4',
  },
];

export const getMockUsers = (): User[] => users;

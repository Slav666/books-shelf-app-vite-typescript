import appHandlers from './app';
import booksHandlers from './bookshelf';
import { loginHandlers } from './bookshelf-login';
import { registerHandlers } from './bookshelf-register';
import { userWithBookHandlers } from './add-book-to-user';

const handlers = [
  ...appHandlers,
  ...booksHandlers,
  ...loginHandlers,
  ...registerHandlers,
  ...userWithBookHandlers,
];

export default handlers;

import appHandlers from './app';
import booksHandlers from './bookshelf';
import { loginHandlers } from './bookshelf-login';
import { registerHandlers } from './bookshelf-register';
import { userWithBookHandlers } from './add-book-to-user';
import { userWithoutBookHandlers } from './remove-book-from-user';
import { userWithFinishedBookHandler } from './finished-book-from-user';
import { userWithoutFinishedBookHandlers } from './remove-finished-book';

const handlers = [
  ...appHandlers,
  ...booksHandlers,
  ...loginHandlers,
  ...registerHandlers,
  ...userWithBookHandlers,
  ...userWithoutBookHandlers,
  ...userWithFinishedBookHandler,
  ...userWithoutFinishedBookHandlers,
];

export default handlers;

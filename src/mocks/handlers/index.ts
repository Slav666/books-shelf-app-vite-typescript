import appHandlers from './app';
import booksHandlers from './bookshelf';
import { loginHandlers } from './bookshelf-login';
import { registerHandlers } from './bookshelf-register';

const handlers = [
  ...appHandlers,
  ...booksHandlers,
  ...loginHandlers,
  ...registerHandlers,
];

export default handlers;

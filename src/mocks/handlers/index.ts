import appHandlers from './app';
import booksHandlers from './bookshelf';
import { loginHandlers } from './bookshelf-login';

const handlers = [...appHandlers, ...booksHandlers, ...loginHandlers];

export default handlers;

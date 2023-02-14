import blogHandlers from './blog';
import appHandlers from './app';
import booksHandlers from './bookshelf';

const handlers = [...blogHandlers, ...appHandlers, ...booksHandlers];

export default handlers;

import appHandlers from './app';
import booksHandlers from './bookshelf';

const handlers = [...appHandlers, ...booksHandlers];

export default handlers;

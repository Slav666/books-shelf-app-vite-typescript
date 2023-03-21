import { RequestHandler, rest } from 'msw';
import { getBooks } from '../fixtures/bookshelf';

const URL_PATH = '/api/books/';

const getBooksHandler: RequestHandler = rest.get(URL_PATH, (req, res, ctx) => {
  const books = getBooks();
  return res(ctx.status(200), ctx.json(books));
});

const handlers = [getBooksHandler];

export default handlers;

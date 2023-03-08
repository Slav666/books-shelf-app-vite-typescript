import { RequestHandler, rest } from 'msw';
import { getBooks, getBooksByTitle } from '../fixtures/bookshelf';

const URL_PATH = '/api/books/';

const getBooksHandler: RequestHandler = rest.get(URL_PATH, (req, res, ctx) => {
  const books = getBooks();
  return res(ctx.status(200), ctx.json(books));
});

const getBooksByTitleHandler = rest.get(
  `${URL_PATH}:title`,
  async (req, res, ctx) => {
    console.log('title form getBooksByTitle', req.params.title);
    return res(ctx.status(200), ctx.json(getBooksByTitle(req.params.title)));
  },
);

const handlers = [getBooksHandler, getBooksByTitleHandler];

export default handlers;

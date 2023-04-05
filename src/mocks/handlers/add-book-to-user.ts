import { rest } from 'msw';
import { addBookToUser, getSingleUser } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/add-book-to-user/';
const addBookToUserHandler = rest.put(`${URL_PATH}`, async (req, res, ctx) => {
  const userWithBook = await req.json();
  const result = addBookToUser(userWithBook);
  return res(ctx.status(200), ctx.json(getSingleUser(result)));
});

const userWithBookHandlers = [addBookToUserHandler];

export { userWithBookHandlers };

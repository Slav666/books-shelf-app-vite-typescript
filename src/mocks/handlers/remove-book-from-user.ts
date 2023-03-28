import { rest } from 'msw';
import { getSingleUser, removeBookFromUser } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/remove-book-from-user/';
const removeBookFromUserHandler = rest.put(
  `${URL_PATH}`,
  async (req, res, ctx) => {
    const userWithoutBook = await req.json();
    // console.log('Req body', req.body);
    const result = removeBookFromUser(userWithoutBook);
    // console.log('result msw handler', result);
    return res(ctx.status(200), ctx.json(getSingleUser(result)));
  },
);

const userWithoutBookHandlers = [removeBookFromUserHandler];

export { userWithoutBookHandlers };

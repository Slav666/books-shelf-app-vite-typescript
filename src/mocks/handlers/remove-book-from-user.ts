import { rest } from 'msw';
import {
  addBookToUser,
  getSingleUser,
  removeBookFromUser,
} from '../fixtures/bookshelf-login';

const URL_PATH = '/api/remove-book-from-user/';
const removeBookFromUserHandler = rest.put(`${URL_PATH}`, (req, res, ctx) => {
  // console.log('Req body', req.body);
  const result = removeBookFromUser(req.body);
  // console.log('result msw handler', result);
  return res(ctx.status(200), ctx.json(getSingleUser(result)));
});

const userWithoutBookHandlers = [removeBookFromUserHandler];

export { userWithoutBookHandlers };

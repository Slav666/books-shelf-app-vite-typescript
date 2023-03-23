import { rest } from 'msw';
import { addBookToUser, getSingleUser } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/add-book-to-user/';
const addBookToUserHandler = rest.put(`${URL_PATH}`, (req, res, ctx) => {
  // console.log('Req body', req.body);
  const result = addBookToUser(req.body.userWithBook);
  // console.log('result msw handler', result);
  return res(ctx.status(200), ctx.json(getSingleUser(result)));
});

const userWithBookHandlers = [addBookToUserHandler];

export { userWithBookHandlers };

import { rest } from 'msw';
import {
  finishedBookFromUser,
  getSingleUser,
} from '../fixtures/bookshelf-login';

const URL_PATH = '/api/finished-book-by-user/';
const finishedBookHandler = rest.put(`${URL_PATH}`, async (req, res, ctx) => {
  // console.log('Req body', req.body);
  const userWithFinishedBook = await req.json();
  console.log('user with finished book from handler', userWithFinishedBook);
  const result = finishedBookFromUser(userWithFinishedBook);
  console.log('result msw handler user with finished book', result);
  return res(ctx.status(200), ctx.json(getSingleUser(result)));
});

const userWithFinishedBookHandler = [finishedBookHandler];

export { userWithFinishedBookHandler };

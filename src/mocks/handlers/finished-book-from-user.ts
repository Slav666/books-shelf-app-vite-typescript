import { rest } from 'msw';
import {
  finishedBookFromUser,
  getSingleUser,
} from '../fixtures/bookshelf-login';

const URL_PATH = '/api/finished-book-by-user/';
const finishedBookHandler = rest.put(`${URL_PATH}`, async (req, res, ctx) => {
  const userWithFinishedBook = await req.json();
  const result = finishedBookFromUser(userWithFinishedBook);
  return res(ctx.status(200), ctx.json(result));
});

const userWithFinishedBookHandler = [finishedBookHandler];

export { userWithFinishedBookHandler };

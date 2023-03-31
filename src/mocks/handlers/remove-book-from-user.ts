import { rest } from 'msw';
import {
  getSingleUser,
  removeBookFromUser,
  getUsers,
} from '../fixtures/bookshelf-login';

const URL_PATH = '/api/remove-book-from-user/';
const removeBookFromUserHandler = rest.delete(
  `${URL_PATH}:id`,
  async (req, res, ctx) => {
    const result = await removeBookFromUser(req.params.id, req.body.userId);
    // console.log('req params is', req.params.id);
    // console.log('req params userId', req.body.userId);
    console.log('Result', result);
    return result
      ? res(ctx.status(200), ctx.json(result))
      : res(ctx.status(400), ctx.json({ error: 'Bad request' }));
  },
);

const userWithoutBookHandlers = [removeBookFromUserHandler];

export { userWithoutBookHandlers };

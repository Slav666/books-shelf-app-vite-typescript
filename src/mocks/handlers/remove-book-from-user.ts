import { rest } from 'msw';
import { removeBookFromUser } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/remove-book-from-user/';
const removeBookFromUserHandler = rest.delete(
  `${URL_PATH}:id`,
  async (req, res, ctx) => {
    const result = await removeBookFromUser(req.params.id, req.body.userId);
    return result
      ? res(ctx.status(200), ctx.json(result))
      : res(ctx.status(400), ctx.json({ error: 'Bad request' }));
  },
);

const userWithoutBookHandlers = [removeBookFromUserHandler];

export { userWithoutBookHandlers };

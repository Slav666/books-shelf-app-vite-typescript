import { rest } from 'msw';
import { removeFinishedBookFromUser } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/remove-finished-book-from-user/';
const removeFinishedBookHandler = rest.delete(
  `${URL_PATH}:id`,
  async (req, res, ctx) => {
    const result = await removeFinishedBookFromUser(req.params.id, req.body.userId);
    return result
      ? res(ctx.status(200), ctx.json(result))
      : res(ctx.status(400), ctx.json({ error: 'Bad request' }));
  },
);

const userWithoutFinishedBookHandlers = [removeFinishedBookHandler];

export { userWithoutFinishedBookHandlers };

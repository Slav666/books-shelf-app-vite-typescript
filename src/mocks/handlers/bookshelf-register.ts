import { rest } from 'msw';

import { registerNewUser } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/register/';

const registerNewUserHandler = rest.post(URL_PATH, (req, res, ctx) => {
  const newUser = req.body;
  registerNewUser(newUser);
  return res(ctx.status(200), ctx.json(alert('You are now registered')));
});
const registerHandlers = [registerNewUserHandler];

export { registerHandlers };

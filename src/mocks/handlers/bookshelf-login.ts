import { rest } from 'msw';

import { getSingleUser, getUsers } from '../fixtures/bookshelf-login';

const URL_PATH = '/api/login/';
const getSingleUserHandler = rest.get(`${URL_PATH}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(getUsers()));
});
const userLoggedInHandler = rest.post(`${URL_PATH}`, (req, res, ctx) => {
  const result = getSingleUser(req.body);
  console.log('username from back end', req.body);
  return result
    ? res(ctx.status(200), ctx.json(result))
    : res(ctx.status(400), ctx.json({ error: 'Bad request' }));
});

// const getSingleUserTestHandler = rest.get(`${URL_PATH}:id`, (req, res, ctx) => {
//   return res(ctx.status(200), ctx.json(getSingleUser(req.body)));
// });

const loginHandlers = [
  getSingleUserHandler,
  userLoggedInHandler,
  // getSingleUserTestHandler,
];

export { loginHandlers };

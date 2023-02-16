import { rest } from 'msw';

// import { getMockPosts } from '~/mocks/fixtures/posts';
import { getMockUsers } from '../fixtures/bookshelf-users';

const getUsers = rest.get('*/api/users', (req, res, ctx) =>
  res(ctx.status(200), ctx.json(getMockUsers())),
);

const getUser = rest.get('*/api/users/:id', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json(getMockUsers().find(u => u.id === Number(req.params.id))),
  ),
);

// const getUser = rest.post(`${authUrl}/login`, async (req, res, ctx) => {
//   const { username, password } = req.body;
//   const user = await usersDB.authenticate({ username, password });
//   return res(ctx.json({ user }));
// });

const handlers = [getUsers, getUser];

export default handlers;

import { rest } from 'msw';
import { addBookToUser, getSingleUser } from '../fixtures/bookshelf-login';
import { IUser } from '../../utils/interface';

const URL_PATH = '/api/add-book-to-user/';

const addBookToUserHandler = rest.put<IUser>(
  `${URL_PATH}`,
  async (req, res, ctx) => {
    const userWithBook = await req.json();
    console.log('user with book', userWithBook);
    const result = addBookToUser(userWithBook);
    console.log('result', result);
    return res(ctx.status(200), ctx.json(getSingleUser(result)));
  },
);

const userWithBookHandlers = [addBookToUserHandler];

export { userWithBookHandlers };

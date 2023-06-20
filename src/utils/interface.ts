export interface IBook {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  pageCount: number;
  publisher: string;
  synopsis: string;
}

export interface IUser {
  finishedBooks: object[];
  id: number;
  username: string;
  password: string;
  book: IBook;
  finishedBook: IBook;
  books: IBook[];
}

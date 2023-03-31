export interface IBook {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  pageCount: number;
  publisher: string;
  synopsis: string;
}

export interface IUser {
  username: string;
  password: string;
  book: IBook;
  finishedBook: IBook;
  books: IBook[];
}

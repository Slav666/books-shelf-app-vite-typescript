import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

export const BooksData = z.object({
  id: z.number(),
  ownerId: z.number(),
  // creationDate: z.string(),
  title: z.string(),
});

const Books = z.array(BooksData);
export type Blog = z.infer<typeof BooksData>;

export default function useBooks() {
  return useQuery(['books'], () =>
    axios.get<any>('/api/books/').then(res => {
      //Source: www.sandromaglione.com/techblog/zod-and-newtype-ts-full-type-safety-with-typescript
      const dataToValidate = Books.safeParse(res.data);
      if (dataToValidate.success) {
        const validData = dataToValidate.data;
        return validData;
      }
    }),
  );
}

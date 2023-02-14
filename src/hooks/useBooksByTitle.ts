import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { z } from 'zod';

// export const BlogData = z.object({
//   id: z.number(),
//   ownerId: z.number(),
//   // creationDate: z.string(),
//   title: z.string(),
//   post: z.string(),
// });

// const Blogs = z.array(BlogData);
// export type Blog = z.infer<typeof BlogData>;

export default function useBooksByTitle(title) {
  const query = useQuery(['books', title], () => {
    return axios.get(`/api/books/${title}`).then(res => {
      return res.data;
    });
  });
  return query;
}

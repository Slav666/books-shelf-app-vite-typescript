import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function RemoveBookFromUser({ user }) {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      const body = { ...user };
      console.log('Body from remove book from user hook', body);
      return axios.put(`/api/remove-book-from-user/`, body).then(res => {
        console.log('Response data from useAddBookToUser hook', res.data);
        res.data;
      });
    },
    {
      onSuccess: async userWithBook => {
        queryClient.invalidateQueries(['userWithBook']);
        await queryClient.invalidateQueries(['userWithBook', userWithBook]);
      },
    },
  );
}
// export default function RemoveBookFromUser() {
//   const queryClient = useQueryClient();
//   return useMutation(
//     () => {
//       return axios
//         .delete(`/api/posts/${postId}`, { headers: {}, data: { userId } })
//         .then(res => res.data);
//     },
//     {
//       onError: error => {
//         console.log('slavs error', error);
//         alert(
//           'Only the creator of this post has the right to delete and update it!',
//         );
//       },
//       onSuccess: () => queryClient.invalidateQueries(['posts']),
//     },
//   );
// }

import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useRemoveBookFromUser({ user }) {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      const body = { ...user };
      console.log('Body from remove book from user hook', body);
      return axios.put(`/api/remove-book-from-user/`, body).then(res => {
        console.log('Response data from useAddBookToUser hook', res.data);
        return res.data;
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

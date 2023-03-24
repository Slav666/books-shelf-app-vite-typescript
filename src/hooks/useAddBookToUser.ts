import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useAddBookToUser({ user }) {
  const queryClient = useQueryClient();
  return useMutation(
    userWithBook => {
      const body = { ...user, userWithBook };
      console.log('Body from useAddBookTo User hook', body);
      return axios.put(`/api/add-book-to-user/`, body).then(res => {
        console.log('Response data from useAddBookToUser hook', res.data);
        res.data;
      });
    },
    {
      onSuccess: async userWithBook => {
        // queryClient.invalidateQueries(['userWithBook']);
        // await queryClient.invalidateQueries(['userWithBook', userWithBook]);
      },
    },
  );
}

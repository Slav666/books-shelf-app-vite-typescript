import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useAddBookToUser({ user }) {
  const queryClient = useQueryClient();
  return useMutation(
    userWithBook => {
      const body = { ...user, userWithBook };
      console.log('Body from useAddBookTo User hook', body);
      return axios.put(`/api/login/`, body).then(res => {
        res.data;
      });
    },
    {
      onSuccess: async book => {
        queryClient.invalidateQueries(['books']);
        await queryClient.invalidateQueries(['book', book?.id]);
      },
    },
  );
}

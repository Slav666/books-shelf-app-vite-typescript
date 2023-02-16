import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUserCredential() {
  // const queryClient = useQueryClient(id);
  return useMutation(
    userValues =>
      axios.post('/api/user/', userValues).then(res => {
        return res.data;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['user']),
    },
  );
}

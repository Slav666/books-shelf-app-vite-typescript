import axios from 'axios';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation(
    userLoginValues =>
      axios.post('/api/login/', userLoginValues).then(res => {
        console.log('data from user login hook', res.data);
        return res.data;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['login']),
    },
  );
}

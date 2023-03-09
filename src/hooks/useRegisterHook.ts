import axios from 'axios';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function useRegisterUser() {
  const queryClient = useQueryClient();
  return useMutation(
    values =>
      axios.post('/api/register/', values).then(res => {
        console.log('data from register hook', res.data);
        return res.data;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['register']),
    },
  );
}

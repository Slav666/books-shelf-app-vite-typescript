import axios from 'axios';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function useRegisterUser() {
  const queryClient = useQueryClient();
  return useMutation(
    values =>
      axios.post('/api/register/', values).then(res => {
        console.log('values from register hook', values);
        return res.data;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['register']),
    },
  );
}

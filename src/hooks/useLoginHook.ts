import axios from 'axios';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation(
    userLoginValues => {
      return axios.post('/api/login/', userLoginValues).then(res => {
        const data = res.data;
        console.log('data from useLogin user', data);
        return data;
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['login']),
    },
  );
}

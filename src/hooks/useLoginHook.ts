import axios from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface LoginUserValues {
  email: string;
  password: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
}

export default function useLoginUser(
  options?: UseMutationOptions<UserData, Error, LoginUserValues>,
) {
  return useMutation<UserData, Error, LoginUserValues>(userLoginValues => {
    return axios.post('/api/login/', userLoginValues).then(res => {
      const data: UserData = res.data;
      return data;
    });
  }, options);
}

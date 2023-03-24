import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useSingleUser(username) {
  const query = useQuery(['user', username], () => {
    return axios.get(`/api/login/${username}`).then(res => {
      return res.data;
    });
  });
  return query;
}

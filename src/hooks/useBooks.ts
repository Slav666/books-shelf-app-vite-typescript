import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useBooks() {
  const query = useQuery(['books'], () => {
    return axios.get(`/api/books/`).then(res => {
      console.log('data from hook', res.data);
      return res.data;
    });
  });
  return query;
}

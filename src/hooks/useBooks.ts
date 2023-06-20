import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useBooks() {
  const query = useQuery(['books'], () => {
    return axios.get(`/api/books/`).then(res => {
      return res.data;
    });
  });
  return query;
}

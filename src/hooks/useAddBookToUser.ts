import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useAddBookToUser() {
  return useMutation(userWithBook => {
    return axios.put(`/api/add-book-to-user/`, userWithBook).then(res => {
      return res.data;
    });
  });
}

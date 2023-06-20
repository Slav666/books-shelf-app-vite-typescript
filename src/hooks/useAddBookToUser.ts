import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useAddBookToUser() {
  return useMutation(userWithBook => {
    // console.log('user with book', userWithBook);
    return axios.put(`/api/add-book-to-user/`, userWithBook).then(res => {
      // console.log('Data:', res.data);
      return res.data;
    });
  });
}

import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { IUser } from '../utils/interface';

export default function useAddBookToUser() {
  return useMutation<IUser, unknown, any>(userWithBook => {
    // console.log('user with book', userWithBook);
    return axios.put(`/api/add-book-to-user/`, userWithBook).then(res => {
      // console.log('Data:', res.data);
      return res.data;
    });
  });
}

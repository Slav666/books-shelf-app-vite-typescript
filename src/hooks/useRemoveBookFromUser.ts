import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useRemoveBookFromUser() {
  return useMutation(newValue => {
    // console.log('Body from remove book from user hook', newValue);
    return axios.put(`/api/remove-book-from-user/`, newValue).then(res => {
      // console.log('Response data from remove book hook', res.data);
      return res.data;
    });
  });
}

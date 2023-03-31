import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useRemoveBookFromUser() {
  return useMutation(({ bookToDeleteId, userId }) => {
    console.log('Body from remove book from user hook', bookToDeleteId);
    console.log('user id from remove book hook', userId);
    return axios
      .delete(`/api/remove-book-from-user/${bookToDeleteId}`, {
        headers: {},
        data: { userId },
      })
      .then(res => {
        console.log('Response data from remove book hook', res.data);
        return res.data;
      });
  });
}

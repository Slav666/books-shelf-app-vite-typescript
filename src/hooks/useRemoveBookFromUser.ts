import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
export default function useRemoveBookFromUser() {
  return useMutation(({ bookToDeleteId, userId }) => {
    return axios
      .delete(`/api/remove-book-from-user/${bookToDeleteId}`, {
        headers: {},
        data: { userId },
      })
      .then(res => {
        const data = res.data;
        return data;
      });
  });
}

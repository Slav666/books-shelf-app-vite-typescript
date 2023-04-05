import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
export default function useRemoveFinishedBook() {
  return useMutation(({ bookToDeleteId, userId }) => {
    return axios
      .delete(`/api/remove-finished-book-from-user/${bookToDeleteId}`, {
        headers: {},
        data: { userId },
      })
      .then(res => {
        const data = res.data;
        return data;
      });
  });
}

import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useFinishedBookFromUser() {
  return useMutation(userWithFinishedBook => {
    return axios
      .put(`/api/finished-book-by-user/`, userWithFinishedBook)
      .then(res => {
        const data = res.data;
        return data;
      });
  });
}

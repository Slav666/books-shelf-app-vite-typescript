import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useFinishedBookFromUser() {
  return useMutation(finishedBookByUser => {
    console.log('finished books by user', finishedBookByUser);
    return axios
      .put(`/api/finished-book-by-user/`, finishedBookByUser)
      .then(res => {
        console.log('Response data from finished book hook', res.data);
        const data = res.data;
        return data;
      });
  });
}

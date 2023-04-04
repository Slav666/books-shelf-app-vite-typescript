import React, { useContext } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import DataContext from '../components/bookshelf/DataContext';
export default function useRemoveBookFromUser() {
  const { setUser } = useContext(DataContext);
  return useMutation(({ bookToDeleteId, userId }) => {
    return axios
      .delete(`/api/remove-book-from-user/${bookToDeleteId}`, {
        headers: {},
        data: { userId },
      })
      .then(res => {
        console.log('Response data from remove book hook HERE!', res.data);
        const data = res.data;
        return setUser(data);
      });
  });
}

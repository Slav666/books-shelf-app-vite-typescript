import React from 'react';
import axios from 'axios';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export default function useLoginUser() {
  // const [user, setUser] = React.useState('');
  const queryClient = useQueryClient();
  return useMutation(
    userLoginValues =>
      axios.patch('/api/login/', userLoginValues).then(res => {
        console.log('data from user login hook', res.data);
        const data = res.data;

        return data;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['login']),
      // onSuccess: async userLoginValu => {
      //   queryClient.invalidateQueries(['login']);
      //   await queryClient.invalidateQueries(['login']);
      // },
      // onSuccess: data => {
      //   console.log(data);
      //   const message = `Here is user: ${data.username}`;
      //   setUser(data.username);
      //   alert(message);
      //   console.log('user from hook', user);
      //   return user;
      //   // alert(message);
      // },
    },
  );
}

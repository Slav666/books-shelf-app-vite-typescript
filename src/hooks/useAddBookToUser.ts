import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export default function useAddBookToUser() {
  return useMutation(userWithBook => {
    console.log('user with book', userWithBook);
    return axios.put(`/api/add-book-to-user/`, userWithBook).then(res => {
      console.log('Data:', res.data);
      return res.data;
    });
  });
}

// import axios from 'axios';
// import { useMutation, MutationResultPair } from '@tanstack/react-query';

// interface UserWithBook {
//   // Define the properties of the userWithBook object
//   // For example:
//   userId: string;
//   bookId: string;
// }

// interface ResponseData {
//   // Define the structure of the response data
//   // For example:
//   success: boolean;
//   message: string;
// }

// export default function useAddBookToUser() {
//   return useMutation<UserWithBook, ResponseData>(
//     (userWithBook: UserWithBook) => {
//       return axios.put(`/api/add-book-to-user/`, userWithBook).then(res => {
//         return res.data;
//       });
//     },
//   );
// }

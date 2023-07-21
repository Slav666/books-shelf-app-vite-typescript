// import React, { useContext, FC, ReactElement } from 'react';

// import UserContext from '../../context/user-context';
// import useRemoveFinishedBook from '../../hooks/useRemoveFinishedBook';
// import { IBook, IUser } from '~/utils/interface';
// import { Button } from '../lib';
// interface Props {
//   finishedBook: IBook;
// }

// const FinishedSingleBook: FC<Props> = ({ finishedBook }): ReactElement => {
//   const { user, setUser } = useContext(UserContext);
//   const {
//     mutateAsync: removeFinishedBook,
//     status,
//     error,
//   } = useRemoveFinishedBook();

//   const removeFinishedBookHandler = async () => {
//     const result = await removeFinishedBook({
//       bookToDeleteId: finishedBook.id,
//       userId: user.id,
//     });
//     setUser(result);
//   };

//   if (finishedBook) {
//     return (
//       <div className=" relative m-12 flex max-w-screen-lg items-center justify-end">
//         <div className="grid min-h-[270px] grow grid-cols-[140px,1fr] gap-20 rounded-md border border-red-500 p-5 text-red-500">
//           <div>
//             <img
//               alt={`${finishedBook.title} book cover`}
//               className="max-h-full w-full"
//               src={finishedBook.coverImageUrl}
//             />
//           </div>
//           <div>
//             <div>
//               <div>
//                 <h2 className="text-xl font-bold text-blue-500">
//                   {finishedBook.title}
//                 </h2>
//               </div>
//               <div>
//                 <div className="mt-2 text-sm italic">{finishedBook.author}</div>
//               </div>
//             </div>
//             <small className="book-row-synopsis">
//               {finishedBook.synopsis.substring(0, 500)}...
//             </small>
//           </div>

//           <div>
//             <Button variant="primary" onClick={removeFinishedBookHandler}>
//               Remove book
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return <p>No books</p>;
//   }
// };
// export default FinishedSingleBook;
// import React, { useContext, FC, ReactElement } from 'react';
import React, { useContext, FC, ReactElement } from 'react';
import UserContext from '../../context/user-context';
import useRemoveFinishedBook from '../../hooks/useRemoveFinishedBook';
import { IBook, IUser } from '~/utils/interface';
import { Button } from '../lib';
import { NotFoundScreen } from '../not-found-screen';

interface Props {
  finishedBook: IBook;
}

const FinishedSingleBook: FC<Props> = ({ finishedBook }): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  const {
    mutateAsync: removeFinishedBook,
    status,
    error,
  } = useRemoveFinishedBook();

  const removeFinishedBookHandler = async () => {
    const result = await removeFinishedBook({
      bookToDeleteId: finishedBook.id,
      userId: user.id,
    });
    setUser(result);
  };

  return (
    <div className="relative m-12 flex max-w-screen-lg items-center justify-end">
      <section className="grid min-h-[270px] grow grid-cols-[140px,1fr] gap-10 rounded-md border border-black p-5 text-white">
        <img
          alt={`${finishedBook.title} book cover`}
          className="max-h-full w-full"
          src={finishedBook.coverImageUrl}
        />

        <div>
          <h2 className="text-xl font-bold text-blue-500">
            {finishedBook.title}
          </h2>
          <p className="mt-2 text-sm italic">{finishedBook.author}</p>
          <small>{finishedBook.synopsis.substring(0, 500)}...</small>
        </div>

        <Button variant="primary" onClick={removeFinishedBookHandler}>
          Remove book
        </Button>
      </section>
    </div>
  );
};

export default FinishedSingleBook;

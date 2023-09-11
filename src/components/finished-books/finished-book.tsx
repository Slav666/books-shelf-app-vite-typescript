import React, { useContext, FC, ReactElement } from 'react';
import UserContext from '../../context/user-context';
import useRemoveFinishedBook from '../../hooks/useRemoveFinishedBook';
import { IBook } from '~/utils/interface';
import { Button } from '../lib';

interface Props {
  finishedBook: IBook;
}

const FinishedSingleBook: FC<Props> = ({ finishedBook }): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  const {
    mutateAsync: removeFinishedBook,
    error,
    isError,
    isLoading,
  } = useRemoveFinishedBook();

  const removeFinishedBookHandler = async () => {
    const result = await removeFinishedBook({
      bookToDeleteId: finishedBook.id,
      userId: user.id,
    });
    setUser(result);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError && error) {
    const errorMessage = (error as { message: string }).message;
    return <p>Error: {errorMessage}</p>;
  }

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

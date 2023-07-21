import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { DiscoverBooksScreen } from '../../components/search-books/discover-book-screen';
import { NotFoundScreen } from '../../components/not-found-screen';
import { ReadingListScreen } from '../../components/reading-books/reading-books-list';
import FinishedListBooks from '../../components/finished-books/finished-books-list';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<ReadingListScreen />} path="/reading-books-list" />
      <Route element={<FinishedListBooks />} path="/finished-books-list" />
      <Route element={<DiscoverBooksScreen />} path="/discover" />
      <Route element={<NotFoundScreen />} path="*" />
    </Routes>
  );
};

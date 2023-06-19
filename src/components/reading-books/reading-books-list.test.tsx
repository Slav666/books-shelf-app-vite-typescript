import React, { useContext } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from '~/test/utils';
import SingleReadBook from './reading-book';

// Mock the useContext hook
vi.mock('react', () => ({
  ...vi.requireActual('react'),
  useContext: vi.fn(),
}));

describe('SingleReadBook', () => {
  const book = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    coverImageUrl: 'test-image.jpg',
  };

  const user = {
    id: 123,
    books: [],
    finishedBooks: [],
  };

  const setUser = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    useContext.mockReturnValue({ user, setUser });
  });

  it('renders the book details correctly', () => {
    render(<SingleReadBook book={book} />);

    expect(screen.getByAltText('Test Book book cover')).toBeInTheDocument();
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });

  it('calls removeBookFromUserHandler when "Remove book from the list" button is clicked', () => {
    const removeBook = vi.fn();
    useContext.mockReturnValue({ user, setUser, removeBook });

    render(<SingleReadBook book={book} />);

    userEvent.click(screen.getByText('Remove book from the list.'));

    expect(removeBook).toHaveBeenCalledWith({
      bookToDeleteId: book.id,
      userId: user.id,
    });
    expect(setUser).toHaveBeenCalled();
  });

  it('calls addFinishedBookHandler when "Finished Book" button is clicked', () => {
    const finishedBook = vi.fn();
    useContext.mockReturnValue({ user, setUser, finishedBook });

    render(<SingleReadBook book={book} />);

    userEvent.click(screen.getByText('Finished Book.'));

    expect(finishedBook).toHaveBeenCalledWith({
      ...user,
      finishedBooks: [...user.finishedBooks, book],
      books: user.books.filter(testBook => testBook.id !== book.id),
    });
    expect(setUser).toHaveBeenCalled();
  });

  it('displays "No books" message if no book is provided', () => {
    render(<SingleReadBook book={null} />);

    expect(screen.getByText('No books')).toBeInTheDocument();
  });
});

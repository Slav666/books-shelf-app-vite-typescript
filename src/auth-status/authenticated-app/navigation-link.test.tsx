import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Nav } from './navigation-link';

describe('Nav', () => {
  it('should renders navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const readingListLink = screen.getByText('Reading List');
    const finishedBooksLink = screen.getByText('Finished Books');
    const discoverLink = screen.getByText('Discover');

    expect(readingListLink).toBeInTheDocument();
    expect(finishedBooksLink).toBeInTheDocument();
    expect(discoverLink).toBeInTheDocument();
  });

  it('should navigates to the correct route when a link is clicked', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const readingListLink = screen.getByText('Reading List');
    const finishedBooksLink = screen.getByText('Finished Books');
    const discoverLink = screen.getByText('Discover');

    expect(window.location.pathname).toBe('/');

    readingListLink.click();
    expect(window.location.pathname).toBe('/reading-books-list');

    finishedBooksLink.click();
    expect(window.location.pathname).toBe('/finished-books-list');

    discoverLink.click();
    expect(window.location.pathname).toBe('/discover');
  });
});

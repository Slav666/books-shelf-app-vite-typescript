import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Nav } from './navigation-link';

describe('Nav', () => {
  it('renders navigation links correctly', () => {
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

  it('navigates to the correct route when a link is clicked', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const readingListLink = screen.getByText('Reading List');
    const finishedBooksLink = screen.getByText('Finished Books');
    const discoverLink = screen.getByText('Discover');

    expect(window.location.pathname).toBe('/');

    // Simulate clicking on the "Reading List" link
    readingListLink.click();
    expect(window.location.pathname).toBe('/reading-books-list');

    // Simulate clicking on the "Finished Books" link
    finishedBooksLink.click();
    expect(window.location.pathname).toBe('/finished-books-list');

    // Simulate clicking on the "Discover" link
    discoverLink.click();
    expect(window.location.pathname).toBe('/discover');
  });
});

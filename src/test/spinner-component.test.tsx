import React from 'react';
import { describe, expect, it } from 'vitest';

import { Spinner } from '../../src/components/lib';

import { render, screen } from '~/test/utils';

describe('spinner', () => {
  it('should render the spinner on the page', () => {
    render(<Spinner />);

    expect(
      screen.getByText('Brought to you by Stevenson Astrosat'),
    ).toBeInTheDocument();
  });
});

import React from 'react';

import { describe, expect, it } from 'vitest';
import { render, screen } from '~/test/utils';

import { FullPageSpinner } from './lib';

describe('spinner', () => {
  it('should render the spinner on the page', () => {
    render(<FullPageSpinner />);

    expect(screen.getByTestId('spiner')).toBeInTheDocument();
  });
});

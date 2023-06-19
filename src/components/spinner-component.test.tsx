import React from 'react';
import { describe, expect, it } from 'vitest';

import { FullPageSpinner } from './lib';

import { render, screen } from '~/test/utils';

describe('spinner', () => {
  it('should render the spinner on the page', () => {
    render(<FullPageSpinner />);

    expect(screen.getByTestId('spiner')).toBeInTheDocument();
  });
});

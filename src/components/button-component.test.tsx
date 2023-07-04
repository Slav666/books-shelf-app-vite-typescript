import React from 'react';

import { describe, expect, it } from 'vitest';
import { render, screen } from '~/test/utils';

import { Button } from './lib';
import { GBIcon } from '../i18n/icons/gb-icon.component';

describe('Submit Button', () => {
  it('should render a submit button with text only', () => {
    render(<Button variant="primary">Test text</Button>);
    expect(
      screen.getByRole('button', { name: 'Test text' }),
    ).toBeInTheDocument();
  });

  it('should render a submit button with an icon only', () => {
    render(
      <Button variant="secondary">
        <GBIcon />
      </Button>,
    );
    expect(
      screen.getByRole('button', { name: 'United kingdom Flag' }),
    ).toBeInTheDocument();
  });

  it('should render a submit button with text and an icon', () => {
    render(
      <Button variant="secondary">
        <span>
          <GBIcon />
          <p>Test text</p>
        </span>
      </Button>,
    );
    expect(
      screen.getByRole('button', { name: 'United kingdom Flag Test text' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('should render a submit button in the disabled state', () => {
    render(
      <Button variant="secondary" disabled>
        Test text
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'Test text' })).toBeDisabled();
  });

  it('should render a submit button in the enabled state', () => {
    render(<Button variant="secondary">Test text</Button>);
    expect(screen.getByRole('button', { name: 'Test text' })).toBeEnabled();
  });
});

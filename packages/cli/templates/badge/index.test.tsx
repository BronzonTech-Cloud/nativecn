import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Badge from './index';

describe('Badge', () => {
  it('renders correctly with default props', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeTruthy();
  });

  it('renders with destructive variant', () => {
    render(<Badge variant="destructive">Error</Badge>);
    expect(screen.getByText('Error')).toBeTruthy();
  });
});

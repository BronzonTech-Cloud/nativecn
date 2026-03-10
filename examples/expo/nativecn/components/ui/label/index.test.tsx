import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Label } from './index';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Username</Label>);
    expect(screen.getByText('Username')).toBeTruthy();
  });

  it('applies light mode styles by default', () => {
    const { getByText } = render(<Label>Username</Label>);
    const label = getByText('Username');
    // We expect the 'text-foreground' class or equivalent style
    expect(label.props.className).toContain('text-foreground');
  });

  it('applies dark mode styles', () => {
    const { getByText } = render(<Label mode="dark">Username</Label>);
    const label = getByText('Username');
    expect(label.props.className).toContain('text-dark-foreground');
  });
});

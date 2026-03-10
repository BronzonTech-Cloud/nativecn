import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Card, CardHeader, CardTitle, CardContent } from './index';

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>
    );
    expect(screen.getByText('Card Title')).toBeTruthy();
    expect(screen.getByText('Card Content')).toBeTruthy();
  });
});

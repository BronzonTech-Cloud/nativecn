import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Alert, AlertTitle, AlertDescription } from './index';

describe('Alert', () => {
  it('renders correctly', () => {
    render(
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app.</AlertDescription>
      </Alert>
    );
    expect(screen.getByText('Heads up!')).toBeTruthy();
    expect(screen.getByText('You can add components to your app.')).toBeTruthy();
  });
});

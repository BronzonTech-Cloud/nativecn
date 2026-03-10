import React from 'react';
import { render } from '@testing-library/react-native';
import { Skeleton } from './index';

describe('Skeleton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Skeleton className="w-10 h-10" />);
    expect(toJSON()).toBeTruthy();
  });
});

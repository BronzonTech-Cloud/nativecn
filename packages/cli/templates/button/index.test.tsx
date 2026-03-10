import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from './index';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeTruthy();
  });

  it('handles press interactions', () => {
    const onPressMock = jest.fn();
    render(<Button onPress={onPressMock}>Click me</Button>);

    fireEvent.press(screen.getByText('Click me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with different variants', () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByText('Delete')).toBeTruthy();
  });
});

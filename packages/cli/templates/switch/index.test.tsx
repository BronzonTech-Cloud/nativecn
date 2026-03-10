import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Switch } from './index';

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeTruthy();
  });

  it('handles toggle interactions', () => {
    const onCheckedChangeMock = jest.fn();
    render(<Switch checked={false} onCheckedChange={onCheckedChangeMock} />);

    fireEvent.press(screen.getByRole('switch'));
    expect(onCheckedChangeMock).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const onCheckedChangeMock = jest.fn();
    render(<Switch disabled onCheckedChange={onCheckedChangeMock} />);

    fireEvent.press(screen.getByRole('switch'));
    expect(onCheckedChangeMock).not.toHaveBeenCalled();
  });

  it('has correct accessibility state', () => {
    render(<Switch checked={true} />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl.props.accessibilityState.checked).toBe(true);
  });
});

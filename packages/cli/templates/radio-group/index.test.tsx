import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { RadioGroup, RadioGroupItem } from './index';

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup value="option-1">
        <RadioGroupItem value="option-1" />
        <RadioGroupItem value="option-2" />
      </RadioGroup>
    );
    expect(screen.getAllByRole('radio').length).toBe(2);
  });

  it('handles value changes', () => {
    const onValueChangeMock = jest.fn();
    render(
      <RadioGroup value="option-1" onValueChange={onValueChangeMock}>
        <RadioGroupItem value="option-1" />
        <RadioGroupItem value="option-2" testID="radio-2" />
      </RadioGroup>
    );

    fireEvent.press(screen.getByTestId('radio-2'));
    expect(onValueChangeMock).toHaveBeenCalledWith('option-2');
  });

  it('respects group disabled state', () => {
    const onValueChangeMock = jest.fn();
    render(
      <RadioGroup disabled onValueChange={onValueChangeMock}>
        <RadioGroupItem value="option-1" testID="radio-1" />
      </RadioGroup>
    );

    fireEvent.press(screen.getByTestId('radio-1'));
    expect(onValueChangeMock).not.toHaveBeenCalled();
  });
});

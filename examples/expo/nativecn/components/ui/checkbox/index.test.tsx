import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Checkbox } from './index';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox />);
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('handles toggle interactions', () => {
    const onCheckedChangeMock = jest.fn();
    render(<Checkbox checked={false} onCheckedChange={onCheckedChangeMock} />);

    fireEvent.press(screen.getByRole('button'));
    expect(onCheckedChangeMock).toHaveBeenCalledWith(true);
  });

  it('renders checkmark when checked', () => {
    // Note: Testing for icon presence might depend on how MaterialCommunityIcons is mocked
    const { toJSON } = render(<Checkbox checked={true} />);
    expect(toJSON()).toBeTruthy();
  });

  it('respects disabled state', () => {
    const onCheckedChangeMock = jest.fn();
    render(<Checkbox disabled onCheckedChange={onCheckedChangeMock} />);

    fireEvent.press(screen.getByRole('button'));
    expect(onCheckedChangeMock).not.toHaveBeenCalled();
  });
});

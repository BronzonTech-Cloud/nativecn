import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Input } from './index';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter username" />);
    expect(screen.getByPlaceholderText('Enter username')).toBeTruthy();
  });

  it('handles text input', () => {
    const onChangeTextMock = jest.fn();
    render(<Input placeholder="Search" onChangeText={onChangeTextMock} />);

    const input = screen.getByPlaceholderText('Search');
    fireEvent.changeText(input, 'Hello');
    expect(onChangeTextMock).toHaveBeenCalledWith('Hello');
  });

  it('applies focus styles', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Focus me" />);
    const input = getByPlaceholderText('Focus me');

    fireEvent(input, 'focus');
    // Check if ring class is applied
    expect(input.props.className).toContain('border-ring');
  });

  it('applies error styles', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Error" error />);
    const input = getByPlaceholderText('Error');
    expect(input.props.className).toContain('border-destructive');
  });
});

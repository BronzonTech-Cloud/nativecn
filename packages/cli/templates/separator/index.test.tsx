import React from 'react';
import { render } from '@testing-library/react-native';
import { Separator } from './index';

describe('Separator', () => {
  it('renders correctly with default props', () => {
    const { toJSON } = render(<Separator />);
    expect(toJSON()).toBeTruthy();
  });

  it('renders horizontal orientation by default', () => {
    const { getByRole } = render(<Separator decorative={false} />);
    const separator = getByRole('separator');
    expect(separator.props.className).toContain('h-[1px]');
    expect(separator.props.className).toContain('w-full');
  });

  it('renders vertical orientation', () => {
    const { getByRole } = render(<Separator decorative={false} orientation="vertical" />);
    const separator = getByRole('separator');
    expect(separator.props.className).toContain('h-full');
    expect(separator.props.className).toContain('w-[1px]');
  });
});

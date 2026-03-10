import React from 'react';
import { View, ViewProps } from 'react-native';
import { cn } from '../../../lib/utils';

export interface SeparatorProps extends ViewProps {
  mode?: 'light' | 'dark';
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Separator = React.forwardRef<View, SeparatorProps>(
  ({ className, mode = 'light', orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <View
        ref={ref}
        accessibilityElementsHidden={decorative}
        importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
        className={cn(
          'shrink-0',
          mode === 'dark' ? 'bg-dark-border' : 'bg-border',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export { Separator };

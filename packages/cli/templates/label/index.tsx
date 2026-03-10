import React from 'react';
import { Text, TextProps } from 'react-native';
import { cn } from '../../../lib/utils';

export interface LabelProps extends TextProps {
  mode?: 'light' | 'dark';
}

const Label = React.forwardRef<Text, LabelProps>(({ className, mode = 'light', ...props }, ref) => {
  return (
    <Text
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none',
        mode === 'dark' ? 'text-dark-foreground' : 'text-foreground',
        className
      )}
      {...props}
    />
  );
});

Label.displayName = 'Label';

export { Label };

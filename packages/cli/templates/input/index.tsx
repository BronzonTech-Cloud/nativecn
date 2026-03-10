import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { cn } from '../../../lib/utils';
import { inputClassNames } from './styles';

export interface InputProps extends TextInputProps {
  mode?: 'light' | 'dark';
  error?: boolean;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, mode = 'light', error, editable = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <TextInput
        ref={ref}
        onFocus={e => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={e => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        editable={editable}
        className={cn(
          inputClassNames.base,
          mode === 'dark' ? inputClassNames.theme.dark : inputClassNames.theme.light,
          !editable && inputClassNames.disabled,
          error && inputClassNames.error,
          isFocused && (mode === 'dark' ? 'border-dark-ring' : 'border-ring'),
          className
        )}
        placeholderTextColor={
          mode === 'dark' ? '#A1A1AA' : '#71717A' // muted-foreground colors
        }
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };

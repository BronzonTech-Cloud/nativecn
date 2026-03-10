import React from 'react';
import { Pressable, View, PressableProps } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cn } from '../../../lib/utils';
import { usePressable } from '../../hooks/use-pressable';

export interface CheckboxProps extends Omit<PressableProps, 'children'> {
  mode?: 'light' | 'dark';
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  error?: boolean;
}

const Checkbox = React.forwardRef<View, CheckboxProps>(
  (
    { className, mode = 'light', checked = false, onCheckedChange, disabled, error, ...props },
    ref
  ) => {
    const { isPressed, pressableProps } = usePressable();

    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const iconColor = mode === 'dark' ? '#000000' : '#FFFFFF';

    return (
      <Pressable
        ref={ref}
        disabled={disabled}
        onPress={handlePress}
        {...pressableProps}
        className={cn(
          'h-5 w-5 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          mode === 'dark' ? 'border-dark-primary' : 'border-primary',
          checked && (mode === 'dark' ? 'bg-dark-primary' : 'bg-primary'),
          disabled && 'opacity-50',
          error && 'border-destructive',
          isPressed && 'opacity-80',
          className
        )}
        {...props}
      >
        <View className="items-center justify-center flex-1">
          {checked && <MaterialCommunityIcons name="check" size={14} color={iconColor} />}
        </View>
      </Pressable>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };

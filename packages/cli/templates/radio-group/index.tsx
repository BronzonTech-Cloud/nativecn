import React, { createContext, useContext, useMemo } from 'react';
import { View, Pressable, Text, ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { cn } from '../../../lib/utils';

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  mode: 'light' | 'dark';
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

export interface RadioGroupProps extends ViewProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  mode?: 'light' | 'dark';
}

const RadioGroup = React.forwardRef<View, RadioGroupProps>(
  ({ className, value, onValueChange, disabled, mode = 'light', ...props }, ref) => {
    const contextValue = useMemo(
      () => ({ value, onValueChange, disabled, mode }),
      [value, onValueChange, disabled, mode]
    );

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <View ref={ref} className={cn('grid gap-2', className)} {...props} />
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

export interface RadioGroupItemProps extends ViewProps {
  value: string;
  disabled?: boolean;
}

const RadioGroupItem = React.forwardRef<View, RadioGroupItemProps>(
  ({ className, value: itemValue, disabled: itemDisabled, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    if (!context) {
      throw new Error('RadioGroupItem must be used within a RadioGroup');
    }

    const { value, onValueChange, disabled: groupDisabled, mode } = context;
    const isChecked = value === itemValue;
    const isDisabled = groupDisabled || itemDisabled;

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: withSpring(isChecked ? 1 : 0) }],
        opacity: withSpring(isChecked ? 1 : 0),
      };
    });

    return (
      <Pressable
        ref={ref as any}
        onPress={() => !isDisabled && onValueChange?.(itemValue)}
        disabled={isDisabled}
        accessibilityRole="radio"
        accessibilityState={{ checked: isChecked, disabled: isDisabled }}
        className={cn(
          'aspect-square h-4 w-4 rounded-full border items-center justify-center ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          mode === 'dark' ? 'border-dark-primary' : 'border-primary',
          isDisabled && 'opacity-50',
          className
        )}
        {...props}
      >
        <Animated.View
          style={animatedStyle}
          className={cn(
            'h-2.5 w-2.5 rounded-full',
            mode === 'dark' ? 'bg-dark-primary' : 'bg-primary'
          )}
        />
      </Pressable>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };

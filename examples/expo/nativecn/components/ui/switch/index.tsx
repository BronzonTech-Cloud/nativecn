import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';
import { cn } from '../../../lib/utils';

export interface SwitchProps {
  mode?: 'light' | 'dark';
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Switch = React.forwardRef<View, SwitchProps>(
  ({ className, mode = 'light', checked = false, onCheckedChange, disabled }, ref) => {
    const translateX = useSharedValue(checked ? 20 : 2);

    useEffect(() => {
      translateX.value = withSpring(checked ? 20 : 2, {
        mass: 1,
        damping: 15,
        stiffness: 120,
      });
    }, [checked, translateX]);

    const thumbStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }));

    const trackStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        translateX.value,
        [2, 20],
        [
          mode === 'dark' ? '#27272A' : '#E4E4E7', // input background
          mode === 'dark' ? '#FAFAFA' : '#18181B', // primary colors
        ]
      );
      return { backgroundColor };
    });

    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="switch"
        accessibilityState={{ checked, disabled }}
        className={cn(
          'w-11 h-6 rounded-full p-1 transition-colors',
          disabled && 'opacity-50',
          className
        )}
      >
        <Animated.View style={trackStyle} className="absolute inset-0 rounded-full" />
        <Animated.View
          style={thumbStyle}
          className={cn(
            'w-4 h-4 rounded-full shadow-sm',
            mode === 'dark' ? 'bg-dark-background' : 'bg-background'
          )}
        />
      </Pressable>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };

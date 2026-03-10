import { useState } from 'react';

/**
 * A hook to manage the pressed state of a Pressable component.
 * Provides a consistent way to handle active/pressed animations and styles.
 */
export function usePressable() {
  const [isPressed, setIsPressed] = useState(false);

  const pressableProps = {
    onPressIn: () => setIsPressed(true),
    onPressOut: () => setIsPressed(false),
  };

  return {
    isPressed,
    pressableProps,
  };
}

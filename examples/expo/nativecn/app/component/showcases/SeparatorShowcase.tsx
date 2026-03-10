import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../lib/ThemeContext';
import { Separator } from '../../../components/ui/separator';

const SeparatorShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mode = isDark ? 'dark' : 'light';

  return (
    <View className="gap-6 pb-10">
      <Text className={`text-xl font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}>
        Horizontal Separator
      </Text>

      <View className="gap-4 mb-4">
        <View>
          <Text
            className={`text-lg font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
          >
            NativeCN Components
          </Text>
          <Text
            className={`text-sm ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
          >
            Beautiful UI components for React Native.
          </Text>
        </View>

        <Separator mode={mode} />

        <View className="flex-row justify-between items-center px-2">
          <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>Docs</Text>
          <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>Components</Text>
          <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>Blog</Text>
        </View>

        <Separator mode={mode} />
      </View>

      <Text
        className={`text-xl font-bold mt-6 mb-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Vertical Separator
      </Text>

      <View className="flex-row h-10 items-center gap-4 justify-center">
        <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>Blog</Text>
        <Separator mode={mode} orientation="vertical" />
        <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>Docs</Text>
        <Separator mode={mode} orientation="vertical" />
        <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>Source</Text>
      </View>

      <Text
        className={`text-xl font-bold mt-8 mb-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Decorative Usage
      </Text>

      <View className="flex-row items-center gap-4">
        <Separator mode={mode} className="flex-1" />
        <Text
          className={`text-xs uppercase ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
        >
          OR CONTINUE WITH
        </Text>
        <Separator mode={mode} className="flex-1" />
      </View>
    </View>
  );
};

export default SeparatorShowcase;

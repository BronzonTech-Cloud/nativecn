import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../lib/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../lib/ThemeContext';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

const InputShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mode = isDark ? 'dark' : 'light';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="gap-6 pb-10">
      <Text className={`text-xl font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}>
        Basic Input
      </Text>

      <View className="gap-2">
        <Label mode={mode}>Email</Label>
        <Input
          mode={mode}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text
          className={`text-xs ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
        >
          Enter your email address to continue.
        </Text>
      </View>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Error State
      </Text>

      <View className="gap-2">
        <Label mode={mode} className="text-destructive">
          Password
        </Label>
        <Input
          mode={mode}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error
        />
        <Text className="text-xs text-destructive">Password must be at least 8 characters.</Text>
      </View>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Disabled State
      </Text>

      <View className="gap-2">
        <Label mode={mode}>Username (Read Only)</Label>
        <Input mode={mode} placeholder="bronzontech" editable={false} />
      </View>
    </View>
  );
};

export default InputShowcase;

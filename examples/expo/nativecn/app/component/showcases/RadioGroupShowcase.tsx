import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../lib/ThemeContext';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Label } from '../../../components/ui/label';

const RadioGroupShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mode = isDark ? 'dark' : 'light';

  const [shipping, setShipping] = useState('standard');
  const [themePref, setThemePref] = useState('system');

  return (
    <View className="gap-6 pb-10">
      <Text className={`text-xl font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}>
        Basic Radio Group
      </Text>

      <RadioGroup mode={mode} value={shipping} onValueChange={setShipping} className="gap-4">
        <View className="flex-row items-center gap-3">
          <RadioGroupItem value="standard" />
          <Label mode={mode}>Standard Shipping (3-5 business days)</Label>
        </View>
        <View className="flex-row items-center gap-3">
          <RadioGroupItem value="express" />
          <Label mode={mode}>Express Shipping (1-2 business days)</Label>
        </View>
        <View className="flex-row items-center gap-3">
          <RadioGroupItem value="overnight" />
          <Label mode={mode}>Overnight Shipping (Next day)</Label>
        </View>
      </RadioGroup>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Horizontal Layout
      </Text>

      <RadioGroup
        mode={mode}
        value={themePref}
        onValueChange={setThemePref}
        className="flex-row gap-6"
      >
        <View className="flex-row items-center gap-2">
          <RadioGroupItem value="light" />
          <Label mode={mode}>Light</Label>
        </View>
        <View className="flex-row items-center gap-2">
          <RadioGroupItem value="dark" />
          <Label mode={mode}>Dark</Label>
        </View>
        <View className="flex-row items-center gap-2">
          <RadioGroupItem value="system" />
          <Label mode={mode}>System</Label>
        </View>
      </RadioGroup>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Disabled Group
      </Text>

      <RadioGroup mode={mode} value="option-1" disabled className="gap-4">
        <View className="flex-row items-center gap-3">
          <RadioGroupItem value="option-1" />
          <Label mode={mode} className="opacity-50">
            Option 1 (Selected)
          </Label>
        </View>
        <View className="flex-row items-center gap-3">
          <RadioGroupItem value="option-2" />
          <Label mode={mode} className="opacity-50">
            Option 2 (Unselected)
          </Label>
        </View>
      </RadioGroup>
    </View>
  );
};

export default RadioGroupShowcase;

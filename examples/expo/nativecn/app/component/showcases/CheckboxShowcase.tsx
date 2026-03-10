import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../lib/ThemeContext';
import { Checkbox } from '../../../components/ui/checkbox';
import { Label } from '../../../components/ui/label';

const CheckboxShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mode = isDark ? 'dark' : 'light';

  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(true);

  return (
    <View className="gap-6 pb-10">
      <Text className={`text-xl font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}>
        Basic Checkbox
      </Text>

      <View className="flex-row items-center gap-3">
        <Checkbox mode={mode} checked={terms} onCheckedChange={setTerms} />
        <Label mode={mode} onPress={() => setTerms(!terms)}>
          Accept terms and conditions
        </Label>
      </View>

      <Text
        className={`text-xs ml-8 ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
      >
        You agree to our Terms of Service and Privacy Policy.
      </Text>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Checked by Default
      </Text>

      <View className="flex-row items-center gap-3">
        <Checkbox mode={mode} checked={marketing} onCheckedChange={setMarketing} />
        <Label mode={mode} onPress={() => setMarketing(!marketing)}>
          Receive marketing emails
        </Label>
      </View>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Disabled State
      </Text>

      <View className="flex-row items-center gap-3">
        <Checkbox mode={mode} checked={true} disabled />
        <Label mode={mode} className="opacity-50">
          Disabled (Checked)
        </Label>
      </View>

      <View className="flex-row items-center gap-3 mt-2">
        <Checkbox mode={mode} checked={false} disabled />
        <Label mode={mode} className="opacity-50">
          Disabled (Unchecked)
        </Label>
      </View>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Error State
      </Text>

      <View className="flex-row items-center gap-3">
        <Checkbox mode={mode} checked={false} error />
        <Label mode={mode} className="text-destructive">
          Required Field
        </Label>
      </View>
    </View>
  );
};

export default CheckboxShowcase;

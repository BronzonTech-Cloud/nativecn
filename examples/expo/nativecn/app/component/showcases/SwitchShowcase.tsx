import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../lib/ThemeContext';
import { Switch } from '../../../components/ui/switch';
import { Label } from '../../../components/ui/label';

const SwitchShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mode = isDark ? 'dark' : 'light';

  const [airplaneMode, setAirplaneMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View className="gap-6 pb-10">
      <Text className={`text-xl font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}>
        Basic Switch
      </Text>

      <View
        className={`flex-row items-center justify-between p-4 rounded-lg border ${isDark ? 'border-dark-border bg-dark-background' : 'border-border bg-background'}`}
      >
        <View className="gap-1">
          <Label mode={mode} className="text-base">
            Airplane Mode
          </Label>
          <Text
            className={`text-sm ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
          >
            Disable all wireless connections.
          </Text>
        </View>
        <Switch mode={mode} checked={airplaneMode} onCheckedChange={setAirplaneMode} />
      </View>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Checked by Default
      </Text>

      <View
        className={`flex-row items-center justify-between p-4 rounded-lg border ${isDark ? 'border-dark-border bg-dark-background' : 'border-border bg-background'}`}
      >
        <View className="gap-1">
          <Label mode={mode} className="text-base">
            Push Notifications
          </Label>
          <Text
            className={`text-sm ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
          >
            Receive alerts for new messages.
          </Text>
        </View>
        <Switch mode={mode} checked={notifications} onCheckedChange={setNotifications} />
      </View>

      <Text
        className={`text-xl font-bold mt-4 ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
      >
        Disabled State
      </Text>

      <View
        className={`flex-row items-center justify-between p-4 rounded-lg border ${isDark ? 'border-dark-border bg-dark-background' : 'border-border bg-background'}`}
      >
        <View className="gap-1 opacity-50">
          <Label mode={mode} className="text-base">
            Developer Mode
          </Label>
          <Text
            className={`text-sm ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
          >
            Advanced settings for debugging.
          </Text>
        </View>
        <Switch mode={mode} checked={false} disabled />
      </View>

      <View
        className={`flex-row items-center justify-between p-4 rounded-lg border mt-2 ${isDark ? 'border-dark-border bg-dark-background' : 'border-border bg-background'}`}
      >
        <View className="gap-1 opacity-50">
          <Label mode={mode} className="text-base">
            Data Analytics
          </Label>
          <Text
            className={`text-sm ${isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'}`}
          >
            Share usage data with developers.
          </Text>
        </View>
        <Switch mode={mode} checked={true} disabled />
      </View>
    </View>
  );
};

export default SwitchShowcase;

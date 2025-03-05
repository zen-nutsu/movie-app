import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback } from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';

import colors from './global/colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoaded] = useFonts({
    'sf-pro': require('../assets/fonts/SF-Pro.ttf'),
  });

  const theme = useColorScheme();

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={handleOnLayout}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar animated backgroundColor={colors.backgroundColor(theme)} />
    </View>
  );
}

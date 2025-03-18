import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback } from 'react';
import { StatusBar, View, useColorScheme } from 'react-native';

import colors from '../global/colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoaded] = useFonts({
    'sf-pro': require('../../assets/fonts/SF-Pro.ttf'),
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

  const queryClient = new QueryClient();

  return (
    <View style={{ flex: 1 }} onLayout={handleOnLayout}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </QueryClientProvider>
      <StatusBar hidden animated backgroundColor={colors.backgroundColor(theme)} />
    </View>
  );
}

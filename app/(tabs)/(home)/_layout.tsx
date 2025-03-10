import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const HomeLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
};

export default HomeLayout;

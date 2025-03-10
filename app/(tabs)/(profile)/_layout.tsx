import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const ProfileLayout = () => {
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

export default ProfileLayout;

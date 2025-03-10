import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const SavedLayout = () => {
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

export default SavedLayout;

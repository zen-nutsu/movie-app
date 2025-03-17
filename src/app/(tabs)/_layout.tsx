import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

import colors from '../../global/colors';

export default function TabLayout() {
  const theme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primaryTextColor(theme),
        tabBarInactiveTintColor: colors.primaryTextDisabledColor(theme),
        tabBarStyle: {
          backgroundColor: colors.backgroundColor(theme),
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size + 5} />;
          },
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="search" color={color} size={size + 5} />;
          },
        }}
      />
      <Tabs.Screen
        name="(saved)"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="bookmark" color={color} size={size + 5} />;
          },
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size + 5} />;
          },
        }}
      />
    </Tabs>
  );
}

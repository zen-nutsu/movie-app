import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import colors from '@/app/global/colors';

const Home = () => {
  const theme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor(theme),
      }}
    >
      <Text>home</Text>
    </View>
  );
};

export default Home;

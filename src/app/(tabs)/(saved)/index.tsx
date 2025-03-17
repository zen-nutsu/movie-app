import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import colors from '@/src/global/colors';

const Saved = () => {
  const theme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor(theme),
      }}
    >
      <Text>saved</Text>
    </View>
  );
};

export default Saved;

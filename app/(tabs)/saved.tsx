import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import colors from '../global/colors';

const saved = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

export default saved;

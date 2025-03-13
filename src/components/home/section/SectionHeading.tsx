import React from 'react';
import { Text, useColorScheme, useWindowDimensions } from 'react-native';

import colors from '@/src/global/colors';

const SectionHeading = ({ text }: { text: string }) => {
  const theme = useColorScheme();
  const { width } = useWindowDimensions();
  return (
    <Text
      style={{
        fontSize: width * 0.07,
        fontWeight: '600',
        color: colors.primaryTextColor(theme),
        fontFamily: 'sf-pro',
      }}
    >
      {text}
    </Text>
  );
};

export default SectionHeading;

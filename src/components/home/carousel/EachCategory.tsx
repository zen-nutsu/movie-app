import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';

import colors from '@/src/global/colors';

const EachCategory = ({ text }: { text: string }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        padding: width * 0.035,
        borderRadius: 100,
        marginBottom: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        backgroundColor: colors.darkTransparent,
      }}
    >
      <Text
        style={{
          color: colors.white,
          letterSpacing: 2,
          textAlign: 'center',
          fontFamily: 'sf-pro',
          fontWeight: 'medium',
          fontSize: width * 0.03,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default EachCategory;

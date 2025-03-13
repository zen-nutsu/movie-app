import React from 'react';
import { Text, useColorScheme, useWindowDimensions } from 'react-native';

import colors from '@/src/global/colors';

function MovieTitle({ title }: { title: string }) {
  const theme = useColorScheme();
  const { width } = useWindowDimensions();
  return (
    <Text
      style={{
        color: colors.textColor(theme),
        fontSize: width * 0.035,
        padding: 0,
        margin: 0,
      }}
      numberOfLines={2}
      ellipsizeMode="tail"
    >
      {title}
    </Text>
  );
}

export default MovieTitle;

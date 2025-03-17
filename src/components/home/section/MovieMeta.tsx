import React from 'react';
import { Text, useColorScheme, useWindowDimensions } from 'react-native';

import colors from '@/src/global/colors';

const MovieMeta = ({ metaInfo }: { metaInfo: string }) => {
  const theme = useColorScheme();
  const { width } = useWindowDimensions();
  return (
    <Text
      style={{
        color: colors.lightTextPrimaryColor(theme),
        fontSize: width * 0.028,
        padding: 0,
        margin: 0,
      }}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {metaInfo}
    </Text>
  );
};

export default MovieMeta;

import React from 'react';
import { useWindowDimensions, View } from 'react-native';

import colors from '@/app/global/colors';

const EachCarouselPagination = ({ isCurrent = false }: { isCurrent?: boolean }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        width: isCurrent ? width * 0.13 : 10,
        height: height * 0.01,
        borderRadius: 100,
        marginTop: 10,
        backgroundColor: isCurrent ? colors.white : colors.lightTransparent,
      }}
    />
  );
};

export default EachCarouselPagination;

import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder';
import React from 'react';
import { useColorScheme, useWindowDimensions } from 'react-native';

import { colors } from '@/src/global';

const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);

const EachMovieLoadingCard = ({ isWide }: { isWide?: boolean }) => {
  const { height, width } = useWindowDimensions();
  const theme = useColorScheme();
  return (
    <ShimmerPlaceHolder
      shimmerColors={[colors.backgroundColor(theme), colors.lightDark, colors.lightDark]}
      visible={false}
      width={isWide ? width * 0.7 : width * 0.43}
      height={isWide ? height * 0.2 : height * 0.3}
      style={{
        borderRadius: 10,
      }}
    />
  );
};

export default EachMovieLoadingCard;

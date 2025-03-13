import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import colors from '@/src/global/colors';

const EachCarouselPagination = ({ isCurrent = false }: { isCurrent?: boolean }) => {
  const { width, height } = useWindowDimensions();
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    if (isCurrent) {
      return { width: (randomWidth.value = withTiming(width * 0.1, config)) };
    } else {
      return { width: (randomWidth.value = withTiming(10, config)) };
    }
  }, [isCurrent]);

  useEffect(() => {
    randomWidth.value = isCurrent ? width * 0.1 : 10;
  }, [isCurrent, randomWidth, width]);

  return (
    <Animated.View
      style={[
        {
          height: height * 0.01,
          borderRadius: 100,
          marginTop: 10,
          backgroundColor: isCurrent ? colors.white : colors.lightTransparent,
        },
        style,
      ]}
    />
  );
};

export default EachCarouselPagination;

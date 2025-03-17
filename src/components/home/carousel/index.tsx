import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder';
import React, { useEffect, useRef } from 'react';
import { Animated, StatusBar, useColorScheme, useWindowDimensions } from 'react-native';
import PagerView from 'react-native-pager-view';

import { CONSTANTS, colors } from '@/src/global';

import EachCarousel from './EachCarousel';
import CarouselPagination from './pagination/CarouselPagination';

const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);

export default function Carousel({
  data,
  translateY,
  opacity,
  isLoading,
}: {
  data: { title: string; description: string; image: string; id: string; categories: string[] }[];
  translateY: Animated.AnimatedInterpolation<string | number>;
  opacity: Animated.AnimatedInterpolation<string | number>;
  isLoading?: boolean;
}) {
  const { height, width } = useWindowDimensions();
  const ref = useRef(null);
  const theme = useColorScheme();
  const [currentPosition, setCurrentPosition] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Because this is coming from package that doesn't have types.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref?.current?.setPage((currentPosition + 1) % data.length);
      setCurrentPosition(currentPosition => (currentPosition + 1) % data.length);
    }, CONSTANTS.CAROUSEL_SLIDER_TRANSITION_TIME);
    return () => clearInterval(interval);
  }, [currentPosition, data.length]);

  if (isLoading) {
    return (
      <ShimmerPlaceHolder
        shimmerColors={[colors.backgroundColor(theme), colors.lightDark, colors.lightDark]}
        visible={false}
        width={width}
        height={height * 0.55}
      />
    );
  }

  return (
    <Animated.View
      style={{
        height: height * 0.55,
        backgroundColor: colors.black,
        transform: [{ translateY }],
        opacity,
      }}
    >
      <StatusBar hidden />
      <PagerView
        ref={ref}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={e => {
          setCurrentPosition(e.nativeEvent.position);
        }}
      >
        {data.map(item => (
          <EachCarousel
            key={item.id}
            categories={item.categories}
            description={item.description}
            id={item.id}
            image={item.image}
            title={item.title}
            translateY={translateY}
          />
        ))}
      </PagerView>
      <CarouselPagination currentPosition={currentPosition} totalPages={data.length} />
    </Animated.View>
  );
}

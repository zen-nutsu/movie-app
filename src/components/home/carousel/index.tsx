import React, { useEffect, useRef } from 'react';
import { Animated, StatusBar, useWindowDimensions } from 'react-native';
import PagerView from 'react-native-pager-view';

import { CONSTANTS, colors } from '@/src/global';

import EachCarousel from './EachCarousel';
import CarouselPagination from './pagination/CarouselPagination';

export default function Carousel({
  data,
  translateY,
  opacity,
}: {
  data: { title: string; description: string; image: string; id: string; categories: string[] }[];
  translateY: Animated.AnimatedInterpolation<string | number>;
  opacity: Animated.AnimatedInterpolation<string | number>;
}) {
  const { height } = useWindowDimensions();
  const ref = useRef(null);
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

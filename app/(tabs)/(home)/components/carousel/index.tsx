import React, { useEffect, useRef } from 'react';
import { StatusBar, View, useWindowDimensions } from 'react-native';
import PagerView from 'react-native-pager-view';

import colors from '@/app/global/colors';

import EachCarousel from './EachCarousel';
import CarouselPagination from './pagination/CarouselPagination';

export default function Carousel({
  data,
}: {
  data: { title: string; description: string; image: string; id: string; categorys: string[] }[];
}) {
  const { height } = useWindowDimensions();
  const ref = useRef(null);
  const [currentPosition, setCurrentPosition] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref?.current?.setPage((currentPosition + 1) % data.length);
      setCurrentPosition(currentPosition => (currentPosition + 1) % data.length);
    }, 3900);
    return () => clearInterval(interval);
  }, [currentPosition, data.length]);

  return (
    <View
      style={{
        height: height * 0.55,
        backgroundColor: colors.black,
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
            categorys={item.categorys}
            description={item.description}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </PagerView>
      <CarouselPagination currentPosition={currentPosition} totalPages={data.length} />
    </View>
  );
}

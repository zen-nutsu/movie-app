import React from 'react';
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
  const [currentPosition, setCurrentPosition] = React.useState(0);
  return (
    <View
      style={{
        height: height * 0.55,
        backgroundColor: colors.black,
      }}
    >
      <StatusBar hidden />
      <PagerView
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

import React from 'react';
import { View } from 'react-native';

import EachCarouselPagination from './EachCarouselPagination';

const CarouselPagination = ({
  currentPosition,
  totalPages,
}: {
  currentPosition: number;
  totalPages: number;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
      }}
    >
      {Array(totalPages)
        .fill(0)
        .map((_, index) => (
          <EachCarouselPagination key={index} isCurrent={currentPosition === index} />
        ))}
    </View>
  );
};

export default CarouselPagination;

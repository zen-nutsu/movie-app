import React from 'react';
import { FlatList, View } from 'react-native';

import EachSectionMovieCard from './EachSectionMovieCard';
import SectionHeading from './SectionHeading';

const Section = ({
  heading,
  isWide,
  data,
}: {
  heading: string;
  isWide?: boolean;
  data: {
    image: string;
    title: string;
    metaInfo: string;
    id: string;
  }[];
}) => {
  return (
    <View
      style={{
        paddingLeft: 15,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          marginBottom: 5,
        }}
      >
        <SectionHeading text={heading} />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item }) => (
          <EachSectionMovieCard
            isWide={isWide}
            key={item.id}
            id={item.id}
            image={item.image}
            metaInfo={item.metaInfo}
            title={item.title}
          />
        )}
      />
    </View>
  );
};

export default Section;

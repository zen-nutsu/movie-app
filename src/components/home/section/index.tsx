import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { getMovies } from '@/lib/api';
import { formatSectionMovies } from '@/lib/utils';
import type { ProcessedPopularMovie } from '@/types';

import EachMovieLoadingCard from './EachMovieLoadingCard';
import EachSectionMovieCard from './EachSectionMovieCard';
import SectionHeading from './SectionHeading';

const Section = ({
  heading,
  isWide,
  slug,
}: {
  heading: string;
  isWide?: boolean;
  slug: 'top_rated' | 'popular' | 'upcoming' | 'now_playing';
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProcessedPopularMovie[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetchedData = await getMovies(slug);
      const formattedData = await formatSectionMovies(fetchedData);
      setData(formattedData);
      setIsLoading(false);
    }
    fetchData();
  }, [slug]);

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
        data={isLoading ? Array(5).fill(0) : data}
        renderItem={({ item }) =>
          isLoading ? (
            <EachMovieLoadingCard isWide={isWide} />
          ) : (
            <EachSectionMovieCard
              isWide={isWide}
              key={item.id}
              id={item.id}
              image={item.image}
              metaInfo={formatInfoWithSeparator([item.release_year, item.genres[0] || 'Unknown'])}
              title={item.title}
            />
          )
        }
      />
    </View>
  );
};

const formatInfoWithSeparator = (
  items: (string | undefined)[],
  separator: string = ' • '
): string => {
  const validItems = items.filter((item): item is string => !!item);
  return validItems.join(separator);
};

export default Section;

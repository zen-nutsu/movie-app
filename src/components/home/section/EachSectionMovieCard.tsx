import React from 'react';
import { Image, useColorScheme, useWindowDimensions, View } from 'react-native';

import colors from '@/src/global/colors';

import MovieMeta from './MovieMeta';
import MovieTitle from './MovieTitle';

const EachSectionMovieCard = ({
  isWide,
  image,
  title,
  metaInfo,
  //TODO: This will be used in future for navigation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}: {
  isWide?: boolean;
  image: string;
  title: string;
  metaInfo: string;
  id: string;
}) => {
  const { height, width } = useWindowDimensions();
  const theme = useColorScheme();
  return (
    <View
      style={{
        width: isWide ? width * 0.7 : width * 0.43,
        backgroundColor: colors.backgroundColor(theme),
        marginRight: 15,
      }}
    >
      <Image
        source={{
          uri: image,
          cache: 'force-cache',
        }}
        style={{
          height: isWide ? height * 0.2 : height * 0.3,
          width: '100%',
          borderRadius: 10,
        }}
        defaultSource={
          isWide
            ? require('@/assets/images/placeholder-poster-wide.png')
            : require('@/assets/images/placeholder-poster.png')
        }
      />
      <View style={{ padding: 5, flex: 1, justifyContent: 'flex-start' }}>
        <MovieTitle title={title} />
        <MovieMeta metaInfo={metaInfo} />
      </View>
    </View>
  );
};

export default EachSectionMovieCard;

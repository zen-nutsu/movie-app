import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, SafeAreaView, Text, useWindowDimensions, View } from 'react-native';

import colors from '@/app/global/colors';

import EachCategory from './EachCategory';

const EachCarousel = ({
  title,
  description,
  image,
  // TODO: This will be used later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  categories,
}: {
  title: string;
  description: string;
  image: string;
  id: string;
  categories: string[];
}) => {
  const { width } = useWindowDimensions();
  return (
    <ImageBackground
      source={{
        uri: image,
        cache: 'force-cache',
      }}
      style={{ flex: 1, justifyContent: 'flex-end' }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.9)']}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: 15,
            paddingHorizontal: width * 0.05,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: width * 0.06,
              fontFamily: 'sf-pro',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              color: colors.white,
              fontSize: width * 0.035,
              fontFamily: 'sf-pro',
              fontWeight: 'medium',
            }}
          >
            {description}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: 10,
            }}
          >
            {categories.map(category => (
              <EachCategory key={category} text={category} />
            ))}
          </View>
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EachCarousel;

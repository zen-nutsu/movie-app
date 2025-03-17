import React, { useRef } from 'react';
import { Animated, useColorScheme } from 'react-native';

import colors from '@/src/global/colors';

import { Carousel, Section } from '../../../components';

const Home = () => {
  // TODO: This is a custom data and need to be replaced with API call
  const customData = [
    {
      title: 'Joker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image: 'https://images.hdqwalls.com/download/joker-put-on-happy-face-s1-540x960.jpg',
      id: '1',
      categories: ['Damara', '18+', 'USA', '2024'],
    },
    {
      title: 'Batman Dark Knight Rises',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image:
        'https://m.media-amazon.com/images/S/pv-target-images/c84f0cfb20b0b4646f9ea7582fbe230ea9960f9cadc2ee42e5e6d8e5154da888._SX1080_FMjpg_.jpg',
      id: '101',
      categories: ['Damara', '18+', 'USA', '2024'],
    },
    {
      title: 'Taken',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image:
        'https://m.media-amazon.com/images/S/pv-target-images/474b2060928f76519e7c987be964a7944f808b9ed29547236be32a596a948d75._SX1080_FMjpg_.jpg',
      id: '107',
      categories: ['Damara', '18+', 'USA', '2024'],
    },
    {
      title: 'Joker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image: 'https://images.hdqwalls.com/download/joker-put-on-happy-face-s1-540x960.jpg',
      id: '22',
      categories: ['Damara', '18+', 'USA', '2024'],
    },
  ];

  const theme = useColorScheme();
  const scrollY = useRef(new Animated.Value(0)).current;

  const inputRange = [0, 50, 100, 150, 200, 250];

  const translateY = scrollY.interpolate({
    inputRange,
    outputRange: [0, -20, -40, -60, -80, -100],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 350],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.ScrollView
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: true,
      })}
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor(theme),
      }}
    >
      <Carousel data={customData} translateY={translateY} opacity={opacity} />
      <Section heading="Popular" slug="popular" />
      <Section heading="Top Rated" isWide={true} slug="top_rated" />
      <Section heading="Now Playing" slug="now_playing" />
      <Section heading="Upcoming" isWide={true} slug="upcoming" />
    </Animated.ScrollView>
  );
};

export default Home;

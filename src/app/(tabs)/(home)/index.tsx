import React, { useRef } from 'react';
import { Animated, useColorScheme } from 'react-native';

import colors from '@/src/global/colors';

import { Carousel, Section } from '../../../components';

const Home = () => {
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
      <Carousel translateY={translateY} opacity={opacity} />
      <Section heading="Popular" slug="popular" />
      <Section heading="Top Rated" isWide={true} slug="top_rated" />
      <Section heading="Now Playing" slug="now_playing" />
      <Section heading="Upcoming" isWide={true} slug="upcoming" />
    </Animated.ScrollView>
  );
};

export default Home;

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

  // TODO: This is a custom data and need to be replaced with API call
  const customData2 = [
    {
      image:
        'https://images-cdn.ubuy.co.in/668f03f763dc6918441092c0-avengers-infinity-war-movie-poster.jpg',
      title: 'Avenger Endgame',
      metaInfo: '2024  •  Action',
      id: '1',
    },
    {
      image:
        'https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg?region=0%2C0%2C540%2C810',
      title: 'Wall-E',
      metaInfo: '2024  •  Action',
      id: '2',
    },
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BMjYzYzFmOWUtMzU3Ny00MjkzLTgyYjEtYmFhMGJlZTlmZjYwXkEyXkFqcGc@._V1_.jpg',
      title: 'Rise From Dead',
      metaInfo: '2024  •  Action',
      id: '3',
    },
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg',
      title: 'Batman',
      metaInfo: '2024  •  Action',
      id: '4',
    },
    {
      image:
        'https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Fan_Art_Hollywood_English_Movie_Poster_2_a6033aba-28e1-455e-bbce-71c55f5f3676.jpg?v=1579504882',
      title: 'Joker',
      metaInfo: '2024  •  Action',
      id: '5',
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
      <Section heading="Popular" data={customData2} />
      <Section heading="Top Rated" isWide={true} data={customData2} />
      <Section heading="Trending" data={customData2} />
      <Section heading="New Releases" isWide={true} data={customData2} />
    </Animated.ScrollView>
  );
};

export default Home;

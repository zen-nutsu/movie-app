import React from 'react';
import { View, useColorScheme } from 'react-native';

import colors from '@/app/global/colors';

import Carousel from './components/carousel';

const Home = () => {
  // TODO: This is a custom data and need to be replaced with API call
  const customData = [
    {
      title: 'Joker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image: 'https://images.hdqwalls.com/download/joker-put-on-happy-face-s1-540x960.jpg',
      id: '1',
      categorys: ['Damara', '18+', 'USA', '2024'],
    },
    {
      title: 'Batman Dark Knight Rises',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image:
        'https://m.media-amazon.com/images/S/pv-target-images/c84f0cfb20b0b4646f9ea7582fbe230ea9960f9cadc2ee42e5e6d8e5154da888._SX1080_FMjpg_.jpg',
      id: '101',
      categorys: ['Damara', '18+', 'USA', '2024'],
    },
    {
      title: 'Taken',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image:
        'https://m.media-amazon.com/images/S/pv-target-images/474b2060928f76519e7c987be964a7944f808b9ed29547236be32a596a948d75._SX1080_FMjpg_.jpg',
      id: '107',
      categorys: ['Damara', '18+', 'USA', '2024'],
    },
    {
      title: 'Joker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      image: 'https://images.hdqwalls.com/download/joker-put-on-happy-face-s1-540x960.jpg',
      id: '22',
      categorys: ['Damara', '18+', 'USA', '2024'],
    },
  ];

  const theme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor(theme),
      }}
    >
      <Carousel data={customData} />
    </View>
  );
};

export default Home;

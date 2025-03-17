import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, SafeAreaView, Text, useWindowDimensions } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import LoginWithGoogleButton from '../components/global/LoginWithGoogleButton';
import { CONSTANTS } from '../global';
import colors from '../global/colors';

export default function Index() {
  const { width, height } = useWindowDimensions();
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../../assets/images/login-page-background.jpg')}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)']}
          style={{
            flex: 1,
            justifyContent: 'space-between',
            width: width,
            paddingVertical: height * 0.05,
            paddingHorizontal: width * 0.05,
          }}
        >
          <Animated.View entering={FadeInUp.duration(CONSTANTS.ANIMATION_DURATION).springify()}>
            <Text
              style={{
                color: colors.white,
                fontSize: width * 0.08,
                fontFamily: 'sf-pro',
                fontWeight: 'bold',
              }}
            >
              Sign In with your{'\n'}
              Google account
            </Text>
            <Text
              style={{
                color: colors.lightWhite,
                fontSize: width * 0.05,
                fontFamily: 'sf-pro',
              }}
            >
              To the world of Cinema
            </Text>
          </Animated.View>
          <LoginWithGoogleButton
            style={{
              marginTop: 20,
            }}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
}

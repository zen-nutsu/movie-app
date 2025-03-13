import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginWithGoogleButton from '../components/global/LoginWithGoogleButton';
import colors from '../global/colors';

export default function Index() {
  const theme = useColorScheme();
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor(theme),
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../../assets/images/login-background.jpg')}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Image
            source={require('../../assets/images/logo.png')}
            style={{
              position: 'absolute',
              top: height * 0.1,
              width: 100,
              height: 100,
              borderColor: colors.white,
              borderWidth: 2,
              borderRadius: 50,
            }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)']}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: width }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: width * 0.08,
                textAlign: 'center',
                fontFamily: 'sf-pro',
                fontWeight: 'bold',
              }}
            >
              Jump In & Explore
            </Text>
            <Text
              style={{
                color: colors.lightWhite,
                fontSize: width * 0.05,
                paddingRight: width * 0.05,
                paddingLeft: width * 0.05,
                textAlign: 'center',
                fontFamily: 'sf-pro',
              }}
            >
              The world of Cinema
            </Text>
            <LoginWithGoogleButton
              style={{
                marginTop: 20,
              }}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

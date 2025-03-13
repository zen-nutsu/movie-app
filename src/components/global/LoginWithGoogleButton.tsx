import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { CONSTANTS } from '@/src/global';

import colors from '../../global/colors';

export default function LoginWithGoogleButton({ style }: { style?: StyleProp<ViewStyle> }) {
  GoogleSignin?.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '782479739815-1kb26evefmt2kr89cgorsc69ruf4jnc2.apps.googleusercontent.com',
  });

  const { width } = useWindowDimensions();

  const signIn = async () => {
    try {
      //TODO: We are currently just moving to the home tab we should add our logic here
      router.replace('/(tabs)/(home)');
      return;
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        // We are getting the JWT and the user info we can use supabase or our backend as well
        //TODO: signed in successfully
      } else {
        //TODO: sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            //TODO: operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            //TODO: Android only, play services not available or outdated
            break;
          default:
          //TODO: some other error happened
        }
      } else {
        //TODO: an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <Animated.View entering={FadeInDown.duration(CONSTANTS.ANIMATION_DURATION).springify()}>
      <TouchableOpacity
        onPress={signIn}
        style={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(style as any),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
          padding: 5,
          borderRadius: 100,
          paddingLeft: 10,
          paddingRight: 20,
          gap: 10,
          minHeight: 50,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            position: 'absolute',
            left: 10,
          }}
          source={require('../../../assets/images/google-logo.webp')}
        />
        <Text
          style={{
            fontFamily: 'sf-pro',
            color: colors.black,
            fontSize: width * 0.035,
            fontWeight: 'medium',
          }}
        >
          Sign in with Google →
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

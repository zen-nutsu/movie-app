import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

import colors from '../global/colors';

export default function LoginWithGoogleButton({ style }: { style?: StyleProp<ViewStyle> }) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
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
      }}
    >
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 100,
        }}
        source={require('../../assets/images/google-logo.webp')}
      />
      <Text
        style={{
          fontFamily: 'sf-pro',
          color: colors.black,
          fontSize: width * 0.035,
          fontWeight: 'medium',
        }}
      >
        Sign in with Google
      </Text>
    </TouchableOpacity>
  );
}

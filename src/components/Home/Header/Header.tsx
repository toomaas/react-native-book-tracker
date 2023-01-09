import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Header.styles';
import {HeaderProps} from './Header.types';

const HEADER_HEIGHT = 150;

const Header: React.FunctionComponent<HeaderProps> = props => {
  const {colors} = useTheme();

  const insets = useSafeAreaInsets();

  const headerHeight = props.animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, insets.top],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        height: headerHeight,
        backgroundColor: colors.card,
        ...styles.container,
      }}>
      <Animated.Text
        style={{
          color: colors.text,
        }}>
        Welcome Back!
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;

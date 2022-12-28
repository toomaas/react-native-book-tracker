import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './Text.types';

const Text: React.FunctionComponent<TextProps> = props => {
  const {style} = props;

  const {colors} = useTheme();

  return (
    <RNText {...props} style={[style, {color: colors.text}]}>
      {props.children}
    </RNText>
  );
};

export default Text;

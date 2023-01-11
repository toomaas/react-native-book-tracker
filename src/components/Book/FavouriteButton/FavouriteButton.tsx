import {useTheme} from '@react-navigation/native';
import {FAB} from '@rneui/base';
import React from 'react';
import {FavouriteButtonProps} from './FavouriteButton.types';

const FavouriteButton: React.FunctionComponent<
  FavouriteButtonProps
> = props => {
  const {colors} = useTheme();

  return (
    <FAB
      buttonStyle={{backgroundColor: colors.primary}}
      icon={{
        name: 'star-plus-outline',
        type: 'material-community',
        color: 'white',
      }}
      placement="right"
      size="large"
    />
  );
};

export default FavouriteButton;

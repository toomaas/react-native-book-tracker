import {useTheme} from '@react-navigation/native';
import {FAB} from '@rneui/base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../../../redux/slices/bookSlice';
import {RootState} from '../../../redux/store';
import {FavouriteButtonProps} from './FavouriteButton.types';

const FavouriteButton: React.FunctionComponent<
  FavouriteButtonProps
> = props => {
  const {
    work: {key},
  } = props;
  const {colors} = useTheme();
  const favourites = useSelector((state: RootState) => state.book.favourites);
  const dispatch = useDispatch();

  console.log(favourites);

  const isFavourite = favourites.includes(key);

  return (
    <FAB
      buttonStyle={{
        backgroundColor: isFavourite ? colors.notification : colors.primary,
      }}
      icon={{
        name: 'star-plus-outline',
        type: 'material-community',
        color: 'white',
      }}
      placement="right"
      size="large"
      onPress={() => {
        isFavourite
          ? dispatch(removeFavourite(key))
          : dispatch(addFavourite(key));
      }}
    />
  );
};

export default FavouriteButton;

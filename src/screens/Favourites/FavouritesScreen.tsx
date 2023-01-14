import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import Text from '../../components/Text';
import {RootState} from '../../redux/store';
import styles from './FavouritesScreen.styles';
import {FavouritesScreenProps} from './FavouritesScreen.types';

const FavouritesScreen: React.FunctionComponent<FavouritesScreenProps> = () => {
  const favourites = useSelector((state: RootState) => state.book.favourites);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <FlatList
        contentContainerStyle={styles.scrollViewContainer}
        data={favourites}
        renderItem={favourite => {
          return <Text>{favourite.item}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default FavouritesScreen;

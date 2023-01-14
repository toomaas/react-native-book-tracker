import Work from '../api/openlibrary/works/model/Work';

export type RootNavigationParamList = {
  HomeScreen: undefined;
  BookScreen: {work: Work};
  FavouritesScreen: undefined;
};

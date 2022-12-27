import Work from '../api/openlibrary/books/model/Work';

export type RootNavigationParamList = {
  HomeScreen: undefined;
  BookScreen: {book: Work};
};

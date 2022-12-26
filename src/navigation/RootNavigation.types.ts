import {Book} from '../api/openlibrary/books/types';

export type RootNavigationParamList = {
  HomeScreen: undefined;
  BookScreen: {book: Book};
};

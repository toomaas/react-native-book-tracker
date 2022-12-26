import Book from '../api/openlibrary/books/model/Book';

export type RootNavigationParamList = {
  HomeScreen: undefined;
  BookScreen: {book: Book};
};

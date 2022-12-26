import Book from '../model/Book';
import {TrendingBooksRawResponse} from '../types';

export default class APITrendingBooksResponse {
  books: Book[];

  constructor(response: TrendingBooksRawResponse) {
    this.books = response.works.map(work => new Book(work));
  }
}

import {Work} from '../types';

export default class Book {
  title: string;
  coverImageId: number;
  authors: string[];

  constructor(work: Work) {
    const {author_name, cover_i, title} = work;
    this.title = title;
    this.coverImageId = cover_i;
    this.authors = author_name;
  }
}

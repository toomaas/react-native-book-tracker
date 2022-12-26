export interface TrendingBooksRawResponse {
  query: string;
  works: Work[];
}

export interface Work {
  author_name: string[];
  title: string;
  cover_i: number;
}

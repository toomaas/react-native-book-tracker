export interface APITrendingWorksRawResponse {
  query: string;
  works: APITrendingWork[];
}

export interface APITrendingWork {
  author_name: string[];
  author_key: string[];
  title: string;
  cover_i: number;
  key: string;
  edition_count: number;
  first_publish_year: number;
}

export interface APIWorkRawResponse {
  title: string;
  key: string;
  description: string;
}

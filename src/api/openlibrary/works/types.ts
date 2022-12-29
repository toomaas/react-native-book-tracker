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
  description: APIWorkDescription | string;
}

export interface APIWorkDescription {
  type: string;
  value: string;
}

export interface APIWorksBySubjectRawResponse {
  works: APISubjectWork[];
}

export interface APISubjectWork {
  authors: APISubjectWorkAuthor[];
  title: string;
  cover_id: number;
  key: string;
  edition_count: number;
  first_publish_year: number;
}

export interface APISubjectWorkAuthor {
  key: string;
  name: string;
}

export interface APIWorkRatingsRawResponse {
  summary: APIWorkRatingsSummary;
}

export interface APIWorkRatingsSummary {
  average: number;
  count: number;
}

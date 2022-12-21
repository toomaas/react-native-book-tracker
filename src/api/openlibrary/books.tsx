export enum TRENDING_SICE_ENUM {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FOREVER = 'forever',
  // monthly...
}

const OPEN_LIBRARY_URL = 'https://openlibrary.org';

export default function BooksApi() {
  return {
    async trending(
      limit: number = 5,
      since = TRENDING_SICE_ENUM.WEEKLY,
    ): Promise<TrendingBooksResponse> {
      const searchParams = {
        limit,
      };

      const searchParamsString = Object.keys(searchParams)
        .map((key: string) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            // @ts-ignore
            searchParams[key],
          )}`;
        })
        .join('&');

      const response = await fetch(
        `${OPEN_LIBRARY_URL}/trending/${since}.json?${searchParamsString}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },
      );
      if (response.status >= 200 && response.status < 300) {
        return response.json().then((json: TrendingBooksRawResponse) => {
          console.log(json);
          const res: TrendingBooksResponse = {
            books: [{author: 'abc', coverImageId: 123, title: 'dummy title'}],
          };
          return res;
        });
      }

      throw response;
    },
  };
}
export interface TrendingBooksRawResponse {
  query: string;
  works: Work[];
}

export interface Work {
  title: string;
  cover_i: number;
}

export interface TrendingBooksResponse {
  books: Book[];
}

export interface Book {
  title: string;
  coverImageId: number;
  author: string;
}
